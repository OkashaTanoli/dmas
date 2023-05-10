import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { v4 as uuidv4 } from 'uuid';


export async function POST(request: Request) {
    const body = await request.json()
    const id = uuidv4();
    try {
        const res = await sql`INSERT INTO donation (id, name, number, email, donation)
        VALUES (${id}, ${body.name}, ${body.number}, ${body.email}, ${body.donation});`
        return NextResponse.json({ message: "done", status: true })
    }
    catch (err) {
        return NextResponse.json({ message: err, status: false })
    }
}