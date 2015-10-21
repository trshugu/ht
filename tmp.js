(function() {
  $(function() {
    return $("#tmp").css("color", "#f00");

    /*
    $("#loadfile").text "doi"
    console.log "./zaq.csv"
     */

    /*
     * svg保存
     * console.log "image.on"
    @add = =>
      console.log "oon"
      width = $('#paper').width()
      height = $('#paper').height()
      $('body').append '<canvas id=\'canvas1\' width=' + width + ' height=' + height + '></canvas>'
      canvas = $('#canvas1')[0]
      ctx = canvas.getContext('2d')
      
      svg = $('#paper').children()
      svg.attr 'viewBox', '0 0 ' + width + ' ' + height
      data = (new XMLSerializer).serializeToString(svg[0])
       * console.log data
      imgsrc = 'data:image/svg+xml;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(data)))
      image = new Image()
      
      image.src = imgsrc
      
      console.log "iimmaaggeeoonnllooaadd"
      console.log image
      ctx.drawImage image, 0, 0
       * Optional: 自動でダウンロードさせる場合
      $('body').append '<a id=\'image-file\' type=\'application/octet-stream\' href=\'' + canvas.toDataURL('image/png') + '\' download=\'graph.png\'>Download Image</a>'
      $('#image-file')[0].click()
       * 後処理
       * $('#canvas1').remove()
       * $('#image-file').remove()
     */

    /*
     * クラス図
    jointjs = new joint.dia.Paper
      el: $('#paper')
      width: 500
      height: 250
      gridSize: 20
      model: new joint.dia.Graph
    
    uml = joint.shapes.uml
    
    classes =
      nani: new uml.Class
        position: x:100, y:10
        size: width:100, height:200
        name: "r-nanigasi"
        attributes:[
          "uid"
          "date"
        ]
        methods:[
          "nakami"
          "iroiro"
        ]
      
      gasi: new uml.Class
        position: x:400, y:10
        size: width:100, height:200
        name: "r_riso-su"
        attributes:[
          "hashhash"
        ]
        methods:[
          "naka"
          "midesu"
        ]
    
    _.each classes, (c)-> jointjs.model.addCell c
    _.each [
      new joint.dia.Link
       * new uml.Generalization
        source: id: classes.nani.id
        target: id: classes.gasi.id
    ], (c)->
      jointjs.model.addCell c
      console.log "owateru"
     */

    /*
     * petrinet
    graph = new joint.dia.Graph;
    paper = new joint.dia.Paper
      el: $ '#paper'
      width: 800
      height: 350
      gridSize: 10
      perpendicularLinks: true
      model: graph
    
    pn = joint.shapes.pn
    
    pReady = new pn.Place
      position:
        x: 140
        y: 50
      attrs:
        '.label':
          text: 'ready'
      tokens: 1
    
    pIdle = new pn.Place
      position:
        x: 140
        y: 260
      attrs:
        '.label':
          text: 'idle'
      tokens: 2
    
    buffer = new pn.Place
      position:
        x: 350
        y: 160
      attrs:
        '.label':
          text: 'buffer'
      tokens: 12
    
    cAccepted = new pn.Place
      position:
        x: 550
        y: 50
      attrs:
        '.label':
          text: 'accepted'
      tokens: 1
    
    cReady = new pn.Place
      position:
        x: 560
        y: 260
      attrs:
        '.label':
          text: 'ready'
      tokens: 3
    
    
    pProduce = new pn.Transition
      position:
        x: 50
        y: 160
      attrs:
        '.label':
          text: 'produce'
    
    pSend = new pn.Transition
      position:
        x: 270
        y: 160
      attrs:
        '.label':
          text: 'send'
    
    cAccept = new pn.Transition
      position:
        x: 470
        y: 160
      attrs:
        '.label':
          text: 'accept'
    
    cConsume = new pn.Transition
      position:
        x: 680
        y: 160
      attrs:
        '.label':
          text: 'consume'
    
    graph.addCell [
      pReady
      pIdle
      buffer
      cAccepted
      cReady
      pProduce
      pSend
      cAccept
      cConsume ]
    
    link = (a, b) ->
      return new pn.Link
        source:
          id: a.id
          selector: '.root'
        target:
          id: b.id
          selector: '.root'
    
    graph.addCell [
        link pProduce, pReady
        link pReady, pSend
        link pSend, pIdle
        link pIdle, pProduce
        link pSend, buffer
        link buffer, cAccept
        link cAccept, cAccepted
        link cAccepted, cConsume
        link cConsume, cReady
        link cReady, cAccept
    ] 
    
    fireTransition = (t, sec) ->
      inbound = graph.getConnectedLinks(t, inbound: true)
      outbound = graph.getConnectedLinks(t, outbound: true)
      
      placesBefore = _.map inbound, (link) -> graph.getCell link.get('source').id
      placesAfter = _.map outbound, (link) -> graph.getCell link.get('target').id
      
      isFirable = true
      
      _.each placesBefore, (p) ->
        if p.get('tokens') == 0
          isFirable = false
      
      if isFirable
        _.each placesBefore, (p) ->
          _.defer -> p.set 'tokens', p.get('tokens') - 1
          
          link = _.find inbound, (l) -> l.get('source').id == p.id
          
          paper.findViewByModel(link).sendToken V('circle', {r: 5, fill: 'red'}).node, sec * 1000
        
        _.each placesAfter, (p) ->
          link = _.find outbound, (l) -> l.get('target').id == p.id
          
          paper.findViewByModel(link).sendToken V('circle', {r: 5, fill: 'red'}).node, sec * 1000, ->
            p.set 'tokens', p.get('tokens') + 1
    
    simulate = ->
      transitions = [
        pProduce
        pSend
        cAccept
        cConsume
      ]
      
      _.each transitions, (t) -> fireTransition t, 1 if Math.random() < 0.7
      
      setInterval ->
        _.each transitions, (t) -> fireTransition t, 1 if Math.random() < 0.7
      , 2000
    
    simulationId = simulate()
    
    stopSimulation = (simulationId) ->
      clearInterval simulationId
     */

    /*
     * jointjs その3
    jointjs = new joint.dia.Paper
      el: $('#paper')
      width: 800
      height: 600
      gridSize: 20
      model: new joint.dia.Graph
    
    cells =
      el1: new joint.shapes.basic.Rect
        position: x: 55, y: 55
        size: width: 100, height: 20
        attrs:
          text:
            fill:"yellow"
            text:"fefe"
      
      el2: new joint.shapes.basic.Rect
        position: x:205, y: 85
        size: width: 70, height: 25
        attrs:
          text:
            fill:"blue"
            text:"asdf"
    
    _.each cells, (c)-> jointjs.model.addCell (c)
    
    link = (a, b) ->
      return new joint.dia.Link
        source: id: a.id, selector: '.root'
        target: id: b.id, selector: '.root'
    
    jointjs.model.addCell [
      link cells.el1, cells.el2
    ]
     */

    /*
     * jointjs その2
    jointjs = new joint.dia.Paper
      el: $('#paper')
      width: 800
      height: 600
      gridSize: 20
      model: new joint.dia.Graph
    
    cells =
      el1: new joint.shapes.basic.Rect
        position: x: 55, y: 55
        size: width: 100, height: 20
        attrs:
          text:
            fill:"yellow"
            text:"fefe"
      
      el2: new joint.shapes.basic.Rect
        position: x:205, y: 85
        size: width: 70, height: 25
        attrs:
          text:
            fill:"blue"
            text:"asdf"
    
    _.each cells, (c)-> jointjs.model.addCell (c)
     
    
    rs = [
      new joint.dia.Link
        source: id: cells.el1.id
        target: id: cells.el2.id
    ]
    
    _.each rs, (c) -> jointjs.model.addCell (c)
     */

    /*
     * jointjs
    jointjs = new joint.dia.Paper
      el: $('#paper')
      width: 800
      height: 600
      gridSize: 20
      model: new joint.dia.Graph
    
    el1 = new joint.shapes.basic.Rect
      position:
        x: 55
        y: 55
      size:
        width: 100
        height: 20
      attrs:
        text:
          fill:"yellow"
          text:"fefe"
    jointjs.model.addCell el1
    
    el2 = new joint.shapes.basic.Rect
      position:
        x:205
        y:85
      size:
        width: 70
        height: 25
      attrs:
        text:
          fill:"blue"
          text:"asdf"
    jointjs.model.addCell el2
    
    link = new joint.dia.Link
      source:
        id: el1.id
      target:
        id: el2.id
    
    jointjs.model.addCell link
     */

    /*
     * flotr2でkkbdb
    d1 =[[]]
    d2 =[[]]
    serie = [
      {
        data: d1
        label: "2012年"
      }
      {
        data: d2
        label: "2013年"
      }
    ]
    
    render = -> Flotr.draw(
      document.getElementById("graph")
      serie
      xaxis:
        mode: "time"
        timeMode: "local"
        timeFormat: '%y/%m/%d'
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
    
    t2 = 2 
    @add2 = ->
      d2.push [new Date().getTime(), t2++]
      render()
    
    render()
     */
  });


  /*
     * vue event
    vm=new Vue
      el:"#app"
      data:
        t:""
      methods:
        fun:->
          console.log "doij"
          this.$emit "nanika"
          this.$emit "bro"
          this.$emit "nanik"
    
    vm.$on "nanika",->
      console.log "kita"
    
    vm.$once "bro",->
      console.log "oncekita"
  
    vm.$off "nanik",->
      console.log "offkita"
   */


  /*
    new Vue
      el:"#app"
      data:
        s:""
        u:[]
        sel:null
      created:->
        this.u.push {name:"asdf", com:"ichi"}
        this.u.push {name:"asdfe", com:"ni"}
        this.u.push {name:"asdf", com:"san"}
        this.u.push {name:"zizij", com:"shi"}
      methods:
        cu:(u)->
          this.sel = u
   */


  /*
     * vue フィルター
    new Vue
      el:"#app"
      data:
        t:"Ano"
        c:12345678
        j:{'sdfd':2}
        l:[3,2,5,3,5,676,8,4,3]
   */


  /*
     * vueサンプル2
    vm = new Vue
      el:".app"
      data:
        checked: true
        picked: "on"
        selected: "dodo"
        sele: "nai"
        seleList:[
          {text:"moji",value:"baru"}
          {text:"moji2",value:"baru2"}
          {text:"moji2",value:"baru2"}
          {text:"moji2",value:"baru2"}
          {text:"moji5",value:"don"}
        ]
      methods:
        submit:(m,e)->
          console.log m
          console.log e
          e.stopPropagation()
    
    console.log vm
   */


  /*
     * vueサンプル
    d = a: "dead"
    
    vm = new Vue
      el:"#app"
      data: 
        num: 2
        message:""
        m2:"moemo"
        text: "通常の<br>テキスト"
        unescapedText: "<div>HTMLを有効化して<br>表示したい時のテキスト</div>"
        onetimeText: "一度だけバインディングされる文字列"
        d:d
        klass: ->true
      methods:
        mixin: ->
          console.log "mixinnn"
          console.log this.d.a
      computed:
        cmptd: ->
          console.log "cmpppp"
          -> ->"doi"
        ggt:
          get: -> -> this.m2
          set: (v)-> console.log v
      created:-> console.log "creatio!!"
      beforeCompile:-> console.log "B.C."
      compiled:-> console.log "konekone"
      ready:-> console.log "let it"
      attached:-> console.log "attache!"
      detached:-> console.log "detachee!!!!!!!!!"
      beforeDestroy:-> console.log "B.D!!!!!!!!!"
      destroyed:-> console.log "vooiydd!!!!!!!!!"
      watch:
        "message":(n,o)->console.log n + o
      
      
    
    console.log "djiji"
    console.log vm.$el
    console.log vm
    console.log vm.d == d
    console.log vm.d
    console.log vm.d.a
    vm.$add("b",aaa:"den",ccc:"dsf")
    console.log vm.b
    console.log vm.b.aaa
    console.log vm.b.ccc
    vm.$delete("b")
     * console.log vm.b.aaa
    
    vm.mixin()
    fun = vm.cmptd()
    console.log fun()
    console.log vm.ggt()
    vm.ggt = "death"
    console.log vm.cmptd = "asf"
     * vm.$remove()
     * vm.$destroy()
   */


  /*
     * vueでtodoリスト2
    new Vue(
      el: "#todo"
      data:
        todoList:[]
        todoInputValue:""
      methods:
        addTodo: ->
          self = this
          return unless self.todoInputValue  # 空文字の場合は処理しない
          self.todoList.unshift self.todoInputValue
          self.todoInputValue=""
          console.log self.todoList[0]
          return
        removeTodo: (obj)->
          self = this
          self.todoList.splice(obj,1)
          return
    )
   */


  /*
     * vueでtodoリスト1
    new Vue(
      el: "#todo"
      data:
        todoList:[]
        todoInputValue:""
      methods:
        addTodo: ->
          self = this
          return unless self.todoInputValue  # 空文字の場合は処理しない
          self.todoList.unshift self.todoInputValue
          self.todoInputValue=""
          console.log self.todoList[0]
          return
        removeTodo: (obj)->
          self = this # 番号でやる
          self.todoList = self.todoList.filter (v)-> v != obj.path[0].value.toString()
          return
    )
   */


  /*
    Vue.component "header-template",
      template: "#headerTemplate"
      methods:
        hell:(e)->
          alert "hell!!!!"
    
    Vue.component "item-template",
      template: "{{user_id}}:{{name}}"
    
    app = new Vue(
      el: "#app"
      data:
        user:[
          {user_id:"1", name:"sage man"},
          {user_id:"2", name:"fatmen"}
        ]
    )
     * console.log app.user[0].name
   */


  /*
    app = new Vue(
      el: "#todo"
      data:
        todos: []
      computed:
        lefts: ->
          this.todos.filter( (t)-> !t.isDone ).length
      created:->
        this.title = "mytod!"
        for n in [0..4]
          this.todos.push({
            isDone: false,
            title: "task-" + n
          })
      methods:
        addTodo: ->
          this.todos.push({
            isDone:false,
            title: "task-" + this.todos.length
          })
    )
   */


  /*
    app = new Vue(
      el: "#simple"
      data:
        message:"death"
        font:""
      methods:
        magnify: ->
          this.font = "font-size:20px;color:red"
    )
   */


  /*
    demo = new Vue(
      el: '#demo'
      data:
        title: "todos"
        todos: [
          {done: true, content: "heash"}
          {done: false, content: "deash"}
        ]
    )
   */


  /*
    demo = new Vue(
      el: '#demo'
      data:
        message: 'hell'
    )
   */


  /*
     * ractive
    name = "地獄"
    ractive = new Ractive(
      el: "#result" # 出力先
      template: "#myTemplate" # テンプレート
      data:
        user: name
        messages: { total: 11, unread: 4 }
    )
    
    @add = ->
      ractive.set("user", "世界")
      ractive.set("messages.unread", ractive.get("messages.unread") + 1)
   */


  /*
     * bacon.js3
    queryMovie = (query) -> $.get("http://api.themoviedb.org/3/search/movie?api_key=9eae05e667b4d5d9fbb75d27622347fe&query=" + query).then( (r) -> r.results)
    
    showMovie = (result) ->
      link = $("<a/>").attr("href", "https://www.themoviedb.org/movie/" + result.id).text(result.title)
      $("<div/>").append(link).css "padding", "0.1em 0"
    
    movieSearch = (query) ->
      return Bacon.once([])  if query.length < 3
      Bacon.fromPromise queryMovie(query)
    
    text = $("#input").asEventStream("keydown").debounce(300).map((event) ->  event.target.value ).skipDuplicates()
    suggestions = text.flatMapLatest(movieSearch)
    text.awaiting(suggestions).onValue (x) -> $("#results").html "Searching..."  if x
    suggestions.onValue (results) -> $("#results").html $.map(results, showMovie)
   */


  /*
     * bacon.js2
    up = $("#up").asEventStream("click").map(1)
    down = $("#down").asEventStream("click").map(-1)
    counter = up.merge(down).scan(0, (x, y) -> x + y)
    counter.assign $("#counter"), "text"
   */


  /*
  fib = ->
    b = 0
    r = 1
    -> 
      x = b + r
      b = r
      r = x
      console.log x
  
  f = fib()
  i = 0
  while i < 100
    f()
    i++
   */


  /*
   * 宣言型アプローチ
  plus = (a,b)-> a + b
  console.log [1..10].reduce(plus)
   */


  /*
     * bacon.js
    cb = (block) ->
       * Observable オブジェクト作成
      block.asEventStream('mousedown').flatMap( ->
        $("html")
          .asEventStream('mousemove')
          .map( (v) -> x: v.clientX, y: v.clientY ) # カーソルの座標をマッピング
          .slidingWindow(2,2) # 2値の引数
          .map( (t) -> x: t[1].x - t[0].x, y: t[1].y - t[0].y ) # 座標取得
          .takeUntil( block.asEventStream('mouseup') )
      )
      .scan(x: 0, y: 0, (p1, p2) -> x: p1.x + p2.x, y: p1.y + p2.y) # EventStreamからPropertiesを作成
      .onValue( (pos) -> block.css(top: pos.y + "px", left: pos.x + "px") ) # バインド
      
    
    cb($("#clickable-block"))
    cb($("#hukuse"))
   */


  /*
   * mocha
  mocha.setup('bdd')
  mocha.setup('tdd')
  
  assert = chai.assert
  expect = chai.expect
  chai.Should()
  
  describe "fizzbuzzメソッドのテスト", ->
    console.log "oyu1"
    describe "3の場合はFizzが返ってくる", ->
      assert.equal 2, 2
      console.log "oyu3"
   */


  /*
   * jasmine
  add = (x,y)->
    x + y
  
  console.log "jsafsij"
  describe('add 関数のテスト', ->
      it('1 + 1 は 2', ->
          expect(add(1, 1)).toBe(2);
      )
  
      it('1 + 4 は 5', ->
          expect(add(1, 4)).toBe(5);
      )
  
      it('10 + 2 は 12', ->
          expect(add(10, 2)).toBe(5); # わざと失敗させている
      )
  )
   */


  /*
   * qunit
  test('tetet', ->
    ok(true, "death")
    ok(true, "death")
    ok(true, "death")
    ok(true, "death")
  )
  
  test('てすと', ->
    ok(true, "death")
    ok(true, "地獄")
    ng(true, "death")
    ok(true, "death")
  )
   */


  /*
     * raphael
    p = Raphael(10, 50, 320, 200)
    c = p.circle(50,40,10)
    c.attr("fill", "#f00")
    c.attr("stroke", "#fff")
    
    anim = Raphael.animation({cx: 10, cy: 20}, 2e3)
    c.animate(anim)
    c.animate(anim.delay(500))
   */


  /*
     * vizualize
    $("#tab").visualize({type: 'pie', height: '300px', width: '420px'})
    $("#tab").visualize({type: 'bar', width: '420px'})
    $("#tab").visualize({type: 'area', width: '420px'})
    $("#tab").visualize({type: 'line', width: '420px'})
   */


  /*
     * morrisjs
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
   */


  /*
     * テーブルデータをグラフに
    $("#pac").chartify('bar',
      pieChartRotation: -1.256/2
      showLegend: false
      colors: ["eeeeee", "ffc000"]
    )
   */


  /*
     * アイコン風グラフ
    $(".pie").peity("pie")
    $(".line").peity("line",{width:64})
    charts = $(".update").peity("line",{width:64})
    
    @cha = ->
      $(".cha").text("4/5").change()
      $(".pie").peity("donut").change()
       * まとめる系の変換は不可
       * $(".line").peity("bar")
      val = charts.text().split(",")
      val.shift()
      val.push(Math.round(Math.random()*10))
      charts.text(val.join(",")).change()
   */


  /*
     * リアルタイムflotr2
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
   */


  /*
     * flotr2
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
       * radar:
       *   show: true
      grid:
        circular: true,
        minorHorizontalLines: true
      yaxis:
        min: 0,
        max: 100,
        minorTickFreq: 1
      xaxis:
        ticks: ticks
       * legend:
       *   position: "se"
       *   labelFormatter: (label) -> label
       *   backgroundColor: "#D2E8FF"
      HtmlText: false
    )
   */


  /*
   * リアルタイム更新
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
   */


  /*
   * rickshaw
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
   */


  /*
   * knockout 解析
  $ ->
     * Modelを定義
    M = (value) ->
      self = this
      self.text = ko.observable(value)
      return
    
     * ViewModelを定義
    VM = ->
      self = this
      self.list = ko.observableArray() # todoリスト
      self.inputValue = ko.observable("") # 追加todoテキスト
      
       * 追加
      self.add = (obj, e) ->
        return  unless self.inputValue() # 空文字の場合は処理しない
        
         * 入力されたテキストでTodoModelを作りTodoリストに挿入
        self.list.unshift new M(self.inputValue())
        self.inputValue ""
        return
      
       * 削除
      self.remove = (obj, e) ->
         * イベントバインディングで実行される関数の第1引数にはModel、第2引数にはイベントオブジェクトが渡される
        self.list.remove obj
        return
      return
    
     * bindingスタート
    ko.applyBindings new VM()
    return
   */


  /*
   * knockout でTodoリスト
  $ ->
     * Modelを定義
    TodoModel = (value) ->
      self = this
      self.todoText = ko.observable(value)
      return
    
     * ViewModelを定義
    TestappViewModel = ->
      self = this
      self.todoList = ko.observableArray() # todoリスト
      self.todoInputValue = ko.observable("") # 追加todoテキスト
      
       * 追加
      self.addTodo = (obj, e) ->
        return  unless self.todoInputValue() # 空文字の場合は処理しない
        
         * 入力されたテキストでTodoModelを作りTodoリストに挿入
        self.todoList.unshift new TodoModel(self.todoInputValue())
        self.todoInputValue ""
        return
      
       * 削除
      self.removeTodo = (obj, e) ->
         * イベントバインディングで実行される関数の第1引数にはModel、第2引数にはイベントオブジェクトが渡される
        self.todoList.remove obj
        return
      return
    
     * bindingスタート
    ko.applyBindings new TestappViewModel()
    return
   */


  /*
   * knockout タスクリストサンプル
  $ ->
     * タスク
    TaskViewModel = (name) ->
      
       * タスク名
      @name = ko.observable(name)
      
       * 完了かどうか
      @completed = ko.observable(false)
      
       * 編集中かどうか
      @editing = ko.observable(false)
      
       * 編集ビューの切り替え
      @toggleEdit = ->
        @editing not @editing()
        return
      
       * 削除要求コールバック
      @requestRemove = (task) ->
         * 何もしない
      
       * 削除ボタンのイベントハンドラ
      @destroy = ->
        @requestRemove this  if confirm("削除していいですか？")
        return
      return
  
    
     * アプリケーション
    appViewModel =
       * 新しいタスクの名前
      newTaskName: ko.observable("")
      
       * 登録されたタスク
      tasks: ko.observableArray()
      
       * 登録ボタンのハンドラ
      addTask: ->
        taskName = @newTaskName()
        newTask = new TaskViewModel(taskName)
        
         * タスクを削除するときのコールバックを設定
        self = this
        newTask.requestRemove = (task) ->
          self.tasks.remove task
          return
        
        @tasks.push newTask
        @newTaskName ""
        return
    
     * ビューにバインド
    ko.applyBindings appViewModel
    return
   */


  /*
   * knockout data-bindの試し書き
  $ ->
     * ViewModelを定義
    TestappViewModel = ->
      self = this
      self.message = ko.observable("") # 初期値は空文字列を指定
      return
    
     * bindingスタート
    ko.applyBindings new TestappViewModel()
    return
   */


  /*
   * knockout wiki曰く
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
   */


  /*
   * knockout Modelのテスト用
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
   */


  /*
  $ ->
     * knockout ViewはViewModelを知っているべきでViewModelはViewを知らなくてもよい
    vm = {
      pN1: ko.observable( Date() ),
      pN2: ko.observable( Date() ),
      pN3: ko.observable( Date() )
    }
    
    ko.applyBindings(vm)
   */


  /*
   * underscore.js & lodash.js
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
  
   * arrays
  console.log _.first([5, 4, 3, 2, 1])
  console.log _.rest([5, 4, 3, 2, 1])
  console.log _.rest([5, 4, 3, 2, 1], 3)
  console.log _.last([5, 4, 3, 2, 1])
  console.log _.compact([0, 1, false, 2, '', 3])
  console.log _.flatten([1, [2], [3, [[[4]]]]])
  console.log _.without([1, 2, 1, 0, 3, 1, 4], 0, 1)
  console.log _.uniq([1, 2, 1, 3, 1, 4])
   */

}).call(this);
