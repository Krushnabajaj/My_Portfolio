import React from 'react';

const ServerPage = () => {
  return (
    <div>
      <h1>Server Page</h1>
      <p>This is the server page content.</p>
    </div>
  );
};

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(`Form data received: ${name}, ${email}, ${subject}, ${message}`);
  // Here, you can add code to store the data in a database.
  res.status(200).send('Form data received');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


export default ServerPage;