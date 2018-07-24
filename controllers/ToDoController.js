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

module.exports = function(app){

  // app.get('/todo',function(req,resp){
  //   Todo.find({}, function(err,data){
  //     if(err) throw err;
  //     resp.render('todo',{todos: data});
  //   });
  // });
  app.get('/todo',(req,res) =>{
    Todo.find({}, (err,data) => {
      if(err) throw err;
      res.render('todo',{todos: data});
      
    });
  });

  app.post('/todo', (req, res) => {
    // res.json('hi');
   // res.redirect(307,'/new');
   console.log('TTEESSSSSSSTTTIIINGGGGGGGGGGG');
   return res.redirect(303,'new');
  });

  app.get('/new', (req, res) => {
    res.json('hi');
  });
  // app.post('/todo',urlencodedParser,function(req,resp){
  //     resp.redirect('new');
  // });

  // app.get('/new',function(req,resp){
  //   resp.render('new')
  // });
  
  app.delete('/todo/:item',function(req,resp){
    console.log('TTEESSSSSSSTTTIIINGGGGGGGGGGG');
    Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
      if (err) throw err;
      resp.json(data);

    });
  });

 
};


// var todo_new = Todo(req.body).save(function(err,data){
    //   if (err) throw err;
    //   resp.json(data);
    // });