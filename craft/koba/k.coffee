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
          $('#warning').html("<p>�Q��URL�𔭍s���܂���</p>" + "<p>��URL�͍Ĕ��s�ł��܂���</p>")
          $('#error').html("<a href='" + val + "'>" + val + "</a>")
          $('#execute').attr("disabled", "true")
        else
          $('#name').html("���̓G���[")
          $('#error').html("�A�N�Z�X�L�[�܂��̓V�[�N���b�g�L�[���Ԉ���Ă��܂��B������x���͂��Ă�������")
      .fail (data)->
        alert(val.message)
    else
      $('#name').html("���̓G���[")
      $('#error').html("�A�N�Z�X�L�[�A�V�[�N���b�g�L�[����͂��Ă�������")


