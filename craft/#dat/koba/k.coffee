$ ->
  $('#execute').click ->
    access_key = $('#access_key').val()
    secret_key = $('#secret_key').val()
    
    if access_key != '' && secret_key != ''
      $.ajax
        type: 'GET'
        url: ''
        data:
          access_key: $('#access_key').val()
          secret_key: $('#secret_key').val()
        dataType: 'jsonp'
        jsonp: 'callback'
        jsonpCallback: 'callback'
      .done (data)->
        status = data.status
        # OK
        if status == 200
          val = "http://XXXXXXXXXX/?token_key=" + (data.result.token)
          $('#name').html("URL")
          $('#warning').html("<p>参照URLを発行しました</p>" + "<p>※URLは再発行できません※</p>")
          $('#error').html("<a href='" + val + "'>" + val + "</a>")
          $('#execute').attr("disabled", "true")
        else
          $('#name').html("入力エラー")
          $('#error').html("アクセスキーまたはシークレットキーが間違っています。もう一度入力してください")
      .fail (data)->
        alert(val.message)
    else
      $('#name').html("入力エラー")
      $('#error').html("アクセスキー、シークレットキーを入力してください")


