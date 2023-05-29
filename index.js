const path = require('path');
const express = require('express');
const logger = require('./middleware/logger');
const port = 3010;
const app = express();

// app.use(logger);

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members',require("./routes/api/members"))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
