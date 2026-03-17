import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const pendingVehiclesPath = path.join(process.cwd(), 'src', 'data', 'pendingVehicles.json')

async function readVehicles() {
  const raw = await fs.readFile(pendingVehiclesPath, 'utf-8')
  return JSON.parse(raw)
}

export async function GET(request) {
  try {
    const allVehicles = await readVehicles()
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    
    // Filter for approved vehicles only
    const approved = allVehicles.filter(v => v.status === 'Approved')
    
    if (id) {
      const found = approved.find(v => String(v.id) === String(id))
      if (!found) return NextResponse.json({ error: 'Vehicle not found' }, { status: 404 })
      return NextResponse.json(found)
    }
    
    return NextResponse.json(approved)
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
