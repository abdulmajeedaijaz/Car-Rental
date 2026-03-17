import { NextResponse } from 'next/server'

async function getPrisma() {
  if (globalThis.__prisma) return globalThis.__prisma
  const mod = await import('../../../../../generated/prisma')
  const PrismaClient = mod.PrismaClient || mod.default?.PrismaClient || mod.PrismaClient
  globalThis.__prisma = new PrismaClient()
  return globalThis.__prisma
}

export async function GET() {
  try {
    const prisma = await getPrisma()
    const usersCount = await prisma.users.count()
    const vehiclesCount = await prisma.vehicle.count()
    const bookingsCount = await prisma.vehicle_bookings.count()
    const customersCount = await prisma.customer.count()
    return NextResponse.json({ usersCount, vehiclesCount, bookingsCount, customersCount })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
