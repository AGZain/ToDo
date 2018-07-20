var test_data = [{item:'buy item'},{item:'do homework'},{item:'go to work'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
var mongoose = require('mongoose')

//Connected to to db

mongoose.connect('mongodb://test:testpassword1@ds243501.mlab.com:43501/todo');    //conecting to mlab

//Creating schema

var todoSch  = new mongoose.Schema({
  item: String
});

//Creating model

var Todo = mongoose.model('Todo',todoSch);


//test run of adding data to db
// var itemOne = Todo({item: 'buy car'}).save(function(err){
//   if (err) throw err;
//   console.log('item saved');
// });


module.exports = function(app){

  app.get('/todo',function(req,resp){
    //resp.render('todo',{todos: test_data});

    Todo.find({}, function(err,data){
      if(err) throw err;
      resp.render('todo',{todos: data});
    });

  });

  app.post('/todo',urlencodedParser,function(req,resp){
      // test_data.push(req.body);
      // resp.json(test_data);
    var todo_new = Todo(req.body).save(function(err,data){
      if (err) throw err;
      resp.json(data);
    });
  });

  app.delete('/todo/:item',function(req,resp){

    Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
      if (err) throw err;
      resp.json(data);

    });
    // test_data = test_data.filter(function(todo){k
    //   return todo.item.replace(/ /g, '-') !== req.params.item;
    // });
    // resp.json(test_data);
  });


};
