import Email from "@/app/emails/email";
import { Resend } from "resend";
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { nom, prenom, email, telephone, message } = await request.json();

    await resend.emails.send({
      from: 'contact@choeurclement.fr',
      to: 'pro.clement59@gmail.com',
      subject: 'Contact Portfolio',
      react: Email(nom, prenom, email, telephone, message),
    });

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
  }
}
