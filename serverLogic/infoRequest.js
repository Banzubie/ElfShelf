import nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
import pdfFiller from 'pdffiller'
import PizZip from "pizzip"
import Docxtemplater from "docxtemplater"
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url'


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
      First name: ${info.firstName}
      Last name: ${info.lastName}
      Email: ${info.email}
      Phone: ${info.phone}
      Preferred contact method: ${info.contact}
      Has run a previous shop before: ${info.runShop}
      School: ${info.school}
      City: ${info.city}
      State: ${info.state}
      Zip: ${info.zip}
      Approximate student count: ${info.studentCount}
      Comments: ${info.comments}
      `
  };

  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return error;
    } else {
      console.log('Email sent: ' + info.response);
      return info;
    }
  });
}

const requestSignUp = async (info) => {
  const __dirname = path.dirname('serverLogic/SignUpTemp.docx')

  const content = fs.readFileSync(
    path.resolve(__dirname, "SignUpTemp.docx"),
    "binary"
  );

  const zip = new PizZip(content);

  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
  });

  doc.render({
    school: info.school,
    group: info.group,
    chairperson: info.chairperson,
    phone: info.phone,
    email: info.email,
    secondPhone: info.secondPhone,
    schoolphone: info.schoolphone,
    fax: info.fax,
    billing: info.billing,
    billcity: info.billcity,
    billstate: info.billstate,
    billzip: info.billzip,
    shipping: info.shipping,
    shipcity: info.shipcity,
    shipstate: info.shipstate,
    shipzip: info.shipzip,
    presidentName: info.presidentName,
    presidentphone: info.presidentphone,
    treasurerName: info.treasurerName,
    treasurerPhone: info.treasurerPhone,
    yesShop: info.runShop === 'yes' ? 'X' : ' ',
    noShop: info.runShop === 'no' ? 'X' : ' ',
    yesSchoolName: info.runShop === 'yes' ? info.yesSchoolName : ' ',
    yesSchoolSales: info.runShop === 'yes' ? info.yesSchoolSales : ' ',
    yesSchoolStartDate: info.runShop === 'yes' ? info.yesSchoolStartDate : ' ',
    yesSchoolEndDate: info.runShop === 'yes' ? info.yesSchoolEndDate : ' ',
    yesSchoolStudentCount: info.runShop === 'yes' ? info.yesSchoolStudentCount : ' ',
    register: info.register,
    earn: info.earn,
    merchandise: info.merchandise
  });

  const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
  });

  var mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `Sign up request from ${info.chairperson} at ${info.school}`,
    text: `
      School name: ${info.school}
      Group name: ${info.group}
      Chairperson: ${info.chairperson}
      Phone: ${info.phone}
      Email: ${info.email}
      Secondary phone: ${info.secondPhone}
      School phone: ${info.schoolphone}
      Fax: ${info.fax}

      Billing address:
      ${info.billing}
      ${info.billcity}, ${info.billstate} ${info.billzip}

      Shipping Address:
      ${info.shipping}
      ${info.shipcity}, ${info.shipstate} ${info.shipzip}

      President name: ${info.presidentName}
      President phone: ${info.presidentphone}

      Treasurer name: ${info.treasurerName}
      Treasurer phone: ${info.treasurerPhone}

      Have they run a shop before?: ${info.runShop}
      Previous shop run with: ${info.yesSchoolName}
      Previous shop sales: ${info.yesSchoolSales}
      Previous shop start date: ${info.yesSchoolStartDate}
      Previous shop end date: ${info.yesSchoolEndDate}
      Previous shop student count: ${info.yesSchoolStudentCount}

      Wants a register: ${info.register}
      Percentage to earn: ${info.earn}
      Send this amount of merchandise: ${info.merchandise}
      `,
    attachments: [{
      filename: `${info.school}SignUp.doc`,
      content: new Buffer(buf, 'utf-8')
    }]
  };
  return transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return error;
    } else {
      console.log('Email sent: ' + info.response);
      return info;
    }
  });
}


export { requestInfo, requestSignUp }