var test_data = [{item:'buy item'},{item:'do homework'},{item:'go to work'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose')

//Connected to to db

mongoose.connect('mongodb://test:testpassword1@ds243501.mlab.com:43501/todo');

//Creating schema

var todoSch  = new mongoose.Schema({
  item: String
});

//Creating model

var Todo = mongoose.model('Todo',todoSch);
var itemOne = Todo({item: 'buy car'}).save(function(err){
  if (err) throw err;
  console.log('item saved');
});


module.exports = function(app){

  app.get('/todo',function(req,resp){
    resp.render('todo',{todos: test_data});

  });

  app.post('/todo',urlencodedParser,function(req,resp){
      test_data.push(req.body);
      resp.json(test_data);
  });

  app.delete('/todo/:item',function(req,resp){
    test_data = test_data.filter(function(todo){
      return todo.item.replace(/ /g, '-') !== req.params.item;
    });
    resp.json(test_data);
  });


};
