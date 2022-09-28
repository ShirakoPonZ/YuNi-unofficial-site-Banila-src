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

// ハンバーガーメニュー
$(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('open');

        if ($(this).hasClass('open')) {
            $('#minNavigation').css({ left: 0 });
        } else {
            // $('#minNavigation').css({ right: "-100vw" });
            $('#minNavigation').css({ left: "-100vw" });
        }
    });
});

$(function() {
    $('#closer').click(function() {
        // $('#minNavigation').css({ right: "-100vw" });
        $('#minNavigation').css({ left: "-100vw" });
        $('body').css({ overflow: "none" });
        $('#hamburger').removeClass('open');
    })
})

// $('head').append(
//     '<style>#wrap{display:none;}'
// );

// $(window).on("load", function() {
//     $('#wrap').delay(600).fadeIn("slow");
// });


// 簡易スライド
// 表示したい画像を配列に入れる
// const imageSrc = ["../img/origin.jpg", "../img/clear.png", "../img/autumn_cut.png", "../img/evolve_cut.png", "../img/eternal.png"];
// const imageAlt = ["origin", "clear", "autumn", "evolve", "eternal"];
// console.log(imageSrc);

// 初期値
// let num = 1;

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

$(function(){
    $('.slide').slick({
        accessibility: true,  // tabと矢印キーのナビゲーションを有効
        dots: true,  // 画像下のドット（ページ送り）を表示
        dotsClass: "customDots",
        draggable: true,  // ドラッグ可能
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 300,
        pauseOnHover: false,
        infinite: true, 
        swipe: true,
        centerPadding: '50px',
    });
});


// 各タイトルアンダーライン


