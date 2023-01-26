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
const requestInfo = async (info) => {
  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: info.email,
    subject: `Information request from ${info.firstName} ${info.lastName} at ${info.school}`,
    text: `
      First name: ${info.firstName},
      Last name: ${info.lastName},
      Email: ${info.email},
      Phone: ${info.phone},
      Preferred contact method: ${info.contact},
      Has run a previous shop before: ${info.runShop},
      School: ${info.school},
      City: ${info.city},
      State: ${info.state},
      Zip: ${info.zip},
      Approximate student count: ${info.studentCount},
      Comments: ${info.comments}
      `
  };

  return transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      return error;
    } else {
      console.log('Email sent: ' + info.response);
      return info;
    }
  });
}

const requestSignUp = () => {

}


export {requestInfo, requestSignUp}