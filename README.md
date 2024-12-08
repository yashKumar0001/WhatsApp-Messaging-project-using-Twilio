This project demonstrates how to send and receive WhatsApp messages using Twilio's API, Node.js, and MongoDB. 

Setup Instructions:

Install Dependencies: npm install express body-parser twilio dotenv

Create a .env file with your Twilio credentials: 
TWILIO_ACCOUNT_SID=your_account_sid 
TWILIO_AUTH_TOKEN=your_auth_token 
TWILIO_PHONE_NUMBER=your_twilio_whatsapp_number 
PORT=3002

Run sendwhatsapp.js to send messages: 
node sendwhatsapp.js

Start receivewhatsapp.js to receive and log messages: 
node receivewhatsapp.js
