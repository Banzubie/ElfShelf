import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'

dotenv.config()

var transporter = nodemailer.createTransport({
  service: 'aol',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PW
  }
});
const requestInfo = (info) => {
  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: info.email,
    subject: `Information request from ${info.firstName} ${info.lastName} at ${info.school}`,
    text: `
      First name: ${info.firstName},
      Last name: ${info.lastName},
      Email: ${info.email},
      Phone: ${info.phone},
      School: ${info.school},
      City: ${info.city},
      State: ${info.state},
      Zip: ${info.zip},
      Approximate student count: ${info.studentCount},
      Has run a previous shop before: ${info.runShop},
      Preferred contact method: ${info.contact},
      Comments: ${info.comments}
      `
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

const requestSignUp = () => {

}


export {requestInfo, requestSignUp}