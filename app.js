// // Import dependencies
// const express = require('express');
// const bodyParser = require('body-parser');
// const { dirname } = require('path');

// // Create express app
// const app = express();

// // Set up middleware
// app.use(bodyParser.urlencoded({ extended: true }));





// app.get('/current-token', (req, res) => {
//     const currentToken = localStorage.getItem('currentToken');
//     res.send({ token: currentToken });
//   });
// // Define routes
// app.get('/', (req, res) => {
//   res.sendFile(__dirname+"/index.html");
// });
// app.get('/current',function(req,res)
// {
//      res.sendFile(__dirname+"/current.html");
// });

// // Start server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });








const express = require('express');
const app = express();
const port = 3000;

let lastToken = 't-100';

app.use(express.json());

// Generate a new token
app.post('/tokens', (req, res) => {
  const { patientName } = req.body;
  const tokenNumber = parseInt(lastToken.slice(2)) + 1;
  const nextToken = `t-${tokenNumber}`;
  lastToken = nextToken;

  // You can store the token data in a database here

  res.json({ token: nextToken, patientName });
});

// Retrieve the last token
app.get('/tokens/last', (req, res) => {
  res.json({ token: lastToken });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


