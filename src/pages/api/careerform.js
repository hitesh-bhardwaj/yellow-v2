import { Resend } from "resend";
import ContactDetails from "@/components/emailtemplate/CareerDetails";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  try {
    const { name, email, number, social , QuestionA , QuestionB , QuestionC , role , currentRole,medium,firstTextArea, secondTextArea, thirdTextArea, fourthTextArea,careerCV , content} = req.body;
   

    

    const { data, error } = await resend.emails.send({
      from: "Yellow <onboarding@resend.dev>",
      to: ["harshgoyalrss7@gmail.com"],
      subject: "New Lead: New Career Form Submission",
      react: ContactDetails({
        userName: name,
        userEmail: email,
        userNumber: number,
        userSocial: social,
        userQuestionA:QuestionA,
        userQuestionB:QuestionB,
        userQuestionC:QuestionC,
        userRole:role,
        userCurrentRole:currentRole,
        userMedium: medium,
        userFirstTextArea: firstTextArea,
        userSecondTextArea: secondTextArea,
        userThirdTextArea: thirdTextArea,
        userFourthTextArea: fourthTextArea,
      }),
      attachments: [
        {
          content,
          careerCV,
        },
      ],
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
