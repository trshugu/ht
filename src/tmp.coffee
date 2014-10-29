$ ->
  $("#tmp").css "color", "#f00"
  


###
  # raphael
  p = Raphael(10, 50, 320, 200)
  c = p.circle(50,40,10)
  c.attr("fill", "#f00")
  c.attr("stroke", "#fff")
  
  anim = Raphael.animation({cx: 10, cy: 20}, 2e3)
  c.animate(anim)
  c.animate(anim.delay(500))
###

###
  # vizualize
  $("#tab").visualize({type: 'pie', height: '300px', width: '420px'})
  $("#tab").visualize({type: 'bar', width: '420px'})
  $("#tab").visualize({type: 'area', width: '420px'})
  $("#tab").visualize({type: 'line', width: '420px'})
###

###
  # morrisjs
  data = [
    { year: '2008', value: 20 }
    { year: '2009', value: 10 }
    { year: '2010', value: 5 }
    { year: '2011', value: 5 }
    { year: '2012', value: 20 }
  ]
  
  m = new Morris.Line(
    element: 'morri'
    data: data
    xkey: 'year'
    ykeys: ['value']
    labels: ['Value']
  )
  
  @add = ->
    data.push({ year: '2014', value: 40 })
    m.setData(data)
###



###
  # テーブルデータをグラフに
  $("#pac").chartify('bar',
    pieChartRotation: -1.256/2
    showLegend: false
    colors: ["eeeeee", "ffc000"]
  )
###



###
  # アイコン風グラフ
  $(".pie").peity("pie")
  $(".line").peity("line",{width:64})
  charts = $(".update").peity("line",{width:64})
  
  @cha = ->
    $(".cha").text("4/5").change()
    $(".pie").peity("donut").change()
    # まとめる系の変換は不可
    # $(".line").peity("bar")
    val = charts.text().split(",")
    val.shift()
    val.push(Math.round(Math.random()*10))
    charts.text(val.join(",")).change()
###



###
  # リアルタイムflotr2
  d1 =[[]]
  serie = [
    {
      data: d1
      label: "2012年"
    }
  ]
  
  render = -> Flotr.draw(
    document.getElementById("graph")
    serie
    legend:
      position: "se"
      labelFormatter: (label) -> label
      backgroundColor: "#D2E8FF"
    title: "tititi"
    HtmlText: false
  )
  
  t = 0
  @add = ->
    omega = Math.PI/7
    d1.push([t++, Math.sin(omega * t)])
    if (d1.length > 10)
      d1.shift()
    render()
  
  render()
###


###
  # flotr2
  d1 = [
    [1, 70],
    [2, 68],
    [3, 65],
    [4, 67],
    [5, 64],
    [6, 61],
    [7, 60],
    [8, 62],
    [9, 68],
    [10, 67],
    [11, 70],
    [12, 72]
  ]
  d2 = [
    [1, 70],
    [2, 69],
    [3, 70],
    [4, 71],
    [5, 69],
    [6, 70],
    [7, 69],
    [8, 68],
    [9, 69],
    [10, 70],
    [11, 73],
    [12, 79]
  ]
  
  serie = [
    {
      data: d1
      label: "2012年"
    }
    {
      data: d2
      label: "2000年"
      pie:
        explode: 70
    }
  ]
  
  ticks = [
    [0, "容姿"]
    [1, "男らしさ"]
    [2, "優しさ"]
    [3, "性格"]
    [4, "ユーモア"]
    [5, "財力"]
  ]
  
  Flotr.draw(
    document.getElementById("graph")
    serie
    pie:
      show: true
      explode: 7
    mouse:
      track: true
    # radar:
    #   show: true
    grid:
      circular: true,
      minorHorizontalLines: true
    yaxis:
      min: 0,
      max: 100,
      minorTickFreq: 1
    xaxis:
      ticks: ticks
    # legend:
    #   position: "se"
    #   labelFormatter: (label) -> label
    #   backgroundColor: "#D2E8FF"
    HtmlText: false
  )
  
###


###
# リアルタイム更新
  serie = [
    {x:1, y:1},{x:2, y:2}
  ]
  
  graph = new Rickshaw.Graph(
    element: document.querySelector("#chart")
    width: 300
    height: 200
    renderer: 'line'
    stack: false
    series: [{
      color: "steelblue"
      data: serie
    }]
  )
  
  graph.render()
  
  @add = ->
    serie.push({x:serie.length + 1, y:serie.length % 2})
    graph.update()
###


###
# rickshaw
  graph = new Rickshaw.Graph(
    element: document.querySelector("#chart")
    width: 300
    height: 200
    renderer: 'bar'
    stack: false
    series: [{
      color: "steelblue"
      data: [
        {x: 0, y: 40}
        {x: 1, y: 49}
        {x: 2, y: 38}
        {x: 3, y: 30}
        {x: 5, y: 34}
      ]
    },{
      color: "lightblue"
      data: [
        {x: 0, y: 20}
        {x: 1, y: 25}
        {x: 2, y: 19}
        {x: 3, y: 15}
        {x: 5, y: 17}
      ]}
    ]
  )
  
  graph.render()
###

###
# knockout 解析
$ ->
  # Modelを定義
  M = (value) ->
    self = this
    self.text = ko.observable(value)
    return
  
  # ViewModelを定義
  VM = ->
    self = this
    self.list = ko.observableArray() # todoリスト
    self.inputValue = ko.observable("") # 追加todoテキスト
    
    # 追加
    self.add = (obj, e) ->
      return  unless self.inputValue() # 空文字の場合は処理しない
      
      # 入力されたテキストでTodoModelを作りTodoリストに挿入
      self.list.unshift new M(self.inputValue())
      self.inputValue ""
      return
    
    # 削除
    self.remove = (obj, e) ->
      # イベントバインディングで実行される関数の第1引数にはModel、第2引数にはイベントオブジェクトが渡される
      self.list.remove obj
      return
    return
  
  # bindingスタート
  ko.applyBindings new VM()
  return
###

###
# knockout でTodoリスト
$ ->
  # Modelを定義
  TodoModel = (value) ->
    self = this
    self.todoText = ko.observable(value)
    return
  
  # ViewModelを定義
  TestappViewModel = ->
    self = this
    self.todoList = ko.observableArray() # todoリスト
    self.todoInputValue = ko.observable("") # 追加todoテキスト
    
    # 追加
    self.addTodo = (obj, e) ->
      return  unless self.todoInputValue() # 空文字の場合は処理しない
      
      # 入力されたテキストでTodoModelを作りTodoリストに挿入
      self.todoList.unshift new TodoModel(self.todoInputValue())
      self.todoInputValue ""
      return
    
    # 削除
    self.removeTodo = (obj, e) ->
      # イベントバインディングで実行される関数の第1引数にはModel、第2引数にはイベントオブジェクトが渡される
      self.todoList.remove obj
      return
    return
  
  # bindingスタート
  ko.applyBindings new TestappViewModel()
  return
###




###
# knockout タスクリストサンプル
$ ->
  # タスク
  TaskViewModel = (name) ->
    
    # タスク名
    @name = ko.observable(name)
    
    # 完了かどうか
    @completed = ko.observable(false)
    
    # 編集中かどうか
    @editing = ko.observable(false)
    
    # 編集ビューの切り替え
    @toggleEdit = ->
      @editing not @editing()
      return
    
    # 削除要求コールバック
    @requestRemove = (task) ->
      # 何もしない
    
    # 削除ボタンのイベントハンドラ
    @destroy = ->
      @requestRemove this  if confirm("削除していいですか？")
      return
    return

  
  # アプリケーション
  appViewModel =
    # 新しいタスクの名前
    newTaskName: ko.observable("")
    
    # 登録されたタスク
    tasks: ko.observableArray()
    
    # 登録ボタンのハンドラ
    addTask: ->
      taskName = @newTaskName()
      newTask = new TaskViewModel(taskName)
      
      # タスクを削除するときのコールバックを設定
      self = this
      newTask.requestRemove = (task) ->
        self.tasks.remove task
        return
      
      @tasks.push newTask
      @newTaskName ""
      return
  
  # ビューにバインド
  ko.applyBindings appViewModel
  return
###


###
# knockout data-bindの試し書き
$ ->
  # ViewModelを定義
  TestappViewModel = ->
    self = this
    self.message = ko.observable("") # 初期値は空文字列を指定
    return
  
  # bindingスタート
  ko.applyBindings new TestappViewModel()
  return
###

###
# knockout wiki曰く
$ ->
  ViewModel = ->
    @firstName = ko.observable("Planet")
    @lastName = ko.observable("Earth")
    @fullName = ko.computed(->
      @firstName() + " " + @lastName()
    , this)
    return
  
  ko.applyBindings new ViewModel()
  return
###

###
# knockout Modelのテスト用
$ ->
  Model = ->
    self = this
    self.text = ""
  
  ViewModel = ->
    self = this
    self.value = ko.observable("asdf")
    self.btn = (obj, e) ->
      obj.value Date()
    return
  
  ko.applyBindings new ViewModel()


@ddd = ->
  @btn
  return
###


###
$ ->
  # knockout ViewはViewModelを知っているべきでViewModelはViewを知らなくてもよい
  vm = {
    pN1: ko.observable( Date() ),
    pN2: ko.observable( Date() ),
    pN3: ko.observable( Date() )
  }
  
  ko.applyBindings(vm)
###


###
# underscore.js & lodash.js
numbers = [1,2,3,4,5]
persons = [ 
  { 
    name : "jonny", 
    age : 24, 
    birth_month : 8, 
    gender : 0 # 0 : male, 1, female 
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
]

# arrays
console.log _.first([5, 4, 3, 2, 1])
console.log _.rest([5, 4, 3, 2, 1])
console.log _.rest([5, 4, 3, 2, 1], 3)
console.log _.last([5, 4, 3, 2, 1])
console.log _.compact([0, 1, false, 2, '', 3])
console.log _.flatten([1, [2], [3, [[[4]]]]])
console.log _.without([1, 2, 1, 0, 3, 1, 4], 0, 1)
console.log _.uniq([1, 2, 1, 3, 1, 4])
###


