import { Resend } from "resend";
const resend = new Resend("re_GXmhPLmj_3nnuWzBN5ucFUjkE2URgyLK1");

export default async function sendEmail (message, email,name) {
  return await resend.emails.send({
    from: "sender <email-sender@resend.dev>",
    to: ["angelperez07092000@gmail.com"],
    subject: `${name} quiere contactar contigo`,
    html: `<p>${email} te ha enviado un correo.</p><br><p>${message}</p>`,
  });
};
