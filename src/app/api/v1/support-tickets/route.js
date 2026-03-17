import { NextResponse } from 'next/server'

// In-memory store for support tickets (replace with DB in production)
let tickets = [
  {
    id: 'TK001',
    title: 'Vehicle not available',
    customer: 'Rajesh Kumar',
    status: 'open',
    priority: 'high',
    createdAt: new Date('2025-01-15').toISOString(),
    description: 'Booked vehicle was not available at the pickup location',
    replies: 2,
  },
  {
    id: 'TK002',
    title: 'Payment issue',
    customer: 'Priya Sharma',
    status: 'in-progress',
    priority: 'medium',
    createdAt: new Date('2025-01-14').toISOString(),
    description: 'Payment was deducted but booking not confirmed',
    replies: 1,
  },
  {
    id: 'TK003',
    title: 'Damage claim',
    customer: 'Amit Patel',
    status: 'closed',
    priority: 'high',
    createdAt: new Date('2025-01-10').toISOString(),
    description: 'Vehicle returned with scratch on left side',
    replies: 5,
  },
]

export async function GET(request) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')
    
    if (id) {
      const ticket = tickets.find(t => t.id === id)
      if (!ticket) return NextResponse.json({ error: 'Ticket not found' }, { status: 404 })
      return NextResponse.json(ticket)
    }
    
    return NextResponse.json(tickets)
  } catch (err) {
    console.error('GET error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { title, customer, description, priority, status } = body

    if (!title) return NextResponse.json({ error: 'Missing title' }, { status: 400 })
    if (!customer) return NextResponse.json({ error: 'Missing customer' }, { status: 400 })

    const newTicket = {
      id: `TK${String(tickets.length + 1).padStart(3, '0')}`,
      title,
      customer,
      description: description || '',
      priority: priority || 'medium',
      status: status || 'open',
      createdAt: new Date().toISOString(),
      replies: 0,
    }

    tickets.push(newTicket)
    return NextResponse.json(newTicket, { status: 201 })
  } catch (err) {
    console.error('POST error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function PUT(request) {
  try {
    const body = await request.json()
    const { id, ...updateData } = body

    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const ticketIndex = tickets.findIndex(t => t.id === id)
    if (ticketIndex === -1) return NextResponse.json({ error: 'Ticket not found' }, { status: 404 })

    tickets[ticketIndex] = { ...tickets[ticketIndex], ...updateData }
    return NextResponse.json(tickets[ticketIndex])
  } catch (err) {
    console.error('PUT error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}

export async function DELETE(request) {
  try {
    const url = new URL(request.url)
    const id = url.searchParams.get('id')

    if (!id) return NextResponse.json({ error: 'Missing id' }, { status: 400 })

    const ticketIndex = tickets.findIndex(t => t.id === id)
    if (ticketIndex === -1) return NextResponse.json({ error: 'Ticket not found' }, { status: 404 })

    tickets.splice(ticketIndex, 1)
    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('DELETE error:', err)
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
