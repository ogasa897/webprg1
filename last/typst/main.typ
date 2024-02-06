#import "./template.typ" : report,  img
#show: report.with(
  title: "画像加工アプリ", 
  date: "2024年2月5日", 
  student-id: "K23024", 
  author: "小笠原悠太", 
  paper-size: "a4", 
)

= 目的
このアプリケーションは、画像を加工するWebアプリケーションである。
ユーザーが保持している画像をエフェクトや変形、色相変更などを用いて加工することを目的とする。


= 機能
このアプリケーションには、加工した画像の保存機能をはじめとして、エフェクト・変形・彩度変更・画質変更機能がある。
また、以下で紹介する機能は重ねがけすることができる。
対応している画像形式はbmp, gif, jpeg, png, tiffである。
各機能の画像は見やすさのためにアプリケーション画面ではなく、加工後保存した画像を表示する。

== 操作画面
操作方法は、まず左上のファイルを選択ボタンを押して、ローカルファイルから加工する画像を選択する。
次に、その下にあるボタンやバーをいじることで画像の加工ができる。
最後に、自分の好きなように加工ができたら右上の画像を保存するボタンを押すことで加工後の画像を保存できる。
また、加工中に思うようにならず、画像を元に戻したいときは上の元の画像に戻すボタンを押すことで画像を元の状態に戻せる。
画面の様子は図１に示す。

#img(image("./images/home.jpg", height: 200pt),  caption: "操作画面")

== エフェクト機能
エフェクトには,セピア・グレースケール・色反転・ぼかし・モザイクがある。
それぞれボタンを押すことで変化する。
変化の様子はそれぞれ図3〜7に示す。

#grid(
    columns: (1fr,  1fr),  gutter: 1em,  rows: 1, 
  img(image("./images/sample.jpg", height: 125pt),  caption: "元の画像"),
  img(image("./images/sepia.jpg", height: 125pt),  caption: "セピア"),
  img(image("./images/grey.jpg", height: 125pt),  caption: "グレースケール"),
  img(image("./images/invert.jpg", height: 125pt),  caption: "色反転"),
  img(image("./images/blur.jpg", height: 125pt),  caption: "ぼかし"),
  img(image("./images/mosaic.jpg", height: 125pt),  caption: "モザイク")
)

== 変形機能
変形機能には,上下反転・左右反転・90度回転がある。
それぞれボタンを押すことで変化する。
変化の様子はそれぞれ図9〜11に示す。

#grid(
    columns: (1fr,  1fr),  gutter: 1em,  rows: 1, 
  img(image("./images/sample.jpg", height: 125pt),  caption: "元の画像"),
  img(image("./images/flipTB.jpg", height: 125pt),  caption: "上下反転"),
  img(image("./images/flipLB.jpg", height: 125pt),  caption: "左右反転"),
  img(image("./images/rotate90.jpg", height: 125pt),  caption: "90度回転")
)

== 色相変更機能
色相変更機能では,明度変更・彩度変更・コントラスト変更ができる。
これらの機能はスライドバーを使って細かな調整ができる。スライドバーのはじめ真ん中の位置にある。
明度は、右に行くほど明るくなり、左に行くほど暗くなる。
彩度は、右に行くほど彩度が上がり、左に行くほど彩度が下がる。
コントラストは、右に行くほどコントラストが強くなり、左に行くほどコントラストが弱くなる。
変化の様子を図12〜17に示す。

#grid(
    columns: (1fr,  1fr),  gutter: 1em,  rows: 1, 
  img(image("./images/bright.jpg", height: 125pt),  caption: "明度：明るめ"),
  img(image("./images/darken.jpg", height: 125pt),  caption: "明度：暗め"),
  img(image("./images/saturate.jpg", height: 125pt),  caption: "彩度：強め"),
  img(image("./images/desaturate.jpg", height: 125pt),  caption: "彩度：弱め"),
  img(image("./images/contrast.jpg", height: 125pt),  caption: "コントラスト強め"),
  img(image("./images/decontrast.jpg", height: 125pt),  caption: "コントラスト弱め")
)

== 画質調整機能
画質調整機能では、画質を元の状態よりも粗くすることができる。
この機能はスライドバーを使って細かな調整ができる。スライドバーは初め右端にある。
変化の様子を図19に示す。

#grid(
    columns: (1fr,  1fr),  gutter: 1em,  rows: 1, 
  img(image("./images/sample.jpg", height: 125pt),  caption: "元の画像"),
  img(image("./images/quality.jpg", height: 125pt),  caption: "画質：粗め")
)

= まとめ
このアプリは画像を加工することを目的としている。
その目的を達成するために変化のわかりやすい機能は実装できた。
また、機能の種類別に列を変えて操作もしやすくなっている。

一方で、色相変更のスライドバーをずらす度に、変更後の状態が上書きではなく、追加される形になっているため毎回元の画像に戻して調整しなければいけなくなっている点が思ったようにいかなかった部分だ。

== 今後、改善・改良したい点
色相変更のスライドバー変更時に状態を上書きするように改善し、現在のchangeイベントからinputイベントに変えて色相の変化の様子をわかりやすくしたい。

その他には、画像を切り抜く機能を今回実装できていないので、それを実装したい。また、切り抜く機能も実装すると画面が見づらくなってくると思うため、今回用いていない、CSSを用いて画面を見やすくしたい。


= 付録
この章では、本アプリケーションの開発における特徴を述べる。


== ライブラリ
本アプリケーションでは、画像加工を行う上で画像処理ライブラリのJIMPを使用することで比較的短いコードでアプリケーションを実装した。
JIMPはNPMインストールをして使用することが多いようだが、今回はCDNを利用することで利用者がわざわざインストールをしなくて済むようにした。

== 画像描画部分
このアプリでは加工した様子がすぐにその画面で見られるようにしている。
そのため、すべての機能の関数の中に画像を描画するプログラムを書く必要があり、関数化することでコードの短縮化をした。
画像描画をする関数を図20に示す。

#img(image("./images/code.jpg", height: 150pt),  caption: "画像描画関数")
