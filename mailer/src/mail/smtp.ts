import { createTransport } from "nodemailer";
import { MailDto } from "src/listener/dto/mail.dto";

const newEmailTransport = (user: string, pass: string) => {
    return createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user,
            pass
        }
    });
}

const getConfigSendEmail = (mailData: MailDto) => {
    return {
        from: mailData.senderEmail,
        to: mailData.email,
        subject: mailData.subject,
        html: mailData.content
    };
}

export const sendEmail = async (mailData: MailDto) => {
    const transport = newEmailTransport(mailData.senderEmail, mailData.senderPass);
    await transport.sendMail(getConfigSendEmail(mailData));
}

