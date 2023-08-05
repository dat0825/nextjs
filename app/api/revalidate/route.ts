import {NextRequest, NextResponse} from 'next/server'
import {revalidatePath} from 'next/cache'
import {cookies} from "next/headers";

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get('path') || ''
    revalidatePath(path)
    return NextResponse.json({revalidated: true, now: Date.now()})
}

export async function POST(request: NextRequest) {
    cookies().set('name', 'datvt', {secure: true})
    return NextResponse.json({success: true})
}