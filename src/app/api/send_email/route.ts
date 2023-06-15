import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer'
type EmailProps = {
  firstname: string,
  email: string,
  message: string
}
export async function POST(req: NextRequest) {
  const data:EmailProps =  await req.json()
  const { firstname, email, message } = data



  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 26,
    secure: false,
    auth: {
      user: "tojadave28@gmail.com",
      pass: "brtnjawuietjofum",
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "david-kaczmarek@gmx.de",
      subject: `Nowa wiadomość od ${firstname}`,
      text: message,
    });

    return NextResponse.json({ message: 'Email pomyślnie wysłany' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Błąd podczas wysyłania emaila' });
  }
}