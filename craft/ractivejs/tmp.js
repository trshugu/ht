/*
*/
$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
});



// ractive
var ractive = new Ractive({
  // �o�͐�
  el: "#result",
  
  // �e���v���[�g
  template: "#myTemplate",
  
  // �l��ς������f�[�^�̌ł܂�
  data: {
    user: '���Y',
    messages: { total: 11, unread: 4 }
  }
});

// �ύX
var msg = ractive.get("messages");
msg.unread = 9; 
ractive.update("messages");


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

