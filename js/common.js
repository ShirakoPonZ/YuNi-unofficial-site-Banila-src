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
            $('#wrap').css({ marginTop: "100px"});
		} else {
			$header.removeClass('sticky');
            $('#wrap').css({ marginTop: "0px"});
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
});


// ヘッダースライドショー jQuery
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
        autoplaySpeed: 4000,
        speed: 1000,
        pauseOnHover: false,
        infinite: true, 
        swipe: true,
        centerPadding: '50px',
    });
});

