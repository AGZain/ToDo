const express = require('express');
const app = express();
const todoController = require('./controllers/todoController')


app.set('view engine', 'ejs'); //setting up template engine

app.use(express.static('public'));  //location for static files


todoController(app);
app.listen(3000);
console.log('This application is running on port 3000');
