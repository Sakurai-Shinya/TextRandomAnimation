# TextRandomAnimation.js

created by Shinya Sakurai (Twitter:@sakurai_sinya)

## 概要

これはHTMLで記述した特定の文字をランダムな文字列アニメーションを表示しながら徐々に表示していくJavaScriptです。

![サンプル画像](./img/sample.gif)

## 注意点

作者はJavaScriptを完全に理解していないので無駄なコードやバグがあるかもしれません。

必ずテストを行って下さい。

## 使い方

### JavaScriptの各種設定

jsファイルを開き、ランダムな文字列に使われる文字、アニメーションで表示するクラス名、アニメーションの速度を指定します。

ほとんどの場合デフォルトの状態で大丈夫でしょう。

### HTML側でJavaScriptファイルを読み込む

HTMLの&lt;head&gt;ブロック内に以下のようにasyncを付けてjsファイルを読み込むよう記載します。

```
<script src="text-random-animation.js" async></script>
```

もし&lt;body&gt;ブロックの一番下でも大丈夫な場合、asyncは付ける必要は無いでしょう。

### アニメーションを行う文字列を指定する

JavaScriptのanimationClassName（デフォルトの状態ならanimation-text）で指定したクラス名をアニメーションしたい要素に指定していきます。

```
<p>この文字はアニメーションされません<span class="animation-text">この文字はアニメーションで表示されます</span>この文字はアニメーションされません</p>
```

## 履歴

2020-08-23 (JST) version 1.0 初期バージョン公開。