let nodemailer = require('nodemailer');
const SendmailTransport = require('nodemailer/lib/sendmail-transport');
var transporter = nodemailer.createTransport({
   // mailUsername: 'smart2020data@gmail.com',
   // service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'sdei.sddns@gmail.com',
        pass: 'ivqozmonmqshhbhs'
    },
    tls: {
        rejectUnauthorized: false
    }
});
// let transporter = nodemailer.createTransport({
//     host: settings.SMTP_HOST,
//     port: settings.SMTP_PORT,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: settings.SMTP_USERNAME, // generated ethereal user
//       pass: settings.SMTP_PASSWORD // generated ethereal password
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });

// "SMTP_PASSWORD": "rC3FD2k55g",
//     "SMTP_EMAIL": "support@daikicoin.org",
//     "SMTP_USERNAME": "support@daikicoin.org",
//     "SMTP_HOST": "mail.daikicoin.org",
//     "SMTP_PORT": 587


const otpSend = async (email, otp) => {
    try {

        const mailOptions = {
            from: 'smartdata', // sender address
            to: email, // list of receivers
            subject: 'OTP', // Subject line
            html: '<p>Your otp is ' + otp + '</p>'// plain text body
        };

        return await transporter.sendMail(mailOptions, function (err, info) {
            if (err)
                console.log(err)
            else
                console.log(info);
        }); 
    } catch (error) {
        console.log("email error ::: ", error);

    }

}

module.exports = {
    otpSend,
};