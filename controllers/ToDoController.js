var test_data = [{item:'buy item'},{item:'do homework'},{item:'go to work'}];

module.exports = function(app){

  app.get('/todo',function(req,resp){
    resp.render('todo',{todos: data});

  });

  app.post('/todo',function(req,resp){


  });

  app.delete('/todo',function(req,resp){


  });


};
