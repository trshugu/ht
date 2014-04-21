/*
*/
$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
});



// ractive
var ractive = new Ractive({
  // 出力先
  el: "#result",
  
  // テンプレート
  template: "#myTemplate",
  
  // 値を変えたいデータの固まり
  data: {
    user: '太郎',
    messages: { total: 11, unread: 4 }
  }
});

// 変更
var msg = ractive.get("messages");
msg.unread = 9; 
ractive.update("messages");


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

