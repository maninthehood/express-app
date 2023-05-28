const members = require('./members');
const path = require('path');
const express = require('express');
const moment = require('moment')
const logger = require('./middleware/logger')
const port = 3010;
const app = express();

// Create middleware


// Init middleware
app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/members', (req, res) => {
  res.json(members);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
