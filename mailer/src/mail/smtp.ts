import { createTransport } from "nodemailer";
import { MailDto } from "src/listener/dto/mail.dto";

const newGmailTransport = (user: string, pass: string) => {
    return createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user,
            pass
        }
    });
}

const getConfigSendGmail = (mailData: MailDto) => {
    return {
        from: mailData.senderEmail,
        to: mailData.email,
        subject: mailData.subject,
        html: mailData.content
    };
}

export const sendGmail = (mailData: MailDto) => {
    console.log('MANDANDO EMAIL');
    console.log(mailData);
    newGmailTransport(mailData.senderEmail, mailData.senderPass).sendMail(getConfigSendGmail(mailData));
}

