const members = require('./members');
const path = require('path');
const express = require('express');
const port = 3010;
const app = express();

// Create middlewear
const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}`);
  next();
};

// Init middlewear
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
