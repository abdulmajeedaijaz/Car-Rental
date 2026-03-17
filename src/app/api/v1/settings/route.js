import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const settingsPath = path.join(process.cwd(), 'src', 'data', 'settings.json')

async function readSettings() {
  const raw = await fs.readFile(settingsPath, 'utf8')
  return JSON.parse(raw)
}

async function writeSettings(data) {
  await fs.writeFile(settingsPath, JSON.stringify(data, null, 2), 'utf8')
}

export async function GET(request) {
  try {
    const list = await readSettings()
    return NextResponse.json(list)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    if (!body?.name) return NextResponse.json({ error: 'Missing name' }, { status: 400 })
    const list = await readSettings()
    if (list.find(s => s.name === body.name)) return NextResponse.json({ error: 'Setting already exists' }, { status: 400 })
    const toAdd = { name: body.name, value: body.value ?? '', type: body.type ?? 'String' }
    list.push(toAdd)
    await writeSettings(list)
    return NextResponse.json(toAdd, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const body = await request.json()
    if (!body?.name) return NextResponse.json({ error: 'Missing name' }, { status: 400 })
    const list = await readSettings()
    const idx = list.findIndex(s => s.name === body.name)
    if (idx === -1) return NextResponse.json({ error: 'Setting not found' }, { status: 404 })
    const updated = { ...list[idx], value: body.value ?? list[idx].value, type: body.type ?? list[idx].type }
    list[idx] = updated
    await writeSettings(list)
    return NextResponse.json(updated)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const url = new URL(request.url)
    let name = url.searchParams.get('name')
    if (!name) {
      try {
        const body = await request.json()
        name = body?.name
      } catch (_) {}
    }
    if (!name) return NextResponse.json({ error: 'Missing name' }, { status: 400 })
    const list = await readSettings()
    const updated = list.filter(s => s.name !== name)
    await writeSettings(updated)
    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
