import { NextResponse } from 'next/server'

// Helper to load the generated Prisma client and cache a single instance.
async function getPrisma() {
  if (globalThis.__prisma) return globalThis.__prisma

  // dynamic import of the generated CommonJS bundle
  const mod = await import('../../../../../generated/prisma')
  const PrismaClient = mod.PrismaClient || mod.default?.PrismaClient || mod.PrismaClient

  // eslint-disable-next-line no-underscore-dangle
  globalThis.__prisma = new PrismaClient()
  return globalThis.__prisma
}

// GET: list all checklist options or get one by ?id=...
export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      const option = await prisma.checklist_options.findUnique({
        where: { id },
        include: { category: true }
      })
      if (!option) return NextResponse.json({ error: 'Checklist option not found' }, { status: 404 })
      return NextResponse.json(option)
    }

    const list = await prisma.checklist_options.findMany({
      include: { category: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST: create a new checklist option
export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name, category_id } = body
    if (!name) return NextResponse.json({ error: 'Missing `name` in request body' }, { status: 400 })
    if (!category_id) return NextResponse.json({ error: 'Missing `category_id` in request body' }, { status: 400 })

    // Verify category exists
    const categoryExists = await prisma.checklist_categories.findUnique({ where: { id: category_id } })
    if (!categoryExists) return NextResponse.json({ error: 'Checklist category not found' }, { status: 404 })

    const created = await prisma.checklist_options.create({
      data: { name, category_id },
      include: { category: true }
    })
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT: update an existing checklist option (body must include `id`)
export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, name, category_id } = body
    if (!id) return NextResponse.json({ error: 'Missing `id` in request body' }, { status: 400 })

    const existing = await prisma.checklist_options.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Checklist option not found' }, { status: 404 })

    // Verify category exists if category_id is provided
    if (category_id) {
      const categoryExists = await prisma.checklist_categories.findUnique({ where: { id: category_id } })
      if (!categoryExists) return NextResponse.json({ error: 'Checklist category not found' }, { status: 404 })
    }

    const updated = await prisma.checklist_options.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(category_id ? { category_id } : {})
      },
      include: { category: true }
    })
    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// DELETE: delete by ?id=... or body { id }
export async function DELETE(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    let id = url.searchParams.get('id')

    if (!id) {
      // try body
      try {
        const body = await request.json()
        id = body?.id
      } catch (_) {
        // ignore parse errors
      }
    }

    if (!id) return NextResponse.json({ error: 'Missing `id` (query or body)' }, { status: 400 })

    const existing = await prisma.checklist_options.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Checklist option not found' }, { status: 404 })

    await prisma.checklist_options.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
