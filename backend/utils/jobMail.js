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
    



// import nodemailer from "nodemailer";
// import dotenv from "dotenv";
// dotenv.config();

// export const jobMail = async (to, applicantName, jobTitle) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // Subject and HTML content for job application confirmation
//     const subject = `Application Received for ${jobTitle} - Resort Careers`;

//     const htmlcontact = `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//         <h2 style="color: #2c3e50;">Dear ${applicantName},</h2>
//         <p>Thank you for applying for the <strong>${jobTitle}</strong> position at <strong>Resort</strong>.</p>
//         <p>We have successfully received your application. Our team will review your profile and contact you if your qualifications match our requirements.</p>
//         <p>We appreciate your interest in joining our team!</p>
//         <br/>
//         <p>Best regards,</p>
//         <p><strong>Resort Careers Team</strong></p>
//       </div>
//     `;

//     const mailOptions = {
//       from: `"Resort Careers" <${process.env.EMAIL_USER}>`,
//       to,
//       subject,
//       html: htmlcontact,
//     };

//     await transporter.sendMail(mailOptions);
//     console.log("Career application email sent successfully to", to);
//   } catch (error) {
//     console.log("Error sending job application email", error);
//   }
// };
