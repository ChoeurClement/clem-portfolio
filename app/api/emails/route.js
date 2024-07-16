import Email from "@/app/emails/email";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const {nom, prenom, email, telephone, message} = await request.json()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'pro.clement59@gmail.com',
    subject: 'Contact depuis Portfolio',
    react: Email(nom, prenom, email, telephone, message),
  });
}