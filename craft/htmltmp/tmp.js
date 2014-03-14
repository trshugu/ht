/*
*/
$(document).ready(function() {
  $("#tmp");
});







/*
// underscore.js & lodash.js

// underscore.js用共通データ
var numbers = [1,2,3,4,5];
var persons = [ 
  { 
    name : "jonny", 
    age : 24, 
    birth_month : 8, 
    gender : 0 // 0 : male, 1, female 
  }, 
  { 
    name : "paul", 
    age : 52, 
    birth_month : 7, 
    gender : 1 
  }, 
  { 
    name : "under score", 
    age : 32, 
    birth_month : 8, 
    gender : 0 
  } 
];
*/


/*
// arrays
_.first([5, 4, 3, 2, 1]);
_.rest([5, 4, 3, 2, 1]);
_.rest([5, 4, 3, 2, 1], 3);
_.last([5, 4, 3, 2, 1]);
_.compact([0, 1, false, 2, '', 3]);
_.flatten([1, [2], [3, [[[4]]]]]);
_.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
_.uniq([1, 2, 1, 3, 1, 4]);
//_.intersect([1, 2, 3], [101, 2, 1, 10], [2, 1]); できなかった
_.indexOf([1, 2, 3], 2);
_.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
_.range(0, 30, 5);
*/


/*
// 要素の個数を返却
_.size({one : 1, two : 2, three : 3});

// 配列に変換
(function(){ return _.toArray(arguments).slice(0); })(1, 2, 3);

// 含まれていたらtrue
_.include([1, 2, 3], 3);

// 関数を実行
_.invoke([[5, 1, 7], [3, 2, 1]], 'sort');

// 挿入される位置を返却
_.sortedIndex([10, 20, 30, 40, 50], 35);

// 条件がどれかひとつでも真ならtrue
_.any([null, 0, 'yes', false]);
_.any([true, 1, null, 'yes'], function(a){return false;});

// 条件がすべて真ならtrue
_.all([true, 1, null, 'yes']);
_.all([true, 1, null, 'yes'], function(a){return true;});

// reject 条件を通過しなかったものを返却
var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// select 条件を通過したものすべてを返却
var evens = _.select([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
// detect 条件を通過した一番最初を返却
var even = _.detect([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });

// reduceRight 右方向からreduce
var list = [[0, 1], [2, 3], [4, 5]];
var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
// => [4, 5, 2, 3, 0, 1]

// reduce
_.reduce([1, 2, 3], function(memo, num){alert("memo:"+ memo+".."+"num:"+num); return memo + num; }, 0)

// map
_.map([1, 2, 3], function(num){ return num * 3; });
_.map({one : 1, two : 2, three : 3}, function(num, key){ return num * 3; });
*/


/*
// numとkeyが逆
_.each([1, 2, 3], function(num){ alert(num); });
_.each({one : 1, two : 2, three : 3}, function(num, key){ alert(num); });
*/

/*
// sortBy
var orderByYoung = _.sortBy(persons, function (person) { 
  return person.age; 
}); 
 
console.log(JSON.stringify(orderByYoung));
*/

/*
// min
var youngestPerson = _.min(persons, function (person) { 
  return person.age; 
}); 

console.log(JSON.stringify(youngestPerson));
*/


/*
// max
var oldestPerson = _.max(persons, function (person) { 
  return person.age; 
}); 
 
console.log(JSON.stringify(oldestPerson));
*/


/*
// pluck キーを指定して値を取得
var names = _.pluck(persons, "name"); 
console.log("names : " + names);
*/

/*
// contains boolが返却
var isContain1 = _.contains(numbers, 1);
var isContain2 = _.contains(numbers, 100);

console.log("isContain1 : " + isContain1);
console.log("isContain2 : " + isContain2);
*/


/*
// findWhere findと同じく一番最初の値を返却
var male = _.findWhere(persons, {gender : 0});
console.log(JSON.stringify(male));
*/


/*
// where
var males = _.where(persons, {gender : 0});

console.log(JSON.stringify(males));
*/


/*
// filter 条件にあう値を全て配列として返却
var evens = _.filter(numbers, function (number) { 
  return number % 2 === 0; 
}); 

console.log("evens : " + evens);
*/


/*
// find 一番最初にでてくる偶数の値を取得
var even = _.find(numbers, function (number) { 
  return number % 2 === 0; 
}); 
 
console.log("even : " + even);
*/



/*
// each
_.each(numbers, function (number) { 
  console.log("number : " + number); 
});
*/



/*
// 配列をインクリメントすると参照型がわかる
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
// 全体的にプリミティブ型なのかも
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
// jqueryでjsonからオブジェクトへ変換テスト
var str = '{"ary":[0,1,2],"obj":{"a":0,"b":1,"c":2}}';
var obj = $.parseJSON(str);

// テスト出力
document.write(obj.ary + "<br>");
// ブラウザでは配列がobject
document.write(obj.obj + "<br>");
*/


/*
// jsonからオブジェクトへ変換テスト
var str = '{"ary":[0,1,2],"obj":{"a":0,"b":1,"c":2}}';
var obj = JSON.parse(str);

// テスト出力
document.write(obj.ary + "<br>");
// ブラウザでは配列がobject
document.write(obj.obj + "<br>");
*/


/*
// クロージャオンクリックのテスト
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
      this.value = flag ? "有効" : "無効";
    };
  }
}
*/



/*
// BSD/オールマンでクロージャを使ったときの挙動
function newCounter() {
  var i = 0;
  return function() { // 無名関数
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
  return function() // 無名関数
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
// 配列でfor-inを使うと、prototypeを変更したとき挙動がおかしくなることがある
Object.prototype.hoge = function() {};

var assoc = {
  foo: 1,
  bar: 2,
  baz: 3
};

for ( var i in assoc ) {
  // よってhasOwnProperty()で自分自身のメンバ変数かを確認する
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
// 名前をセレクタで
$(document).ready(function() {
  $("input[name=ttb]").css("border", "3px solid red");
});
*/

/*
// classを追加する運用だといいという
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
// tmpを使用する運用に
$(document).ready(function() {
  $("#tmp").click( function(){$(this).slideToggle("slow");} );
});

*/


/*
// h4 の次の要素をトグル
$(document).ready(function() {
  $('#navi > h4').click(function(){
    // 引数には開閉する速度を指定します
    $(this).next().slideToggle('slow');
  });
});
*/



/*
// ワンライナーでの記述が可能
javascript:$('.semooh a').hover(function(){ $(this).text('ヌ？'); },function(){ $(this).text('ヌー'); }); 
*/


/*
// jsでBSD/オールマンのテスト
// javascriptでは行が正しく終っていないと判断した場合、暗黙的に;が挿入される
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
// datatableサンプル
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
// Zoom のチェック
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
// Eventsのチェック
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
// Methodsのチェック
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
        // $('#flipbook').turn('page', 4);// numへ飛ぶ
        // $('#flipbook').turn('pages', 4); // numにする
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

// Propertiesのチェック
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
// 現在動作中かを判定する
function isAnimating() {
    if ($("#flipbook").turn("animating"))
        alert('Animating a page!');
}
*/


/*
// 矢印キーで改ページ
$(window).bind('keydown', function(e){
    if (e.keyCode==37)
        $('#flipbook').turn('previous');
    else if (e.keyCode==39)
        $('#flipbook').turn('next');
});
*/


/*
// optionsのチェック
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
        //      alert(page); // 動作したページ
        //      alert(pageobj); // 次のセットなど
        //  }
        // },
        autoCenter: true
    });
    //alert($("#flipbook").children().length)
});
*/


/*
// turn.js サイズを指定しないと自動調整される。
$(document).ready(function(){
    $("#flipbook").turn({
        width: 400,
        height: 300,
        autoCenter: true
    });
});
*/

/*
// tmpsにパラメータ test=John をつけて要求し、その要求が正常に完了したとき、レスポンスを表示する。
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
// クリックしたdivの色を取得しresultに渡す
$(document).ready(function(){
  $("div").click(function () {
    var color = $(this).css("background-color");
    $("#result").html("That div is <span style='color:" + color + ";'>" + color + "</span>.");
  });
});
*/


/*
// divに:を追加したり.klassの色を変えたりクリックして隠したり。
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
// ウィンドウサイズのリアルタイムな取得
$(document).ready(function(){
    getScreenSize(); // 画面サイズの取得
    getWindowSize(); // ウィンドウサイズの取得
});

//window.onresize=function(){ getWindowSize(); }
window.onresize=getWindowSize;

// 画面サイズを取得する
function getScreenSize() {
    var s = "横幅 = " + window.parent.screen.width + " / 高さ = " + window.parent.screen.height;
    document.getElementById("ScrSize").innerHTML = s;
}

// ウィンドウサイズを取得する
function getWindowSize() {
    var sW,sH,s;
    if (document.all) {
        //Internet Explorer
        sW = document.body.clientWidth;
        sH = document.body.clientHeight;
    } else {
        //Firefox等
        sW = window.innerWidth;
        sH = window.innerHeight;
    }
    s = "横幅 = " + sW + " / 高さ = " + sH;
 
    document.getElementById("WinSize").innerHTML = s;
}
*/


/* 
// each文
$.each([1,2,3], function() {
  document.write(this + 1);
});
*/

