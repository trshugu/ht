/*
*/
$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
  
  var values = {
    val: 'Hello Handlebars!',
    tweets: [
      {
        user: 'Yuji',
        tweet: 'I\'m hungry...'
      },
      {
        user: 'Koji',
        tweet: 'I\'m sleepy...'
      },
      {
        user: 'Ryuji',
        tweet: 'I\'m xxxxxx...'
      }
    ]
  };
  
  var tweets2 = [
    {
      user: 'Yuji',
      tweet: 'I\'m hungry...'
    },
    {
      user: 'Koji',
      tweet: 'I\'m sleepy...'
    },
    {
      user: 'Ryuji',
      tweet: 'I\'m xxxxxx...'
    }
  ];

  
  template = Handlebars.compile($('#input').html());
  template2 = Handlebars.compile($('#input2').html());
  $('#output').html(template(values));
  $('#output2').html(template2(tweets2));

});





/*
// jsonAPI + ajax ƒeƒXƒg
$(document).ready(function() {
  $("#ank").click(function(){
    $.get("http://localhost:4567", function(data){
      parsed = JSON.parse(data);
      $("#aja").text( $("#aja").text() + parsed.result )
    });
  });
  
});
*/

