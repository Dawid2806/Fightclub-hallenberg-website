import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'
type EmailProps = {
  firstName: string,
  email: string,
  message: string
  phone:string
}
export async function POST(req: NextRequest) {
  const data:EmailProps =  await req.json()
  const { firstName, email, message,phone } = data
console.log(data)

  const transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_PASS,
    },
    tls: {
      ciphers: 'SSLv3',
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_USER,
  to: process.env.NEXT_PUBLIC_USER,
  subject: `neue Nachricht von ${email}`,
  text: `von:  ${email}
      Neue Nachricht von ${firstName}
      telefon: ${phone}
      \n\n${message}
  `,
    });

    return NextResponse.json({ message: 'Email pomyślnie wysłany' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Błąd podczas wysyłania emaila' });
  }
}