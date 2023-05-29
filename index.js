const members = require('./members');
const path = require('path');
const express = require('express');
const logger = require('./middleware/logger');
const port = 3010;
const app = express();

// Create middleware

// Init middleware
// app.use(logger);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
