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

// GET: list all checklist categories or get one by ?id=...
export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      const category = await prisma.checklist_categories.findUnique({
        where: { id },
        include: { options: true }
      })
      if (!category) return NextResponse.json({ error: 'Checklist category not found' }, { status: 404 })
      return NextResponse.json(category)
    }

    const list = await prisma.checklist_categories.findMany({
      include: { options: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST: create a new checklist category
export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name } = body
    if (!name) return NextResponse.json({ error: 'Missing `name` in request body' }, { status: 400 })

    const created = await prisma.checklist_categories.create({
      data: { name },
      include: { options: true }
    })
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT: update an existing checklist category (body must include `id`)
export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, name } = body
    if (!id) return NextResponse.json({ error: 'Missing `id` in request body' }, { status: 400 })

    const existing = await prisma.checklist_categories.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Checklist category not found' }, { status: 404 })

    const updated = await prisma.checklist_categories.update({
      where: { id },
      data: {
        ...(name ? { name } : {})
      },
      include: { options: true }
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

    const existing = await prisma.checklist_categories.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Checklist category not found' }, { status: 404 })

    // Delete related options first due to foreign key constraint
    await prisma.checklist_options.deleteMany({ where: { category_id: id } })

    await prisma.checklist_categories.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
