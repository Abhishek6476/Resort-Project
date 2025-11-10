import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();


export const jobMail = async (to, subject, htmlcontact) => {
    try {
        const transporter = nodemailer.createTransport({
        service: "gmail",
       secure: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        });
        
        //mail send  for the user
        const mailOptions = {
            from: `"Resort Support" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html: htmlcontact,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email  sent  sucessfully to ",to);

        }catch(error){
            console.log("Error sending email",error);
        }
    };
    