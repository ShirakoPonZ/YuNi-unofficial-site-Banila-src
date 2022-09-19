// 追従ニュー
$(function(){
	// htmlファイルのcontentsクラスを指定
	$('#navContainer').each(function(){
		var $window = $(window),
			$header = $(this),
			headerOffsetTop = $header.offset().top;

	$window.on('scroll',function(){
		if($window.scrollTop() > headerOffsetTop){
			$header.addClass('sticky');
		} else {
			$header.removeClass('sticky');
		}
	});

	$window.trigger('scroll');

	});
});


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


$(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});


// スライドショー

// // swiper.js
//     const swiper = new Swiper(".mySwiper", {
//         spaceBetween: 5,
//         slidesPerView: 5
//     });

//     const swiper2 = new Swiper(".mySwiper2", {
//         // 自動再生
//         autoplay: {
//             delay: 2000,
//             stopOnLastSlide: true,
//             disableOnInteraction: true,
//         },

//         thumbs: {
//             swiper: swiper
//         },

        // // ループ設定
        // loop: true,

        // speed: 1000,

        // ナビゲーション設定
        // navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev"
        // }
    // });