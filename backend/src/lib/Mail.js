import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';
import mailConfig from '../config/mail';
// config jwt
import authConfig from '../config/auth';

class Mail {
    constructor() {
        const { host, port, secure, auth } = mailConfig;

        this.transporter = nodemailer.createTransport({
            host,
            port,
            secure,
            auth: auth.user ? auth : null
        });
    }

    sendMail(message) {
        // enviar o e-mail passando as configurações e o parametro
        return this.transporter.sendMail({
            ...mailConfig.default,
            ...message
        });
    }

    sendEmailConfirmAccount(email, name, id) {
        jwt.sign(
            { user: id },
            authConfig.secret,
            {
                expiresIn: authConfig.expiresIn
            },
            (err, emailToken) => {
                const url = `http://localhost:3030/confirmation/${emailToken}`;

                // enviar email confirmando
                this.sendMail({
                    to: `${name} <${email}>`,
                    subject: 'Confirmação de cadastro - Panflix',
                    html: `Por favor clique nesse link para confirmar seu cadastro no Panflix: <a href="${url}">${url}</a>`
                });
            }
        );
    }
}

export default new Mail();
