import express from 'express';
import bodyParser from 'body-parser';
import sendEmail from './senderEmail.js';
import cors from 'cors';
const app = express();
const corsOptions = {
  origin: 'https://angelperez0709.github.io',
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.post('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin",'https://angelperez0709.github.io');
  res.setHeader("Access-Control-Allow-Methods",'POST');
  const { message, email,name } = req.body;
  sendEmail(message,email,name).then(() => {
    res.status(200).send('Email sent');
  }).catch((error) => {
    console.error(error);
    res.status(500).send(JSON.stringify('Error sending email'));
  });
});

app.get("/",(req,res)=>{
res.send("API is currently working");
})

app.listen(443, () => {
  console.log('Server is listening on port 443');
});