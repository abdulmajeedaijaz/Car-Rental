import { NextResponse } from 'next/server';
export async function GET(request) {
return NextResponse.json({ message: 'Test route is working!' }, { status: 201});
}


export async function POST (request) {
const body = await request.json();
//// You can process the body data here as needed
return NextResponse.json(
{message: 'Deposit successful!' },
{status: 201}
);
}

export async function PUT (request) {
    return NextResponse.json(
{message: ' successful!' },
{status: 201}
);
}

export async function DELETE (request) {
    return NextResponse.json(
{message: ' DELETED!' },
{status: 201}
);
}
