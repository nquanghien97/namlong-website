import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const GOOGLE_SHEET_API = process.env.GOOGLE_SHEET_API
    if (!GOOGLE_SHEET_API) {
      return NextResponse.json(
        { success: false, message: 'Google Sheet API URL is not configured' },
        { status: 500 }
      )
    }

    const body = await req.json()
    const { name, phone, address, courses, note, date } = body

    // validate basic
    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }
    // gửi qua Apps Script API
    await fetch(GOOGLE_SHEET_API, {
      method: 'POST',
      headers: {
        "Content-Type": "text/plain"
      },
      body: JSON.stringify({
        name,
        phone,
        address,
        courses,
        note,
        date,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}