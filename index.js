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

app.get('/api/members', (req, res) => res.json(members));

app.get('/api/members:id', (req, res) =>{
  const found = members.some(member => member.id === parseInt(req.params.id))
  if (found){
    res.json(members.filter(member => member.id === parseInt(req.params.id)))
  } else {
    res.status(400).json({msg: "Member not found"})
  }

})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
