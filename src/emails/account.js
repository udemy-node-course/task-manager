const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'simon.luciano@gigli.net',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'simon.luciano@gigli.net',
        subject: 'Successfully unsubscribed!',
        text: `Thanks for your support ${name}, we are sorry to see you go!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}
