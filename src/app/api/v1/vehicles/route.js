import { NextResponse } from 'next/server'

async function getPrisma() {
  if (globalThis.__prisma) return globalThis.__prisma
  const mod = await import('../../../../../generated/prisma')
  const PrismaClient = mod.PrismaClient || mod.default?.PrismaClient || mod.PrismaClient
  globalThis.__prisma = new PrismaClient()
  return globalThis.__prisma
}

export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    if (id) {
      const v = await prisma.vehicle.findUnique({ where: { id } })
      if (!v) return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
      return NextResponse.json(v)
    }
    const list = await prisma.vehicle.findMany({ orderBy: { createdAt: 'desc' } })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
