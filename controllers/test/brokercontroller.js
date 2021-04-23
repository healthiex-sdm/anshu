// let nodemailer = require("nodemailer");
// let group = require('../../schema/addgroup/group')
// let registeredUsers = require('../../schema/broker_registration/brokerregistration')


// /* ++++++++++++++++++++++++++++ 
//     Created by:RAJAT JOSHI
//     Created at: 15/04/2021
//     +++++++++++++++++++++++++++++ */
// // Function to send the 2 factor authentication code using email.
// // let emailAuthCode = function (req, res) {
// //   let email = req.body.email
// //   registeredUsers.find({ email: email }, function (err, result) {
// //     if (err) {
// //       res.json({ status: 404, message: err })
// //     }
// //     else if (result && result.length > 0) {
// //       let message = result[0].authCode
// //       let reciversEmail = result[0].email
// //       let transporter = nodemailer.createTransport({
// //         host: "smtp.gmail.com",
// //         port: 587,
// //         secure: false, // true for 465, false for other ports
// //         auth: {
// //           user: 'mycatbhuru1@gmail.com',
// //           pass: '9837855997',
// //         },
// //       });


// //       // send mail with defined transport object
// //       let mailOptions = {
// //         from: 'Healthiex@gmail.com',
// //         to: reciversEmail,
// //         subject: 'Authentication code',
// //         text: "This is your auth code for login " + message
// //       };


// //       transporter.sendMail(mailOptions, function (error, info) {
// //         if (error) {
// //           res.json({ status: 404, message: error })
// //         } else {
// //           res.json({ status: 200, message: "Email sent", data: info })

// //         }
// //       });
// //     }
// //     else {

// //     }
// //   })
// // }






// /* ++++++++++++++++++++++++++++ 
//     Created by:RAJAT JOSHI
//     Created at: 15/04/2021
//     +++++++++++++++++++++++++++++ */
// // Function to login using code.
// let login = function (req, res) {
//   let code = req.body.authCode
//   registeredUsers.find({ authCode: code }, function (err, result) {
//     if (err) {
//       res.json({ status: 404, message: err })
//     }
//     else if (result && result.length > 0) {
//       res.json({ status: 200, message: "Login successfully", data: result })
//     }
//     else {
//       res.json({ status: 400, message: 'Please enter valid code' })

//     }


//   })
// }






// /* ++++++++++++++++++++++++++++ 
//     Created by:RAJAT JOSHI
//     Created at: 15/04/2021
//     +++++++++++++++++++++++++++++ */
// // Function to save group data.
// let addgroup = function (req, res) {
//   let data = req.body
//   let details = new group({

//     groupName: data.groupName,
//     groupEmail: data.groupEmail,
//     Addressline1: data.Addressline1,
//     Addressline2: data.Addressline2,
//     Country: data.Country,
//     state: data.state,
//     city: data.city,
//     zipcode: data.zipcode,
//     GroupPhone: data.Phone,
//     fullname: data.fullname,
//     email: data.email,
//     password: data.password,
//     phone: data.phone,
//     TotalNoOfEmployees: data.TotalNoOfEmployees,
//     Avgageemployee: data.Avgageemployee,
//     accname: data.accname,
//     accnumber: data.accnumber,
//     debitcardnumber: data.debitcardnumber

//   })
//   details.save(function (err, result) {
//     console.log("------", result)
//     if (err) {
//       res.json({ status: 400, data: err, message: 'error' })
//     }
//     else {
//       res.json({ status: 200, data: result, message: 'Data saved successfully' })
//     }
//   })
// }

// exports.emailAuthCode = emailAuthCode;
// exports.login = login;
// exports.addgroup = addgroup;
