/*
*/
$(document).ready(function() {
  $("#tmp");
});






/*
// angular $http
var myApp = angular.module('myApp', []);
myApp.controller("myCtrl",["$scope", "$http", function($scope, $http){
  $scope.val = "asdf";
  
  $scope.doClick = function() {
    $http( {method: "GET", url: ""} )
    .success( function(d,s,h,c){
      console.log("adsf");
      console.log(s);
      $scope.val = s;
    } )
    .error( function(d,s,h,c){
      console.log("qwer");
      $scope.val = s;
    } )
  };

}]);
*/





/*
// angular $document
var myApp = angular.module('myApp', []);
myApp.controller("myCtrl",["$scope", "$document", function($scope, $document){
  $scope.title = $document[0].title;
  $scope.windowTitle = angular.element(window.document)[0].title;
}]);
*/



/*
// angular noop
// �Ȃɂ��s��Ȃ��֐�
function foo(callback) {
  var result = calculateResult();
  (callback || angular.noop)(result);
}

function calculateResult(){return "anokutara"}

console.log(foo(null));
console.log(foo(function(x){ console.log(x+"sannmyaku") }));
*/


/*
// angular $window
var myApp = angular.module('myApp', []);
myApp.controller("myCtrl",["$scope", "$window", function($scope, $window){
  $scope.greeting = 'Hell, World!';
  $scope.doGreeting = function(greeting) {
    $window.open(greeting);
  };  
}]);
*/




/*
// angular $timeout ����3
var myApp = angular.module('myApp', []);
myApp.controller("myCtrl",["$scope", "$timeout", function($scope, $timeout){
  $scope.testnum = 0;
  
  var func = function(){
    $scope.testnum++;
    $timeout(func,1000);
  }
  
  $timeout(func,1000);
}]);
*/


/*
// angular $timeout ����2
var myApp = angular.module('myApp', []);
myApp.controller("myCtrl",["$scope", "$timeout", function($scope, $timeout){
  $scope.testnum = 0;
  $scope.updateVal = function(){
    $timeout(function(){
      $scope.testnum++;
      $scope.updateVal();
    },1000);
  }
  console.log($scope.updateVal());
}]);
*/

/*
// angular $timeout
var myApp = angular.module('myApp', []);
function myCtrl($scope, $timeout){
  $scope.testnum = 0;
  $scope.updateVal = function(){
    $timeout(function(){
      $scope.testnum++;
      $scope.updateVal();
    },1000);
  }
  
  $scope.updateVal();
}
*/

/*
// angular directive
var myApp = angular.module('myApp', []);
myApp.directive("nini",function(){
  return {
    restrict: "E",
    template:"tanotara"
  }
});
*/




/*
// angular ng-repeat����2
function CtrlScope($scope){
  $scope.names=["sadfdsf","efe","ww"];
};
*/


/*
// angular ng-repeat
var myApp = angular.module('myApp', []);
myApp.controller("CtrlScope",["$scope", function($scope){
  $scope.names=["sadfdsf","efe","ww"];
}]);
*/


/*
// angular �f�B���N�e�B�u�̃}�b�`���O
angular.module('myApp', [])
  .controller("myCont", ["$scope", function($scope) {
      $scope.name = "temptemp";
    }
  ]);
*/



/*
// angular ���I�Ƀ��f����������
function helloCtrl($scope)
{
  $scope.hello = "Hello, World";
  $scope.goodbye = function()
  {
    $scope.hello = "Good Bye";
  }
}
*/


/*
// angular
$(function(){
  var elem_in = $("input[name='yourname']");
  var elem_out = $("#yourname");
  
  var showName = function(name){
    elem_out.text(name);
  };
  
  showName( elem_in.val() );
  
  elem_in.bind('keyup', function(){
    setTimeout( showName, 0, $(this).val() );
  });
});
*/




/*
// Backbone textbox
var V = Backbone.View.extend({
  events:{
    "keyup :input":"logkey",
    "keypress input":"logkey"
  },
  initialize:function () {
    this.$bone = $("#bone");
    this.$str = $("#string");
    this.render();
  },
  render:function () {
    this.$bone.text('aaa');
  },
  logkey:function (e) {
    this.$bone.text( this.$str.val() );
  }
  
});

$(function() {
  var app = new V({el:$("#cont")});
});
*/


/*
// Backbone RESTful JSON2
var Sina = Backbone.Model.extend({
  urlRoot: "http://localhost:4567/sina/",
  idAttribute: "_id",
  defaults: {
    "content": ""
  }
});

var sina = new Sina();
// --disable-web-security
// --allow-file-access-from-files


// �ꗗ�擾 fetch
sina.fetch({content: "concon"}, {
  success:function(){
    console.log("instans");
    console.log(JSON.stringify(sina));
  }
});

// id + fetch
sina.set({id: "sinsin"});
sina.fetch({
  success:function(){
    console.log("instans");
    console.log(JSON.stringify(sina));
  }
});

sina.save();
sina.destroy();
*/




/*
// Backbone view
var V = Backbone.View.extend({
  events:{
    "click #addBtn":"onAdd"
  },
  initialize:function () {
    this.$bone = $("#bone");
    this.render();
  },
  render:function () {
    this.$bone.text('aaa');
  },
  onAdd:function () {
    this.$bone.text('onAdd');
  }
  
});

$(function() {
  var app = new V({el:$("#cont")});
});
*/



/*
// Backbone RESTful JSON
var Sina = Backbone.Model.extend({
  urlRoot: "http://localhost:4567/sina",
  idAttribute: "_id",
  defaults: {
    "content": ""
  }
});

var sina = new Sina();
sina.save({content: "concon"}, {
  success:function(){
    console.log("instans");
    console.log(JSON.stringify(sina));
  }
});
*/



/*
// Backbone Routes
var routetest = Backbone.Router.extend({
  "routes" : {
    ""       : 'index',
    "tmpf.html?aaa=:val" : 'india',
    "mypage" : 'mypage',
  },
  "index" : function() {
    console.log("ind");
  },
  "india" : function(val) {
    console.log(val);
  },
  "mypage" : function() {
    console.log("mymy");
  }
});

$(function() {
  var router = new routetest();
  Backbone.history.start();
});
*/



/*
// knockout �^�X�N���X�g�T���v��
$(function() {
  // �^�X�N
  var TaskViewModel = function(name)
  {
    // �^�X�N��
    this.name = ko.observable(name);
    
    // �������ǂ���
    this.completed = ko.observable(false);
    
    // �ҏW�����ǂ���
    this.editing = ko.observable(false);
    
    // �ҏW�r���[�̐؂�ւ�
    this.toggleEdit = function()
    {
      this.editing(!this.editing());
    };
    
    // �폜�v���R�[���o�b�N
    this.requestRemove = function(task) {
      // �������Ȃ�
    };
    
    // �폜�{�^���̃C�x���g�n���h��
    this.destroy = function() {
      if (confirm("�폜���Ă����ł����H"))
      {
        this.requestRemove(this);
      }
    };
  };
  
  // �A�v���P�[�V����
  var appViewModel = {
    // �V�����^�X�N�̖��O
    newTaskName: ko.observable(""),
    
    // �o�^���ꂽ�^�X�N
    tasks: ko.observableArray(),
    
    // �o�^�{�^���̃n���h��
    addTask: function()
    {
      var taskName = this.newTaskName();
      var newTask = new TaskViewModel(taskName);
      
      // �^�X�N���폜����Ƃ��̃R�[���o�b�N��ݒ�
      var self = this;
      newTask.requestRemove = function(task) {
        self.tasks.remove(task);
      };
      
      this.tasks.push(newTask);
      this.newTaskName("");
    }
  };
  
  // �r���[�Ƀo�C���h
  ko.applyBindings(appViewModel);
});
*/


/*
// knockout Model�̃e�X�g�p
$(function(){
  function Model()
  {
    var self = this;
    self.text = "";
  }
  
  function ViewModel()
  {
    var self = this;
    self.value = ko.observable("asdf");
    
    self.btn = function(obj, e)
    {
      obj.value( Date() );
    };
  }
  
  
  ko.applyBindings(new ViewModel());
});

function ddd()
{
  this.btn;
}
*/


/*
// knockout View��ViewModel��m���Ă���ׂ���ViewModel��View��m��Ȃ��Ă��悢
$(function(){
  var vm = {
    pN1: ko.observable( Date() ),
    pN2: ko.observable( Date() ),
    pN3: ko.observable( Date() )
  };
  
  ko.applyBindings(vm);
});
*/


/*
// json
var jsonarr = [
  { Id:"10", Cd:"01588", Name:"Apple" },
  { Id:"11", Cd:"05178", Name:"Banana" }
]

function jsonRet(self)
{
  $.each(jsonarr,function(){
    self.products.push( this );
  })
}

$(function(){
  var productModel = function (src)
  {
    var self = this;
    self.products = ko.observableArray(src);
    
    //�ǉ�
    self.addJson = function(obj, e)
    {
      jsonRet(self);
    };
  };
  
  ko.applyBindings(new productModel);
});
*/



/*
// knockout wiki�H��
$(function(){
  function ViewModel()
  {
    this.firstName = ko.observable("Planet");
    this.lastName = ko.observable("Earth");
    
    this.fullName = ko.computed(
      function()
      {
        return this.firstName() + " " + this.lastName();
      },
      this);
  }
  
  ko.applyBindings(new ViewModel());
});
*/

/*
// knockout ��Todo���X�g
$(function(){
  //Model���`
  function TodoModel(value){
    var self = this;
    self.todoText = ko.observable(value);
  }
  
  //ViewModel���`
  function TestappViewModel(){
    var self = this;
    
    self.todoList = ko.observableArray(); //todo���X�g
    self.todoInputValue = ko.observable(''); //�ǉ�todo�e�L�X�g
    
    //�ǉ�
    self.addTodo = function(obj, e)
    {
      if( !self.todoInputValue() ) return; //�󕶎��̏ꍇ�͏������Ȃ�
      
      //���͂��ꂽ�e�L�X�g��TodoModel�����Todo���X�g�ɑ}��
      self.todoList.unshift( new TodoModel( self.todoInputValue() ) ); 
      self.todoInputValue('');
    };
    
    //�폜
    self.removeTodo = function(obj, e)
    {
      //�C�x���g�o�C���f�B���O�Ŏ��s�����֐��̑�1�����ɂ�Model�A��2�����ɂ̓C�x���g�I�u�W�F�N�g���n�����
      self.todoList.remove(obj);
    };
  }
  
  //binding�X�^�[�g
  ko.applyBindings( new TestappViewModel() );
});
*/



/*
// knockout data-bind
$(function(){
  //ViewModel���`
  function TestappViewModel(){
    var self = this;
    self.message = ko.observable(''); //�����l�͋󕶎�����w��
  }
  
  //binding�X�^�[�g
  ko.applyBindings( new TestappViewModel() );
});
*/




/*
// Backbone Collection
var obj = new Backbone.Model();
obj.set({name: "Murata"});
obj.set({age: 20});
var obj2 = new Backbone.Model({name: "Kenichiro1", age: 30});
var obj3 = new Backbone.Model({name: "Kenichiro2", age: 11});
var obj4 = new Backbone.Model({name: "Kenichiro3", age: 3});

var objs = new Backbone.Collection([obj, obj2, obj3, obj4]);
//console.log("objs: " + JSON.stringify(objs));

//console.log("objs.get(cid): " + JSON.stringify(objs.get("c1")));
//console.log("objs.at(index): " + JSON.stringify(objs.at(0)));

//objs.comparator = function(item) {
//    return item.get("age");
//};
 
//objs.sort();
//console.log("After sort objs: " + JSON.stringify(objs));
//console.log("After sort objs.at(index): " + JSON.stringify(objs.at(0)));

// map
tmpObj = objs.map(function(item){
  return item.get("age") + 1;
});
console.log("map result: " + JSON.stringify(tmpObj));

// reduce
tmpObjred = objs.reduce(function(memo, item){
  return memo + item.get("age") + 1 ;
}, 0);
console.log("reduce result: " + JSON.stringify(tmpObjred));

// pluck
console.log("pluck result: " + JSON.stringify(objs.pluck("name"))); 
*/


/*
// Backbone Model���p
var Staff = Backbone.Model.extend({
  defaults: {
    "name": "",
    "age": 0,
    "updateTime": new Date()
  },
  initialize: function() {
    console.log("Staff[" + this.cid + "]: " + JSON.stringify(this));
  }
});

var tmpStaff = new Staff(); 
tmpStaff.set({name: "Murata", age: 15, id: 101});
console.log("Staff[" + tmpStaff.cid + "]: " + JSON.stringify(tmpStaff));

var tmpStaff2 = new Staff({name: "Kenichiro", age: 35, id: 102});
*/



/*
// Backbone Model��{
var obj = new Backbone.Model();

obj.set({name: "Murata"});
obj.set({age: 20});

console.log("obj: " + JSON.stringify(obj));
console.log("obj.name: " + obj.get("name"));
*/
