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

// GET: list all cities or get one by ?id=...
export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      const city = await prisma.cities.findUnique({
        where: { id },
        include: { state: true }
      })
      if (!city) return NextResponse.json({ error: 'City not found' }, { status: 404 })
      return NextResponse.json(city)
    }

    const list = await prisma.cities.findMany({
      include: { state: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST: create a new city
export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name, stateId } = body
    if (!name) return NextResponse.json({ error: 'Missing `name` in request body' }, { status: 400 })
    if (!stateId) return NextResponse.json({ error: 'Missing `stateId` in request body' }, { status: 400 })

    // Verify state exists
    const stateExists = await prisma.states.findUnique({ where: { id: stateId } })
    if (!stateExists) return NextResponse.json({ error: 'State not found' }, { status: 404 })

    const created = await prisma.cities.create({
      data: { name, stateId },
      include: { state: true }
    })
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT: update an existing city (body must include `id`)
export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, name, stateId } = body
    if (!id) return NextResponse.json({ error: 'Missing `id` in request body' }, { status: 400 })

    const existing = await prisma.cities.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'City not found' }, { status: 404 })

    // Verify state exists if stateId is provided
    if (stateId) {
      const stateExists = await prisma.states.findUnique({ where: { id: stateId } })
      if (!stateExists) return NextResponse.json({ error: 'State not found' }, { status: 404 })
    }

    const updated = await prisma.cities.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(stateId ? { stateId } : {})
      },
      include: { state: true }
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

    const existing = await prisma.cities.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'City not found' }, { status: 404 })

    await prisma.cities.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
