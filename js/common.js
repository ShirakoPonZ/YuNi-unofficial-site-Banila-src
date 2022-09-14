// 簡易スライド
// 表示したい画像を配列に入れる
const imageSrc = ["../img/origin.jpg", "../img/clear.png", "../img/autumn_cut.png", "../img/evolve_cut.png", "../img/eternal.png"];
const imageAlt = ["origin", "clear", "autumn", "evolve", "eternal"];
// console.log(imageSrc);

// 初期値
let num = 1;

// 配列内探索関数
function slideTime(){
    if(num === 4){
        num = 0;
    }else{
        num++;
    }

    document.getElementById("slideImg").alt = imageAlt[num];
    document.getElementById("slideImg").src = imageSrc[num];
}

// 動かすためのタイマ
// setInterval(slideTime, 7000);

const Container = document.getElementById("SlideContainer");