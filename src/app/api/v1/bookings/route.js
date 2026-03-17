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

// GET: list all bookings or get one by ?id=...
export async function GET(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (id) {
      const booking = await prisma.vehicle_bookings.findUnique({
        where: { id },
        include: { vehicle: true, customer: true }
      })
      if (!booking) return NextResponse.json({ error: 'Booking not found' }, { status: 404 })
      return NextResponse.json(booking)
    }

    const list = await prisma.vehicle_bookings.findMany({
      include: { vehicle: true, customer: true },
      orderBy: { createdAt: 'desc' }
    })
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// POST: create a new booking
export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { vehicle_id, customer_id, start_time, end_time, booking_number, booking_status_id } = body

    if (!vehicle_id) return NextResponse.json({ error: 'Missing `vehicle_id`' }, { status: 400 })
    if (!customer_id) return NextResponse.json({ error: 'Missing `customer_id`' }, { status: 400 })
    if (!start_time) return NextResponse.json({ error: 'Missing `start_time`' }, { status: 400 })
    if (!end_time) return NextResponse.json({ error: 'Missing `end_time`' }, { status: 400 })

    // Validate vehicle and customer exist
    const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicle_id } })
    if (!vehicle) return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })

    const customer = await prisma.customer.findUnique({ where: { id: customer_id } })
    if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 })

    const created = await prisma.vehicle_bookings.create({
      data: {
        booking_number: booking_number || `BK-${Date.now()}`,
        vehicle_id,
        customer_id,
        start_time: new Date(start_time),
        end_time: new Date(end_time),
        ...(booking_status_id ? { booking_status_id } : {})
      },
      include: { vehicle: true, customer: true }
    })

    return NextResponse.json(created, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

// PUT: update an existing booking (body must include `id`)
export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, vehicle_id, customer_id, start_time, end_time, booking_status_id } = body
    if (!id) return NextResponse.json({ error: 'Missing `id` in request body' }, { status: 400 })

    const existing = await prisma.vehicle_bookings.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Booking not found' }, { status: 404 })

    // Validate provided relations
    if (vehicle_id) {
      const vehicle = await prisma.vehicle.findUnique({ where: { id: vehicle_id } })
      if (!vehicle) return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
    }
    if (customer_id) {
      const customer = await prisma.customer.findUnique({ where: { id: customer_id } })
      if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
    }

    const updated = await prisma.vehicle_bookings.update({
      where: { id },
      data: {
        ...(vehicle_id ? { vehicle_id } : {}),
        ...(customer_id ? { customer_id } : {}),
        ...(start_time ? { start_time: new Date(start_time) } : {}),
        ...(end_time ? { end_time: new Date(end_time) } : {}),
        ...(booking_status_id ? { booking_status_id } : {})
      },
      include: { vehicle: true, customer: true }
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

    const existing = await prisma.vehicle_bookings.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Booking not found' }, { status: 404 })

    await prisma.vehicle_bookings.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
