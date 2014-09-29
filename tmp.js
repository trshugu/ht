/*
*/




$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
  
  PC();
});






/*
function EV(){
  console.log("EVda")
}

function LV(){
  console.log("LVda")
}

function PC(){
  $(function() {
    this.lV = new LV();
  })
  
  this.eV = new EV();
  init();
  
  function init(){
    console.log("initda")
  }
}
*/



/*
// トップへ
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
// jsonAPI + ajax テスト
$(document).ready(function() {
  $("#ank").click(function(){
    $.get("http://localhost:4567", function(data){
      parsed = JSON.parse(data);
      $("#aja").text( $("#aja").text() + parsed.result )
    });
  });
  
});
*/

