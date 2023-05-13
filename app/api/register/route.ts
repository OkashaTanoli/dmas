import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { v4 as uuidv4 } from 'uuid';


export async function POST(request: Request) {
    const body = await request.json()
    let {
        firstName, lastName, dob, email, image, qualification, phoneNumber, occupation, businessName,
        organization, attendedTrainBefore, attendedTrainWhen, attendedTrainReason, streetAddress,
        streetAddress2, city, province, zipCode, appointmentDate, appointmentTime, role, trainingName,
        trainingCourseName, preferredDate, preferredDate2, location, trainingOption
    } = body
    const id = uuidv4();
    try {
        const res = await sql`
        INSERT INTO register (id, firstName, lastName, dob, email, image, qualification, phoneNumber, occupation, businessName, organization, attendedTrainBefore, attendedTrainWhen, attendedTrainReason, streetAddress, streetAddress2, city, province, zipCode, appointmentDate, appointmentTime, role, trainingName, trainingCourseName, preferredDate, preferredDate2, location, trainingOption)
        VALUES (${id}, ${firstName}, ${lastName}, ${dob}, ${email}, ${image}, ${qualification}, ${phoneNumber}, ${occupation}, ${businessName}, ${organization}, ${attendedTrainBefore}, ${attendedTrainWhen}, ${attendedTrainReason}, ${streetAddress}, ${streetAddress2}, ${city}, ${province}, ${zipCode}, ${appointmentDate}, ${appointmentTime}, ${role}, ${trainingName}, ${trainingCourseName}, ${preferredDate}, ${preferredDate2}, ${location}, ${trainingOption});   
        `
        return NextResponse.json({ message: "done", status: true })
    }
    catch (err) {
        return NextResponse.json({ message: err, status: false })
    }
}