package <your_package_name>;

import android.app.Activity;
import android.app.AlertDialog;
import android.app.Dialog;
import android.content.DialogInterface;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.Window;
import android.webkit.WebChromeClient;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.LinearLayout;
import android.widget.Toast;

public class Main extends Activity
{
  final Activity activity = this;
  
  // WebView�錾 ���ꂪ�n�C�u���b�h�A�v���̗v
  WebView webview;
  
  public static final int END_CONFIRM_DIALOG = 0;
  
  @Override
  public void onCreate(Bundle savedInstanceState)
  {
    super.onCreate(savedInstanceState);
    
    // WebView�̐e�ɂȂ�ŏ�ʂ�widget
    LinearLayout layout = new LinearLayout(this);
    
    // �ŏ��ɊJ��URL
    // �������炩�̏����Ɋ�Â���URL�𓮓I�ɕς������Ȃ炱�̂ւ�ɏ���������
    String targetUrl = <your_URL>;
    
    // WebView ���
    webview = new WebView(this);
    
    // JavaScript ���I����
    webview.getSettings().setJavaScriptEnabled(true);
    
    // �v���O�C���iFlash�Ȃǁj���I����
    webview.getSettings().setPluginsEnabled(true);
    
    // �Y�[����L�������邩
    webview.getSettings().setSupportZoom(false);
    
    // �X�N���[���o�[���O���ɕ\������Ȃ��悤�ɂ���
    webview.setScrollBarStyle(WebView.SCROLLBARS_INSIDE_OVERLAY);
    
    // WebView �N���C�A���g�ݒ�B����ŉ�ʑJ�ڂ��A�v�����Ńn���h�������
    webview.setWebViewClient(new WebViewClient()
    {
      // WebView���G���[�ɒ��ʂ������̏���
      public void onReceivedError(WebView view, int errorCode, String description, String failingUrl)
      {
        // �Ƃ肠�����G���[�̐�����Toast�ŕ\��
        Toast.makeText(activity, "�G���[�����@�ڍׁF" + description, Toast.LENGTH_LONG).show();
      }
    });
    
    // �i���󋵕\���̂��߂�Progress bar��p��
    getWindow().requestFeature(Window.FEATURE_PROGRESS);
    
    // �i���󋵂��^�C�g���o�[�ɕ\��
    webview.setWebChromeClient(new WebChromeClient()
    {
      public void onProgressChanged(WebView view, int progress)
      {
        // WebChromeClient#onProgressChanged��progress��0����100�Ȃ̂ɑ΂��A
        // Activity#setProgress��0����10000�͈̔͂Ŏw�肷��̂�100�{����
        activity.setProgress(progress * 100);
      }
    });
    
    // �w�肵��URL��WebView�ɓǂݍ��܂���
    webview.loadUrl(targetUrl);
    
    // WebView��Layout�ɂ������`��
    layout.addView(webview);
    setContentView(layout);
  }
  
  // �߂�L�[�������ꂽ���̏���
  @Override
  public boolean onKeyDown(int keyCode, KeyEvent event)
  {
    // �߂��y�[�W�����邩�`�F�b�N
    if (keyCode == KeyEvent.KEYCODE_BACK && webview.canGoBack() == true)
    {
      //��������O�̃y�[�W�ɖ߂�
      webview.goBack();
      return true;
    }
    
    return super.onKeyDown(keyCode, event);
  }
  
  //�I���������ɂȂ鎞�Ɂc�c
  @Override
  public void finish()
  {
    // �m�F�_�C�A���O���o��
    showDialog(END_CONFIRM_DIALOG);
  }
  
  //�I������
  public void endApp()
  {
    super.finish();
  }
  
  //�I���m�F�_�C�A���O���o��
  @Override
  protected Dialog onCreateDialog(int id)
  {
    switch(id)
    {
      case END_CONFIRM_DIALOG:
        return new AlertDialog.Builder(this)
          .setTitle("�m�F")
          .setMessage("�I�����܂����H")
          // Yes�{�^���̐ݒ�
          .setPositiveButton("�͂�", new DialogInterface.OnClickListener()
          {
            // Yes�������ꂽ���̏���
            public void onClick(DialogInterface dialog, int whichButton)
            {
              // �I���������Ăяo��
              endApp();
            }
          })
          // No�{�^���̐ݒ�
          .setNegativeButton("������", new DialogInterface.OnClickListener()
          {
            // No�������ꂽ���̏����i�������Ȃ��j
            public void onClick(DialogInterface dialog, int whichButton) {}
          })
          .create();
    }
    
    return null;
  }
}