


###
# ログイン ->NG
page = require("webpage").create()
fs = require("fs")

# ページが読み込まれたら page.onCallback を呼ぶ
page.onInitialized = ->
  page.evaluate ->
    document.addEventListener "DOMContentLoaded", (->
      window.callPhantom "DOMContentLoaded"
      return
    ), false
    return

  return


# ページが読み込まれたら登録した関数の配列を順次実行してくれるクラス
funcs = (funcs) ->
  @funcs = funcs
  @init()
  return

funcs:: =
  
  # ページが読み込まれたら next() を呼ぶ
  init: ->
    self = this
    page.onCallback = (data) ->
      self.next()  if data is "DOMContentLoaded"
      return

    return

  
  # 登録した関数の配列から１個取り出して実行
  next: ->
    func = @funcs.shift()
    if func isnt `undefined`
      func()
    else
      page.onCallback = ->
    return


# 順次実行する関数

# ログイン後の HTML を書き出し
new funcs([
  ->
    console.log "ログイン処理"
    page.open "https://www.hatena.ne.jp/login"
  ->
    console.log "ログイン画面"
    page.evaluate ->
      document.getElementById("login-name").value = ""
      document.querySelector(".password").value = ""
      document.querySelector("form").submit()
      return

  ->
    console.log "ログイン中画面"
  ->
    console.log "ログイン後画面"
    page.render "mypage.png"
    html = page.evaluate(->
      document.getElementsByTagName("html")[0].innerHTML
    )
    fs.write "mypage.html", html, "w"
    phantom.exit()
]).next()
###


###
# callPhantom
page = require("webpage").create()
page.onInitialized = ->
  page.evaluate (domContentLoadedMsg) ->
    document.addEventListener "DOMContentLoaded", (->
      window.callPhantom "DOMContentLoaded"
      return
    ), false
    return

  return

page.onCallback = (data) ->
  
  # your code here
  console.log "DOMContentLoaded"
  phantom.exit 0
  return

page.open "http://phantomjs.org/"
###


###
# 画面遷移
page = require("webpage").create()
funcs = [
  ->
    page.open "http://www.p-rex.net/c15/"
  ->
    page.render "1.jpg"
    page.open "http://www.p-rex.net/c17/"
  ->
    page.render "2.jpg"
    page.open "http://www.p-rex.net/c23/"
  ->
    page.render "3.jpg"
    page.open "http://www.p-rex.net/c36/"
  ->
    page.render "4.jpg"
    phantom.exit()
]
recursive = (i) ->
  console.log i
  if i < funcs.length
    console.log "turu"
    page.onLoadFinished = ->
      recursive i + 1
      return

    funcs[i]()
  else
    console.log "eru"
    phantom.exit()
  return

recursive 0
###



###
# Headless ブラウザの生成
page = require("webpage").create()

# URL を開く
page.open "http://www.google.co.jp", (status) ->
  
  # jQuery を使う
  page.includeJs "http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js", ->
    title = page.evaluate(->
      title = $("title").text()
      title
    )
    console.log title # Google
    phantom.exit()
###



###
page = require('webpage').create()

url = "https://www.google.co.jp/?gws_rd=ssl"
# url = 'http://google.co.jp'

page.open(url, (status)->
  if(status == 'success')
    page.render('google.png')
    title = page.evaluate( ->
      title = document.title
      return title
    )
    console.log title
  
  phantom.exit()
)
###


###
console.log "Loading a web page"
page = require("webpage").create()
url = "http://www.phantomjs.org/"

page.open url, (status) ->
  console.log "Page is loaded!"
  console.log status
  phantom.exit()
  return
###