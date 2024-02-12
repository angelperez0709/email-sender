import express from 'express';
import bodyParser from 'body-parser';
import sendEmail from './senderEmail.js';
import cors from 'cors';
const app = express();
app.use(cors({
  origin: "*",
  methods:["POST","GET"]
}
));
app.use(bodyParser.json());
app.post('/', (req, res) => {
  const { message, email,name } = req.body;
  sendEmail(message,email,name).then(() => {
    res.status(200).send('Email sent');
  }).catch((error) => {
    console.error(error);
    res.status(500).send(JSON.stringify('Error sending email'));
  });
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});