const nodemailer = require('nodemailer');
const EmailTemplates = require('email-templates');
const path = require('path');

const { SYSTEM_EMAIL_PASSWORD, SYSTEM_EMAIL } = require('../constants/constant');
const templateInfo = require('../email-templates');

const templateParser = new EmailTemplates({
  views: {
    root: path.join(process.cwd(), 'email-templates')
  }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SYSTEM_EMAIL,
    pass: SYSTEM_EMAIL_PASSWORD
  }
});

const sendMail = async (userMail, action, context = {}) => {
  const templateToSend = templateInfo[action];

  if (!templateToSend) {
    throw new Error('Wrong template');
  }

  const html = await templateParser.render(templateToSend.templateName, context);

  return transporter.sendMail({
    from: 'No Reply',
    to: userMail,
    subject: templateToSend.subject,
    html
  });
};

module.exports = {
  sendMail
};
