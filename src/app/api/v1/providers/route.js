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
      const provider = await prisma.providers.findUnique({ where: { id }, include: { city: true, state: true } })
      if (!provider) return NextResponse.json({ error: 'Provider not found' }, { status: 404 })
      return NextResponse.json(provider)
    }
    
    const providers = await prisma.providers.findMany({ orderBy: { createdAt: 'desc' }, include: { city: true, state: true } })
    return NextResponse.json(providers)
  } catch (err) {
    console.error('GET error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const prisma = await getPrisma()
    const body = await request.json()
    const { name, email_id, mobile_number, address, city_id, state_id, pin_code, bank_name, bank_account, is_active } = body

    if (!name) return NextResponse.json({ error: 'Missing name' }, { status: 400 })
    if (!email_id) return NextResponse.json({ error: 'Missing email_id' }, { status: 400 })
    if (!mobile_number) return NextResponse.json({ error: 'Missing mobile_number' }, { status: 400 })
    if (!city_id) return NextResponse.json({ error: 'Missing city_id' }, { status: 400 })
    if (!state_id) return NextResponse.json({ error: 'Missing state_id' }, { status: 400 })

    const city = await prisma.cities.findUnique({ where: { id: city_id } })
    if (!city) return NextResponse.json({ error: 'City not found' }, { status: 400 })

    const state = await prisma.states.findUnique({ where: { id: state_id } })
    if (!state) return NextResponse.json({ error: 'State not found' }, { status: 400 })

    const provider = await prisma.providers.create({
      data: {
        name,
        email_id,
        mobile_number,
        address: address || '',
        city_id,
        state_id,
        pin_code: pin_code || '',
        bank_name: bank_name || '',
        bank_account: bank_account || '',
        is_active: is_active !== false
      },
      include: { city: true, state: true }
    })

    return NextResponse.json(provider, { status: 201 })
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

    const existing = await prisma.providers.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Provider not found' }, { status: 404 })

    const provider = await prisma.providers.update({
      where: { id },
      data: updateData,
      include: { city: true, state: true }
    })

    return NextResponse.json(provider)
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

    const existing = await prisma.providers.findUnique({ where: { id } })
    if (!existing) return NextResponse.json({ error: 'Provider not found' }, { status: 404 })

    await prisma.providers.delete({ where: { id } })
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('DELETE error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
