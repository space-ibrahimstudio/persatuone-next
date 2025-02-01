import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;
    const transporter = nodemailer.createTransport({ host: process.env.EMAIL_HOST, port: process.env.EMAIL_PORT, secure: true, auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS } });
    try {
      await transporter.sendMail({ from: email, to: "sales@persatu.one", subject: subject, text: `Name: ${name}\nEmail: ${email}\nPhone Number: ${phone}\nMessage: ${message}` });
      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ success: false, error: "Failed to send email." });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
