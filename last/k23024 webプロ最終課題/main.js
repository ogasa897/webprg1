const imageInput = document.getElementById("image-input");
const imageCanvas = document.getElementById("image-canvas");
const ctx = imageCanvas.getContext("2d");
const imageBright = document.getElementById("brightness");
const imageSaturation = document.getElementById("saturation");
const imageContrast = document.getElementById("contrast");
const imageQuality = document.getElementById("quality");

let image;
let imageWidth;
let imageHeight;

let originalImg;
let originalWidth;
let originalHeight;

//ファイル読み込み
imageInput.addEventListener("change", function () {
  const file = this.files[0]; // 選択したファイルを取得する
  if (!file || !file.type.startsWith("image/")) return; //ファイルが画像でない場合

  // ファイルをjimpで読み込む
  Jimp.read(URL.createObjectURL(file))
    .then(function (img) {
      image = img; // 画像を変数に代入する
      originalImg = img.clone();
      // 画像の幅と高さを取得する
      imageWidth = image.bitmap.width;
      imageHeight = image.bitmap.height;
      //リセット用
      originalWidth = image.bitmap.width;
      originalHeight = image.bitmap.height;
      // canvasのサイズを画像に合わせる
      imageCanvas.width = imageWidth;
      imageCanvas.height = imageHeight;

      drawPicture(); //画像描画
    })
    .catch(function (err) {
      console.error(err);
    });
});

// canvasに画像を描画する関数
function drawPicture() {
  image.getBase64(Jimp.AUTO, function (err, data) {
    if (err) throw err;
    const imageElement = new Image();
    imageElement.src = data;
    imageElement.onload = function () {
      ctx.drawImage(imageElement, 0, 0, imageWidth, imageHeight);
    };
  });
}

//元の画像に戻す
function drawImage() {
  if (!originalImg) return;
  //画像を元の状態に戻す
  image = originalImg.clone();
  // 画像の幅と高さを戻す
  imageWidth = originalWidth;
  imageHeight = originalHeight;
  // canvasのサイズを画像に合わせて戻す
  imageCanvas.width = imageWidth;
  imageCanvas.height = imageHeight;
  drawPicture();
}

//画像の保存
function saveImage() {
  if (!image) return; //画像ない時
  const link = document.createElement("a"); //画像をダウンロードするためのaタグを作成する

  // 画像のデータURLを取得する
  image.getBase64(Jimp.AUTO, function (err, data) {
    if (err) throw err;
    link.href = data; //aタグのhref属性にデータURLを設定する
    link.download = "image.png"; //aタグのdownload属性にファイル名を設定する
    link.click(); //aタグをクリックする
  });
}

/*-----------エフェクト-----------*/
//セピア
function sepia(){
  if (!image) return; 
  image.sepia(); //画像をセピアにする
  drawPicture(); 
}
//グレースケール
function grey() {
  if (!image) return; 
  image.greyscale(); //画像をグレイスケールにする
  drawPicture(); 
}
//ネガポジ反転
function invert(){
  if (!image) return;
  image.invert(); //画像をネガポジ反転させる
  drawPicture(); 
}
//ぼかし
function gaussian() {
  if (!image) return;
  image.blur(6); //画像をぼかす
  drawPicture();
}
//モザイク
function mosaic() {
  if (!image) return;
  image.pixelate(20, 0, 0, imageWidth, imageHeight); //画像をぼかす
  drawPicture(); 
}

/*-----------変形----------*/
//上下反転
function flipTB(){
  if (!image) return;
  image.flip(false, true); //上下反転
  drawPicture();
}
//左右反転
function flipLR(){
  if (!image) return;
  image.flip(true, false); //左右反転
  drawPicture();
}
//90度回転
function rotate() {
  if (!image) return;
  image.rotate(90); // 画像を90度回転させる

  // 画像の幅と高さを更新する
  imageWidth = image.bitmap.width;
  imageHeight = image.bitmap.height;
  // canvasのサイズを画像に合わせる
  imageCanvas.width = imageWidth;
  imageCanvas.height = imageHeight;

  drawPicture();
}

/*----------バーで値が変化するもの-------*/
//明度
imageBright.addEventListener("change", function(){
    //明度変更
    if(imageBright.value >= 0){
        image.color([{ apply: "brighten", params: [imageBright.value] }]);
    }else if(imageBright.value < 0){
        image.color([{ apply: "darken", params: [imageBright.value * (-1)] }]);
    }
    drawPicture();
});

//彩度
imageSaturation.addEventListener("change", function() {
  //彩度変更
  if (imageSaturation.value >= 0) {
    image.color([{ apply: "saturate", params: [imageSaturation.value] }]);
  } else if (imageSaturation.value < 0) {
    image.color([
      { apply: "desaturate", params: [imageSaturation.value * -1] },
    ]);
  }
  drawPicture();
});

//コントラスト
imageContrast.addEventListener("change", function() {
  //コントラスト変更
  image.contrast(imageContrast.value / 10);
  drawPicture();
});

//画質
imageQuality.addEventListener("change", function() {
    //画質変更
    image.quality(parseInt(imageQuality.value));
    drawPicture();
});