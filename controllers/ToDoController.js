var test_data = [{item:'buy item'},{item:'do homework'},{item:'go to work'}];
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app){

  app.get('/todo',function(req,resp){
    resp.render('todo',{todos: test_data});

  });

  app.post('/todo',urlencodedParser,function(req,resp){
      test_data.push(req.body);
      resp.json(test_data);
  });

  app.delete('/todo',function(req,resp){


  });


};
