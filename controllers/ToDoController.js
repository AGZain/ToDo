module.exports = function(app){

  app.get('/todo',function(req,resp){
    resp.render('todo');

  });

  app.post('/todo',function(req,resp){


  });

  app.delete('/todo',function(req,resp){


  });


};
