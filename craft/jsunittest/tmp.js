/*
*/




/*
// Qunit
test("a basic test example", function() {
  ok( true, "���̃e�X�g�͐������܂����B" );
  
  var value = "hello";
  equal( value, "hello", "hello�ƂȂ邱�Ƃ����҂��Ă��܂��B" );
  
  // sinon-qunit-1.0.0.js
  var spy = sinon.spy();
  spy("tmp");
  equal(spy.callCount, 1, "hell...");
});
*/



/*
// sinon.js
var spy = sinon.spy();
spy("tmp");
console.log(spy.callCount);
console.log(spy.args);

var clock = sinon.useFakeTimers(new Date('2013-03-24').getTime());
console.log(clock);
*/


/*
// �T�[�o�[2
var system = require('system');

server = require('webserver').create();
service = server.listen(4568, function (request, response)
{
  response.statusCode = 200;
  response.write('<html><body>Hello, World!</body></html>');
  response.close();
});

if (!service)
{
  console.log('Error: Could not create web server listening on port ' + 4568);
  phantom.exit();
}
*/


/*
// �T�[�o�[
var system = require('system');

if (system.args.length !== 2)
{
  console.log('Usage: tmp.js <portnumber>');
  phantom.exit(1);
}
else
{
  port = system.args[1];
  server = require('webserver').create();
  
  service = server.listen(port, function (request, response)
  {
    response.statusCode = 200;
    response.write('<html><body>Hello, World!</body></html>');
    response.close();
  });
  
  if (!service)
  {
    console.log('Error: Could not create web server listening on port ' + port);
    phantom.exit();
  }
}
*/


/*
// ���[�h�����y�[�W��jquery���g�p�ł���
var page = require('webpage').create();
var url = 'http://www.google.co.jp/';
page.open(url, function(status)
{
  page.includeJs('http://code.jquery.com/jquery-1.9.1.min.js', function()
  {
    console.log(page.evaluate(function()
    {
      return $('title').text();
    }));
    phantom.exit();
  });
});
*/

/*
// �X�N���[���V���b�g���Ƃ�
var page = require('webpage').create();
var url = 'http://www.google.co.jp/';
page.open(url, function(status)
{
  page.render('google.png');
  phantom.exit();
});
*/

