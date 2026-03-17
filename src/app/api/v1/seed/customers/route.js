import { NextResponse } from 'next/server'

async function getPrisma() {
  if (globalThis.__prisma) return globalThis.__prisma
  const mod = await import('../../../../../generated/prisma')
  const PrismaClient = mod.PrismaClient || mod.default?.PrismaClient || mod.PrismaClient
  globalThis.__prisma = new PrismaClient()
  return globalThis.__prisma
}

// Dummy customer data (3 customers)
const DUMMY_CUSTOMERS = [
  {
    name: 'Rajesh Kumar Singh',
    email_id: 'rajesh.kumar@example.com',
    mobile_number: '9876543210',
    alternate_mobile_number: '9876543211',
    address: '123 MG Road, Bangalore-560001, Karnataka',
    pin_code: '560001',
    adhaar_number: '1234 5678 9012',
    adhar_front_image: 'https://via.placeholder.com/500x300?text=Aadhar+Front+1',
    adhar_back_image: 'https://via.placeholder.com/500x300?text=Aadhar+Back+1',
    driving_license_number: 'KA0112345678901',
    driving_license_front_image: 'https://via.placeholder.com/500x300?text=DL+Front+1',
    driving_license_back_image: 'https://via.placeholder.com/500x300?text=DL+Back+1',
    profile_image: 'https://via.placeholder.com/200x200?text=Rajesh+Kumar',
    is_active: true,
    stateName: 'Karnataka',
    cityName: 'Bangalore'
  },
  {
    name: 'Priya Sharma Kapoor',
    email_id: 'priya.sharma@example.com',
    mobile_number: '9123456789',
    alternate_mobile_number: '9123456780',
    address: '456 Bandra Reclamation, Mumbai-400050, Maharashtra',
    pin_code: '400050',
    adhaar_number: '2345 6789 0123',
    adhar_front_image: 'https://via.placeholder.com/500x300?text=Aadhar+Front+2',
    adhar_back_image: 'https://via.placeholder.com/500x300?text=Aadhar+Back+2',
    driving_license_number: 'MH0187654321098',
    driving_license_front_image: 'https://via.placeholder.com/500x300?text=DL+Front+2',
    driving_license_back_image: 'https://via.placeholder.com/500x300?text=DL+Back+2',
    profile_image: 'https://via.placeholder.com/200x200?text=Priya+Sharma',
    is_active: true,
    stateName: 'Maharashtra',
    cityName: 'Mumbai'
  },
  {
    name: 'Amit Patel Joshi',
    email_id: 'amit.patel@example.com',
    mobile_number: '8765432109',
    alternate_mobile_number: '8765432100',
    address: '789 Sector 5, Ahmedabad-380005, Gujarat',
    pin_code: '380005',
    adhaar_number: '3456 7890 1234',
    adhar_front_image: 'https://via.placeholder.com/500x300?text=Aadhar+Front+3',
    adhar_back_image: 'https://via.placeholder.com/500x300?text=Aadhar+Back+3',
    driving_license_number: 'GJ0156789012345',
    driving_license_front_image: 'https://via.placeholder.com/500x300?text=DL+Front+3',
    driving_license_back_image: 'https://via.placeholder.com/500x300?text=DL+Back+3',
    profile_image: 'https://via.placeholder.com/200x200?text=Amit+Patel',
    is_active: true,
    stateName: 'Gujarat',
    cityName: 'Ahmedabad'
  }
]

export async function POST(request) {
  try {
    const prisma = await getPrisma()
    
    // Get all states and cities for mapping
    const states = await prisma.states.findMany({ include: { cities: true } })
    
    const seededCustomers = []
    const errors = []

    for (const customer of DUMMY_CUSTOMERS) {
      try {
        // Find state by name
        const state = states.find(s => s.name === customer.stateName)
        if (!state) {
          errors.push(`State '${customer.stateName}' not found`)
          continue
        }

        // Find city by name within the state
        const city = state.cities.find(c => c.name === customer.cityName)
        if (!city) {
          errors.push(`City '${customer.cityName}' not found in state '${customer.stateName}'`)
          continue
        }

        // Check if customer already exists
        const existingCustomer = await prisma.customer.findUnique({
          where: { email_id: customer.email_id }
        })
        if (existingCustomer) {
          errors.push(`Customer with email '${customer.email_id}' already exists`)
          continue
        }

        // Create customer
        const created = await prisma.customer.create({
          data: {
            name: customer.name,
            email_id: customer.email_id,
            mobile_number: customer.mobile_number,
            alternate_mobile_number: customer.alternate_mobile_number,
            address: customer.address,
            city_id: city.id,
            state_id: state.id,
            pin_code: customer.pin_code,
            adhaar_number: customer.adhaar_number,
            adhar_front_image: customer.adhar_front_image,
            adhar_back_image: customer.adhar_back_image,
            driving_license_number: customer.driving_license_number,
            driving_license_front_image: customer.driving_license_front_image,
            driving_license_back_image: customer.driving_license_back_image,
            profile_image: customer.profile_image,
            is_active: customer.is_active
          }
        })

        seededCustomers.push({
          id: created.id,
          name: created.name,
          email: created.email_id
        })
      } catch (err) {
        errors.push(`Error creating customer ${customer.name}: ${err.message}`)
      }
    }

    return NextResponse.json({
      success: true,
      message: `Seeded ${seededCustomers.length} customers`,
      seededCustomers,
      errors: errors.length > 0 ? errors : undefined
    }, { status: 201 })
  } catch (err) {
    console.error('Seed error:', err)
    return NextResponse.json({
      success: false,
      error: String(err)
    }, { status: 500 })
  }
}

export async function GET(request) {
  return NextResponse.json({
    message: 'POST to this endpoint with Authorization header to seed dummy customer data',
    endpoint: '/api/v1/seed/customers',
    method: 'POST',
    description: 'Seeds 3 dummy customers with all required fields'
  })
}
