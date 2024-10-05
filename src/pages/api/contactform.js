/* eslint-disable import/no-anonymous-default-export */
import { Resend } from "resend";
import ContactDetails from "@/components/emailtemplate/ContactDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, number, detail , services , source , other} = req.body;

    const { data, error } = await resend.emails.send({
      from: "Yellow <onboarding@resend.dev>",
      to: ["harshgoyalrss7@gmail.com"],
      subject: "New Lead: New Contact Form Submission",
      react: ContactDetails({
        userName: name,
        userEmail: email,
        userNumber: number,
        userDetail: detail,
        userService: services,
        userSource: source,
        userOthers:other
      }),
    });

    if (error) {
      console.error("Error sending email:", error);
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    console.error("API route error:", error);
    res.status(400).json({ error: error.message });
  }
};
