/*
*/
$(document).ready(function() {
  $("#tmp");
});






/*
// �z����C���N�������g����ƎQ�ƌ^���킩��
var b = { key: 1 };
function inc_b(data) {
  data["key"]++;
  return data;
}
console.log(b); // { key: 1 }
console.log(inc_b(b)); // { key: 2 }
console.log(b); // { key: 2 }

var c = { key: 1 };
function inc_c(data) {
  data = { key: 5 }
  return data;
}
console.log(inc_c(c)); // 5
console.log(c); // { key: 1 }
*/

/*
// �S�̓I�Ƀv���~�e�B�u�^�Ȃ̂���
var p = "abc";
var r = new String("def");

var pc = p;
var rc = r;

pc = "ghi";
rc = "jkl";

document.write(p + "<br>");
document.write(r + "<br>");
document.write(pc + "<br>");
document.write(rc + "<br>");

*/


/*
// jquery��json����I�u�W�F�N�g�֕ϊ��e�X�g
var str = '{"ary":[0,1,2],"obj":{"a":0,"b":1,"c":2}}';
var obj = $.parseJSON(str);

// �e�X�g�o��
document.write(obj.ary + "<br>");
// �u���E�U�ł͔z��object
document.write(obj.obj + "<br>");
*/


/*
// json����I�u�W�F�N�g�֕ϊ��e�X�g
var str = '{"ary":[0,1,2],"obj":{"a":0,"b":1,"c":2}}';
var obj = JSON.parse(str);

// �e�X�g�o��
document.write(obj.ary + "<br>");
// �u���E�U�ł͔z��object
document.write(obj.obj + "<br>");
*/


/*
// �N���[�W���I���N���b�N�̃e�X�g
window.onload = function()
{
  document.getElementById('btn').onclick = setButtonState();

  function setButtonState()
  {
    var flag = false;
    var btn = document.getElementById('btn');

    return function()
    {
      flag = !flag;
      this.value = flag ? "�L��" : "����";
    };
  }
}
*/



/*
// BSD/�I�[���}���ŃN���[�W�����g�����Ƃ��̋���
function newCounter() {
  var i = 0;
  return function() { // �����֐�
    i = i + 1;
    return i;
  }
}
 
c1 = newCounter();
document.write(c1() + "<br>")
document.write(c1() + "<br>")
document.write(c1() + "<br>")

function newCounterAllman()
{
  var i = 0;
  return function() // �����֐�
  {
    i = i + 1;
    return i;
  }
}
 
d1 = newCounterAllman();
document.write(d1() + "<br>")
document.write(d1() + "<br>")
document.write(d1() + "<br>")
*/


/*
// �z���for-in���g���ƁAprototype��ύX�����Ƃ����������������Ȃ邱�Ƃ�����
Object.prototype.hoge = function() {};

var assoc = {
  foo: 1,
  bar: 2,
  baz: 3
};

for ( var i in assoc ) {
  // �����hasOwnProperty()�Ŏ������g�̃����o�ϐ������m�F����
  if ( assoc.hasOwnProperty(i) === true ) {
    document.write(i + assoc[i] + "<br>");
  }
}
*/


/*
// draggable
$(document).ready(function() {
  $("#tmp").draggable({ distance: 20 });
});
*/

/*
// prev + next
$(document).ready(function() {
  $(".prev + .next").css("border", "3px solid red");
});
*/

/*
// ���O���Z���N�^��
$(document).ready(function() {
  $("input[name=ttb]").css("border", "3px solid red");
});
*/

/*
// class��ǉ�����^�p���Ƃ����Ƃ���
$(document).ready(function() {
  $(".tmp:odd").css({color: "#f00"}).addClass("odd-view");
});
*/


/*
// css
$(document).ready(function() {
  $("#tmp").css({color: "#f00"});
});

*/


/*
// tmp���g�p����^�p��
$(document).ready(function() {
  $("#tmp").click( function(){$(this).slideToggle("slow");} );
});

*/


/*
// h4 �̎��̗v�f���g�O��
$(document).ready(function() {
  $('#navi > h4').click(function(){
    // �����ɂ͊J���鑬�x���w�肵�܂�
    $(this).next().slideToggle('slow');
  });
});
*/



/*
// �������C�i�[�ł̋L�q���\
javascript:$('.semooh a').hover(function(){ $(this).text('�k�H'); },function(){ $(this).text('�k�['); }); 
*/


/*
// js��BSD/�I�[���}���̃e�X�g
// javascript�ł͍s���������I���Ă��Ȃ��Ɣ��f�����ꍇ�A�ÖٓI��;���}�������
// http://qiita.com/items/9c349ee212caee635997
function allman()
{
var a = 1
return (a == 1)
? "if"
: "else";

}

alert(allman());
*/


/*
// datatable
$(document).ready( function() {
  $("#example").dataTable();
} );
*/


/*
// datatable�T���v��
function fnFeaturesInit ()
{
  // Not particularly modular this - but does nicely :-)
  $('ul.limit_length>li').each( function(i) {
    if ( i > 10 ) {
      this.style.display = 'none';
    }
  } );
  
  $('ul.limit_length').append( '<li class="css_link">Show more<\/li>' );
  $('ul.limit_length li.css_link').click( function () {
    $('ul.limit_length li').each( function(i) {
      if ( i > 5 ) {
        this.style.display = 'list-item';
      }
    } );
    $('ul.limit_length li.css_link').css( 'display', 'none' );
  } );
}

$(document).ready( function() {
  fnFeaturesInit();
  $('#example').dataTable( {
    "bJQueryUI": true,
    "sPaginationType": "full_numbers"
  } );
  
  SyntaxHighlighter.config.clipboardSwf = 'media/javascript/syntax/clipboard.swf';
  SyntaxHighlighter.all();
} );
*/

/*
$(document).ready(function(){
    $("#flipbook").turn({
        width: 400,
        height: 300,
        autoCenter: true
    });
});

$(window).bind('keydown', function(e){
    if (e.keyCode==38){
        $('#zoom-viewport').zoom('zoomIn');
    }
    else if (e.keyCode==40){
        $('#zoom-viewport').zoom('zoomOut');
    }
});

$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        $('#flipbook').turn('previous');
    else if (e.keyCode==39)
        $('#flipbook').turn('next');
});
*/


/*
// Zoom �̃`�F�b�N
$(document).ready(function(){
    $('#zoom-viewport').zoom({
        flipbook: $("#flipbook"),
        duration: 600,
        max: 2
        //when: {
        //  doubleTap: function(e){alert(e);},
        //  Tap: function(e){alert(e);}
        //}
    });
});
    
    // $('#zoom-viewport').bind("zoom.doubleTap", function(e){ alert("dd"); })
    //  $('#zoom-viewport').bind("zoom.tap", function(e){ alert("tt"); })
    // $('#zoom-viewport').bind("zoom.change", function(e, change){ alert(change); })
    // $('#zoom-viewport').bind("zoom.resize", function(e){ alert("tt"); })

$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        $('#flipbook').turn('previous');
    else if (e.keyCode==39)
        $('#flipbook').turn('next');
});
*/


/*
// Events�̃`�F�b�N
$(document).ready(function(){
    // $("#flipbook").bind("first", function(event){alert("first!!")});
    // $("#flipbook").bind("last", function(event){alert("last!!")});
    // $("#flipbook").bind("start", function(event, pageObj, corner){alert(pageObj.page)});
    // $("#flipbook").bind("end", function(event, pageObj, turned){alert(pageObj.page)});
    // $("#flipbook").bind("missing", function(event, pages){alert("missing!!")});
    // $("#flipbook").bind("turning", function(event, page, view){alert(page)});
    // $("#flipbook").bind("turned", function(event, page, view){alert(page)});
    // $("#flipbook").bind("zooming", function(event, new, current){alert(new)});
});
*/


/*
// Methods�̃`�F�b�N
$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        // $('#flipbook').turn('previous');
        // $('#flipbook').turn('addPage', $("<div />").html("Loading..."), $("#flipbook").turn("pages")+1);
        // $('#flipbook').turn('center');
        // $('#flipbook').turn('destroy').remove();
        // $('#flipbook').turn('direction', 'rtl');
        // $('#flipbook').turn('display', 'single');
        // $('#flipbook').turn('disable', true);
        // alert($('#flipbook').turn('hasPage', 10));
        // alert($('#flipbook').turn('is'));
        // $('#flipbook').turn('page', 4);// num�֔��
        // $('#flipbook').turn('pages', 4); // num�ɂ���
        // $('#flipbook').turn('peel', 'br');
        // alert($('#flipbook').turn('range'));
        // $('#flipbook').turn('removePage', 2);
        // $('#flipbook').turn('resize');//?
        // $('#flipbook').turn('size', 100, 100);
        // $('#flipbook').turn('next').turn('stop');
        // alert($('#flipbook').turn('version'));
        $('#flipbook').turn('zoom', 0.5);
    else if (e.keyCode==39)
        $('#flipbook').turn('next');
});

*/


/*
$(document).ready(function(){
    $("#flipbook").turn({
        width: 400,
        height: 300,
        autoCenter: true
    });
});

// Properties�̃`�F�b�N
$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        // $('#flipbook').turn('previous');
        // alert($('#flipbook').turn('direction'));
        // alert($('#flipbook').turn('animating'));
        // alert($('#flipbook').turn('size').width);
        // alert($('#flipbook').turn('size').height);
        // alert($('#flipbook').turn('options'));
        // alert($('#flipbook').turn('view').join(" and "));
        // alert($('#flipbook').turn('zoom'));
    else if (e.keyCode==39)
        $('#flipbook').turn('next');
});
*/


/*
// ���ݓ��쒆���𔻒肷��
function isAnimating() {
    if ($("#flipbook").turn("animating"))
        alert('Animating a page!');
}
*/


/*
// ���L�[�ŉ��y�[�W
$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        $('#flipbook').turn('previous');
    else if (e.keyCode==39)
        $('#flipbook').turn('next');
});
*/


/*
// options�̃`�F�b�N
$(document).ready(function(){
    $("#flipbook").turn({
        width: 400,
        height: 300,
        // acceleration: false,
        // direction: "rtl",
        // duration: 600,
        // gradients: !$.isTouch,
        // elevation: 50,
        // page: 5,
        // when: {
        //  turning: function(event, page, pageobj) {
        //      alert(event);
        //      alert(page); // ���삵���y�[�W
        //      alert(pageobj); // ���̃Z�b�g�Ȃ�
        //  }
        // },
        autoCenter: true
    });
    //alert($("#flipbook").children().length)
});
*/


/*
// turn.js �T�C�Y���w�肵�Ȃ��Ǝ������������B
$(document).ready(function(){
    $("#flipbook").turn({
        width: 400,
        height: 300,
        autoCenter: true
    });
});
*/

/*
// tmps�Ƀp�����[�^ test=John �����ėv�����A���̗v��������Ɋ��������Ƃ��A���X�|���X��\������B
$.ajax({
  type: "POST",
  url: "tmps",
  data: {test: "John"},
  success: function(msg){
    alert( "Data Saved: " + msg );
  }
});
*/

/*
// �N���b�N����div�̐F���擾��result�ɓn��
$(document).ready(function(){
  $("div").click(function () {
    var color = $(this).css("background-color");
    $("#result").html("That div is <span style='color:" + color + ";'>" + color + "</span>.");
  });
});
*/


/*
// div��:��ǉ�������.klass�̐F��ς�����N���b�N���ĉB������B
$(document).ready(function(){
  $("div").append(":");
  $(".klass").css("color","#f00");
  $(".klass").click(function(event){
    event.preventDefault();
    $(this).hide("slow");
  });
});
*/


/*
// �E�B���h�E�T�C�Y�̃��A���^�C���Ȏ擾
$(document).ready(function(){
    getScreenSize(); // ��ʃT�C�Y�̎擾
    getWindowSize(); // �E�B���h�E�T�C�Y�̎擾
});

//window.onresize=function(){ getWindowSize(); }
window.onresize=getWindowSize;

// ��ʃT�C�Y���擾����
function getScreenSize() {
    var s = "���� = " + window.parent.screen.width + " / ���� = " + window.parent.screen.height;
    document.getElementById("ScrSize").innerHTML = s;
}

// �E�B���h�E�T�C�Y���擾����
function getWindowSize() {
    var sW,sH,s;
    if (document.all) {
        //Internet Explorer
        sW = document.body.clientWidth;
        sH = document.body.clientHeight;
    } else {
        //Firefox��
        sW = window.innerWidth;
        sH = window.innerHeight;
    }
    s = "���� = " + sW + " / ���� = " + sH;
 
    document.getElementById("WinSize").innerHTML = s;
}
*/


/* 
// each��
$.each([1,2,3], function() {
  document.write(this + 1);
});
*/

