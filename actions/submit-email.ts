"use server";
import z from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const contactFormSchema = z.object({
  email: z.email().nonempty(),
  name: z.string().nonempty().max(100),
  subject: z.string().nonempty().max(100),
  body: z.string().nonempty(),
  recaptchaToken: z.string().nonempty(),
});

async function verifyRecaptcha(token: string): Promise<boolean> {
  const secret = process.env.RECAPTCHA_SECRET_KEY as string;

  const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret,
      response: token,
    }),
  });

  const data = await res.json();
  return data.success && data.score >= 0.5;
}

export async function submitEmail(form: z.infer<typeof contactFormSchema>) {
  const isHuman = await verifyRecaptcha(form.recaptchaToken);
  if (!isHuman)
    return { error: "reCAPTCHA verification failed. Please try again." };

  const { data, error } = await resend.emails.send({
    from: "Inquiry from Website <website-inquiry@santienzphilsinc.com>",
    to: "adwebsantienz@gmail.com",
    subject: form.subject,
    replyTo: form.email,
    text: form.body,
    html: `<html>
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <div
      style="display: flex; align-items: center; background-color: #182e85; padding: 16px;"
    >
      <img
        src="https://santienz-astro.vercel.app/santienz.png"
        style="height: 32px;"
      />
      <h2 style="color: white; margin-left:16px; ">
        Santienz Phils. Inc.
      </h2>
    </div>
    <div style="padding: 0 16px;">
      <h3 style="color:#182e85; font-size: 24px; margin: 24px 0;">
        Hi, there is a new inquiry from website.
      </h3>
      <div
        style="background-color: #182e8520; border-radius: 16px; padding: 16px;"
      >
        <h4>From: ${form.name} ${form.email}</h4>
        <h4>Subject: ${form.subject}</h4>
        <br />
        <p style="white-space: pre-wrap;">${form.body}</p>
      </div>

      <br />
      <br />
      <p>Reply to: ${form.email}</p>
    </div>
  </body>
</html>`, // your HTML stays the same
  });

  if (error) {
    return { error: error.message };
  }
  return { data };
}
