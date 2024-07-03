const nodemailer = require('nodemailer');
require('dotenv').config();

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
});

const sendMail = async (to, subject, text) => {
  try {
    let info = await transporter.sendMail({
      from: email,
      to,
      subject,
      text,
    });

    console.log(`Email sent to ${to}: ${info.messageId}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = { sendMail };
