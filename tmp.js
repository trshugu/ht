/*
*/




$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
});





/*
// �g�b�v��
$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
  
  $("#ancho").click(function(){
    $("html,body").animate({
      scrollTop: 0
    }, 800);
    return false;
  });

});
*/



/*
// jsonAPI + ajax �e�X�g
$(document).ready(function() {
  $("#ank").click(function(){
    $.get("http://localhost:4567", function(data){
      parsed = JSON.parse(data);
      $("#aja").text( $("#aja").text() + parsed.result )
    });
  });
  
});
*/

