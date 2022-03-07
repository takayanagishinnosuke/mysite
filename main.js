// luxyライブラリの初期化
luxy.init();
// if(matchMedia('(min-width: 768px)').matches){
//   luxy.init();
//   } 
// title-h1の取得
const titleH1 = document.getElementById('title-h1')//h1のIDを取得
// const scrollValue = document.scrollingElement.scrollTop;//スクロール量をpxで取得できるやつ
const scrollDown = document.getElementById('scroll-down')//スクロールのclassを取得

window.addEventListener('scroll',()=>{
  scroll_position = window.pageYOffset;//縦のスクロール位置を取得するやつ
  // console.log(scroll_position);
  if (scroll_position >=300){//もし画面座標がlineより小さくなったら、cssへ要素を追加
    titleH1.style.animation = 'blure 3s ease-in-out forwards';
  }
  else {//300以下になったら戻す
    titleH1.style.animation = 'blur 8s ease-in-out forwards';
  }
})

//スクロール位置によってscrolldwunを消したり戻したりする処理
window.addEventListener('scroll',()=>{
  scroll_position = window.pageYOffset;
  console.log(scroll_position);
  if(scroll_position >= 5300){
    scrollDown.style.display = 'none';
  }
  else{
    scrollDown.style.display = 'inline';
  }
})
