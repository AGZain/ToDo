$(document).ready(function(){
  $('form').on('submit',function(){
      var item = $('form input');
      var todo = {item:item.val()};
      console.log(todo)
      $.ajax({
          type: 'POST',
          url: '/todo',
          data: todo,
          success: function(data){
              location.reload();
          }
      });
    return false;
  });

    $('li').click(function(){
    console.log('hello');
    var item = $(this).text().replace(/ /g,"-");
    $.ajax({
          type: 'DELETE',
          url: '/todo/' + item,
          success: function(data){
            //do something with the data via front-end framework
            location.reload();
          }
        });
    });

});
