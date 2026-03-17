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

// GET: list all variants or get one by ?id=...
export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      const variant = await prisma.variants.findUnique({
        where: { id },
        include: { model: true, brand: true }
      })
      if (!variant) return NextResponse.json({ error: 'Variant not found' }, { status: 404 })
      return NextResponse.json(variant)
    }

    const list = await prisma.variants.findMany({
      include: { model: true, brand: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST: create a new variant
export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name, model_id, brand_id } = body
    if (!name) return NextResponse.json({ error: 'Missing `name` in request body' }, { status: 400 })
    if (!model_id) return NextResponse.json({ error: 'Missing `model_id` in request body' }, { status: 400 })

    // Verify model exists
    const modelExists = await prisma.models.findUnique({ where: { id: model_id } })
    if (!modelExists) return NextResponse.json({ error: 'Model not found' }, { status: 404 })

    // Verify brand exists if provided
    if (brand_id) {
      const brandExists = await prisma.brands.findUnique({ where: { id: brand_id } })
      if (!brandExists) return NextResponse.json({ error: 'Brand not found' }, { status: 404 })
    }

    const created = await prisma.variants.create({
      data: { name, model_id, ...(brand_id ? { brand_id } : {}) },
      include: { model: true, brand: true }
    })
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT: update an existing variant (body must include `id`)
export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, name, model_id, brand_id } = body
    if (!id) return NextResponse.json({ error: 'Missing `id` in request body' }, { status: 400 })

    const existing = await prisma.variants.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Variant not found' }, { status: 404 })

    // Verify model exists if model_id is provided
    if (model_id) {
      const modelExists = await prisma.models.findUnique({ where: { id: model_id } })
      if (!modelExists) return NextResponse.json({ error: 'Model not found' }, { status: 404 })
    }

    // Verify brand exists if brand_id is provided
    if (brand_id) {
      const brandExists = await prisma.brands.findUnique({ where: { id: brand_id } })
      if (!brandExists) return NextResponse.json({ error: 'Brand not found' }, { status: 404 })
    }

    const updated = await prisma.variants.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(model_id ? { model_id } : {}),
        ...(brand_id ? { brand_id } : {})
      },
      include: { model: true, brand: true }
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

    const existing = await prisma.variants.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Variant not found' }, { status: 404 })

    await prisma.variants.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
