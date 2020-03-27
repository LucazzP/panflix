// config smtp to Mailtrap
export default {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'panflix.no.reply@gmail.com',
        pass: 'PanfliX111'
    },
    default: {
        from: 'Contato Panflix <noreply@panflix.com>'
    }
};
