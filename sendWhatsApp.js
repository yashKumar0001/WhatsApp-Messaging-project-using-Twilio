require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// Twilio credentials

// const client = twilio(accountSid, authToken);

// Twilio client initialization
const client = new twilio(accountSid, authToken);

client.messages
  .create({
    from: 'whatsapp:+14155248886',
    body: 'Hello from Node.js via Yash!',
    // from: 'whatsapp:' + process.env.TWILIO_PHONE_NUMBER,
    to: 'whatsapp:+917014598921'
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));
