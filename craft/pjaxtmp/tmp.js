/*
*/
$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
  
$('#pja').on('click',function(){
    var _url = $(this).attr('href');
    getContents(_url);
    alert("asdfadsfdsf");
    window.history.pushState(null,null,"pja.html");
    alert("asdf");
    return false;
});
  
});

function getContents(_url){
  $.get("http://localhost:4567", function(data){
    alert("aaaa");
    parsed = JSON.parse(data);
    alert(parsed);
    $("#aja").text( $("#aja").text() + parsed.result )
  });
  alert("geeeeeee");
}



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

