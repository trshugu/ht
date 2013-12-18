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
  
  // WebView宣言 これがハイブリッドアプリの要
  WebView webview;
  
  public static final int END_CONFIRM_DIALOG = 0;
  
  @Override
  public void onCreate(Bundle savedInstanceState)
  {
    super.onCreate(savedInstanceState);
    
    // WebViewの親になる最上位のwidget
    LinearLayout layout = new LinearLayout(this);
    
    // 最初に開くURL
    // もし何らかの条件に基づいてURLを動的に変えたいならこのへんに処理を書く
    String targetUrl = <your_URL>;
    
    // WebView 作る
    webview = new WebView(this);
    
    // JavaScript をオンに
    webview.getSettings().setJavaScriptEnabled(true);
    
    // プラグイン（Flashなど）をオンに
    webview.getSettings().setPluginsEnabled(true);
    
    // ズームを有効化するか
    webview.getSettings().setSupportZoom(false);
    
    // スクロールバーが外側に表示されないようにする
    webview.setScrollBarStyle(WebView.SCROLLBARS_INSIDE_OVERLAY);
    
    // WebView クライアント設定。これで画面遷移がアプリ内でハンドルされる
    webview.setWebViewClient(new WebViewClient()
    {
      // WebViewがエラーに直面した時の処理
      public void onReceivedError(WebView view, int errorCode, String description, String failingUrl)
      {
        // とりあえずエラーの説明をToastで表示
        Toast.makeText(activity, "エラー発生　詳細：" + description, Toast.LENGTH_LONG).show();
      }
    });
    
    // 進捗状況表示のためにProgress barを用意
    getWindow().requestFeature(Window.FEATURE_PROGRESS);
    
    // 進捗状況をタイトルバーに表示
    webview.setWebChromeClient(new WebChromeClient()
    {
      public void onProgressChanged(WebView view, int progress)
      {
        // WebChromeClient#onProgressChangedのprogressは0から100なのに対し、
        // Activity#setProgressは0から10000の範囲で指定するので100倍する
        activity.setProgress(progress * 100);
      }
    });
    
    // 指定したURLをWebViewに読み込ませる
    webview.loadUrl(targetUrl);
    
    // WebViewをLayoutにくっつけ描画
    layout.addView(webview);
    setContentView(layout);
  }
  
  // 戻るキーが押された時の処理
  @Override
  public boolean onKeyDown(int keyCode, KeyEvent event)
  {
    // 戻れるページがあるかチェック
    if (keyCode == KeyEvent.KEYCODE_BACK && webview.canGoBack() == true)
    {
      //あったら前のページに戻る
      webview.goBack();
      return true;
    }
    
    return super.onKeyDown(keyCode, event);
  }
  
  //終了しそうになる時に……
  @Override
  public void finish()
  {
    // 確認ダイアログを出す
    showDialog(END_CONFIRM_DIALOG);
  }
  
  //終了処理
  public void endApp()
  {
    super.finish();
  }
  
  //終了確認ダイアログを出す
  @Override
  protected Dialog onCreateDialog(int id)
  {
    switch(id)
    {
      case END_CONFIRM_DIALOG:
        return new AlertDialog.Builder(this)
          .setTitle("確認")
          .setMessage("終了しますか？")
          // Yesボタンの設定
          .setPositiveButton("はい", new DialogInterface.OnClickListener()
          {
            // Yesが押された時の処理
            public void onClick(DialogInterface dialog, int whichButton)
            {
              // 終了処理を呼び出す
              endApp();
            }
          })
          // Noボタンの設定
          .setNegativeButton("いいえ", new DialogInterface.OnClickListener()
          {
            // Noが押された時の処理（何もしない）
            public void onClick(DialogInterface dialog, int whichButton) {}
          })
          .create();
    }
    
    return null;
  }
}