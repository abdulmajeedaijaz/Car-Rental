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

// GET: list all states or get one by ?id=...
export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      const state = await prisma.states.findUnique({
        where: { id },
        include: { cities: true }
      })
      if (!state) return NextResponse.json({ error: 'State not found' }, { status: 404 })
      return NextResponse.json(state)
    }

    const list = await prisma.states.findMany({
      include: { cities: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST: create a new state
export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name } = body
    if (!name) return NextResponse.json({ error: 'Missing `name` in request body' }, { status: 400 })

    const created = await prisma.states.create({
      data: { name },
      include: { cities: true }
    })
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT: update an existing state (body must include `id`)
export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, name } = body
    if (!id) return NextResponse.json({ error: 'Missing `id` in request body' }, { status: 400 })

    const existing = await prisma.states.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'State not found' }, { status: 404 })

    const updated = await prisma.states.update({
      where: { id },
      data: {
        ...(name ? { name } : {})
      },
      include: { cities: true }
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

    const existing = await prisma.states.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'State not found' }, { status: 404 })

    // Delete related cities first due to foreign key constraint
    await prisma.cities.deleteMany({ where: { stateId: id } })

    await prisma.states.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
