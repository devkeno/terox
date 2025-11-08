// import type { NextApiRequest, NextApiResponse } from "next";
// import nodemailer from "nodemailer";

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const { name, email, company, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       host: process.env.SMTP_HOST,
//       port: Number(process.env.SMTP_PORT),
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     await transporter.sendMail({
//       from: `"${name}" <${email}>`,
//       to: process.env.CONTACT_EMAIL,
//       subject: `New Contact Form Submission from ${name}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Company:</strong> ${company}</p>
//         <p><strong>Message:</strong><br/>${message}</p>
//       `,
//     });

//     return res.status(200).json({ message: "Email sent successfully!" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Error sending email." });
//   }
// }
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { name, email, company, message, date, time } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required." });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Check if it’s a meeting request or normal contact form
    const isMeetingRequest = Boolean(date && time);

    const subject = isMeetingRequest
      ? `📅 New Meeting Request from ${name}`
      : `📩 New Contact Form Submission from ${name}`;

    const htmlContent = isMeetingRequest
      ? `
        <h3>📅 New Meeting Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>
        <p><strong>Message:</strong><br/>${message || "No message provided."}</p>
      `
      : `
        <h3>📩 New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message || "No message provided."}</p>
      `;

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_EMAIL,
      subject,
      html: htmlContent,
    });

    return res.status(200).json({
      message: isMeetingRequest
        ? "Meeting request sent successfully!"
        : "Contact message sent successfully!",
    });
  } catch (error) {
    console.error("❌ Email sending error:", error);
    return res.status(500).json({ message: "Error sending email." });
  }
}
