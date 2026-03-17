import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const dataPath = path.join(process.cwd(), 'src', 'data', 'pendingVehicles.json')

async function readData() {
  const raw = await fs.readFile(dataPath, 'utf-8')
  return JSON.parse(raw)
}

async function writeData(obj) {
  await fs.writeFile(dataPath, JSON.stringify(obj, null, 2), 'utf-8')
}

export async function GET(request) {
  try {
    const list = await readData()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    if (id) {
      const found = list.find(item => String(item.id) === String(id))
      if (!found) return NextResponse.json({ error: 'Not found' }, { status: 404 })
      return NextResponse.json(found)
    }
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const body = await request.json()
    const { id, status, action } = body || {}
    const list = await readData()

    if (action === 'bulkApprove') {
      const updated = list.map(item => item.status === 'Pending' ? { ...item, status: 'Approved' } : item)
      await writeData(updated)
      return NextResponse.json({ success: true, updatedCount: updated.filter(i => i.status === 'Approved').length })
    }

    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const idx = list.findIndex(item => String(item.id) === String(id))
    if (idx === -1) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const updatedItem = { ...list[idx], ...(status ? { status } : {}) }
    list[idx] = updatedItem
    await writeData(list)
    return NextResponse.json(updatedItem)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const url = new URL(request.url)
    let id = url.searchParams.get('id')
    if (!id) {
      try {
        const body = await request.json()
        id = body?.id
      } catch (_) {}
    }
    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })
    const list = await readData()
    const updated = list.filter(item => String(item.id) !== String(id))
    await writeData(updated)
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
