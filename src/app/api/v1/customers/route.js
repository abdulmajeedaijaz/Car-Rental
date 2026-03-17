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
      const customer = await prisma.customer.findUnique({ where: { id }, include: { city: true, state: true } })
      if (!customer) return NextResponse.json({ error: 'Customer not found' }, { status: 404 })
      return NextResponse.json(customer)
    }
    
    const customers = await prisma.customer.findMany({ orderBy: { createdAt: 'desc' }, include: { city: true, state: true } })
    return NextResponse.json(customers)
  } catch (err) {
    console.error('GET error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name, email_id, mobile_number, alternate_mobile_number, address, city_id, state_id, pin_code, adhaar_number, adhar_front_image, adhar_back_image, driving_license_number, driving_license_front_image, driving_license_back_image, profile_image, is_active } = body

    if (!name) return NextResponse.json({ error: 'Missing name' }, { status: 400 })
    if (!email_id) return NextResponse.json({ error: 'Missing email_id' }, { status: 400 })
    if (!mobile_number) return NextResponse.json({ error: 'Missing mobile_number' }, { status: 400 })
    if (!city_id) return NextResponse.json({ error: 'Missing city_id' }, { status: 400 })
    if (!state_id) return NextResponse.json({ error: 'Missing state_id' }, { status: 400 })
    if (!adhaar_number) return NextResponse.json({ error: 'Missing adhaar_number' }, { status: 400 })
    if (!driving_license_number) return NextResponse.json({ error: 'Missing driving_license_number' }, { status: 400 })

    const city = await prisma.cities.findUnique({ where: { id: city_id } })
    if (!city) return NextResponse.json({ error: 'City not found' }, { status: 400 })

    const state = await prisma.states.findUnique({ where: { id: state_id } })
    if (!state) return NextResponse.json({ error: 'State not found' }, { status: 400 })

    const customer = await prisma.customer.create({
      data: {
        name,
        email_id,
        mobile_number,
        alternate_mobile_number: alternate_mobile_number || null,
        address: address || '',
        city_id,
        state_id,
        pin_code: pin_code || '',
        adhaar_number,
        adhar_front_image: adhar_front_image || '',
        adhar_back_image: adhar_back_image || '',
        driving_license_number,
        driving_license_front_image: driving_license_front_image || '',
        driving_license_back_image: driving_license_back_image || '',
        profile_image: profile_image || null,
        is_active: is_active !== false
      },
      include: { city: true, state: true }
    })

    return NextResponse.json(customer, { status: 201 })
  } catch (err) {
    console.error('POST error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const existing = await prisma.customer.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Customer not found' }, { status: 404 })

    const customer = await prisma.customer.update({
      where: { id },
      data: updateData,
      include: { city: true, state: true }
    })

    return NextResponse.json(customer)
  } catch (err) {
    console.error('PUT error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const prisma = await getPrisma()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const existing = await prisma.customer.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Customer not found' }, { status: 404 })

    await prisma.customer.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('DELETE error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
