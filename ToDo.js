const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// get our server running

app.get('/',function(req,res) {
  res.send('HELLO POOPALINGO');
});


app.listen(port, () => {
    console.log("App up and running on" + port);
});
