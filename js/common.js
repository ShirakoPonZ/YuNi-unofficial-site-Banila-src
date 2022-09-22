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
// const imageSrc = ["../img/origin.jpg", "../img/clear.png", "../img/autumn_cut.png", "../img/evolve_cut.png", "../img/eternal.png"];
// const imageAlt = ["origin", "clear", "autumn", "evolve", "eternal"];
// console.log(imageSrc);

// 初期値
// let num = 1;

// 配列内探索関数
// function slideTime(){
    // if(num === 4){
    //     num = 0;
    // }else{
    //     num++;
    // }

    // document.getElementById("slideImg").alt = imageAlt[num];
    // document.getElementById("slideImg").src = imageSrc[num];
// }

// 動かすためのタイマ
// setInterval(slideTime, 7000);


const Container = document.getElementById("SlideContainer");

// ハンバーガーメニュー
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

// スライドショー jQuery
$(function(){
    $('.slideShow').each(function(){
        var $slide = $(this).find('img'),
            slideContent = $slide.length,
            currentIndex = 0;
        
        $slide.eq(currentIndex).fadeIn();
        setInterval(showNextSlide, 3000);

        function showNextSlide(){
            var nextIndex = (currentIndex + 1) % slideContent;

            $slide.eq(currentIndex).fadeOut();
            $slide.eq(nextIndex).fadeIn();

            currentIndex = nextIndex;
        }
    });
});


// 立ち絵スライド profile

$(".slide-items").slick({
    autoplay: true,
    autoplaySpeed: 200,
    infinite: true,
});


// 各タイトルアンダーライン

$(function(){

});