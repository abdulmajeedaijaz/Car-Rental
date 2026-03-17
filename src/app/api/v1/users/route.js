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

// GET: list all users or get one by ?id=...
export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      const user = await prisma.users.findUnique({
        where: { id },
        select: { id: true, name: true, username: true, role_id: true, is_active: true, createdAt: true, updatedAt: true }
      })
      if (!user) return NextResponse.json({ error: 'User not found' }, { status: 404 })
      return NextResponse.json(user)
    }

    const list = await prisma.users.findMany({
      select: { id: true, name: true, username: true, role_id: true, is_active: true, createdAt: true, updatedAt: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST: create a new user
export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name, username, password, role_id } = body
    if (!name) return NextResponse.json({ error: 'Missing `name` in request body' }, { status: 400 })
    if (!username) return NextResponse.json({ error: 'Missing `username` in request body' }, { status: 400 })
    if (!password) return NextResponse.json({ error: 'Missing `password` in request body' }, { status: 400 })
    if (!role_id) return NextResponse.json({ error: 'Missing `role_id` in request body' }, { status: 400 })

    // Check if username already exists
    const existingUser = await prisma.users.findUnique({ where: { username } })
    if (existingUser) return NextResponse.json({ error: 'Username already exists' }, { status: 400 })

    const created = await prisma.users.create({
      data: { name, username, password, role_id, is_active: true },
      select: { id: true, name: true, username: true, role_id: true, is_active: true, createdAt: true, updatedAt: true }
    })
    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT: update an existing user (body must include `id`)
export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, name, username, password, role_id, is_active } = body
    if (!id) return NextResponse.json({ error: 'Missing `id` in request body' }, { status: 400 })

    const existing = await prisma.users.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    // Check if username already exists (if changing username)
    if (username && username !== existing.username) {
      const usernameExists = await prisma.users.findUnique({ where: { username } })
      if (usernameExists) return NextResponse.json({ error: 'Username already exists' }, { status: 400 })
    }

    const updated = await prisma.users.update({
      where: { id },
      data: {
        ...(name ? { name } : {}),
        ...(username ? { username } : {}),
        ...(password ? { password } : {}),
        ...(role_id ? { role_id } : {}),
        ...(is_active !== undefined ? { is_active } : {})
      },
      select: { id: true, name: true, username: true, role_id: true, is_active: true, createdAt: true, updatedAt: true }
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

    const existing = await prisma.users.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'User not found' }, { status: 404 })

    await prisma.users.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
