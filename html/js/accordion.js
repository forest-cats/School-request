// アコーディオン(メイン&めーる)
$(function() {
    $('#accordion dd').hide();
    $('#accordion dt').click(function() {
        $(this).next('dd').slideToggle();
        $(this).next('dd').siblings('dd').slideUp();
    });
});
$(function() {
    $('#mail-accordion dd').hide();
    $('#mail-accordion dt').click(function() {
        $('#mail-accordion dd').slideToggle();
    });
});


// アコーディオン(ナビゲーション用)
$(function() {
    $('#accordion dd').hide();
    $('.navbar-order').click(function() {
        $('#accordion .dd-order').slideToggle();
        $('#accordion .dd-order').siblings('dd').slideUp();
    });
});
$(function() {
    $('#accordion dd').hide();
    $('.navbar-remake').click(function() {
        $('#accordion .dd-remake').slideToggle();
        $('#accordion .dd-remake').siblings('dd').slideUp();
    });
});
$(function() {
    $('#accordion dd').hide();
    $('.navbar-coordination').click(function() {
        $('#accordion .dd-coordination').slideToggle();
        $('#accordion .dd-coordination').siblings('dd').slideUp();
    });
});
$(function() {
    $('#accordion dd').hide();
    $('.navbar-story').click(function() {
        $('#accordion .dd-story').slideToggle();
        $('#accordion .dd-story').siblings('dd').slideUp();
    });
});
$(function() {
    $('#accordion dd').hide();
    $('.navbar-profile').click(function() {
        $('#accordion .dd-profile').slideToggle();
        $('#accordion .dd-profile').siblings('dd').slideUp();
    });
});

$(function() {
    $('#mail-accordion dd').hide();
    $('.navbar-mail').click(function() {
        $('#mail-accordion .dd-mail').slideToggle();
    });
});

// slick設定
$(function() {
     $('.custom-slider-top').slick({
          infinite: true, //無限スクロール
          slidesToShow: 1, //スライドが見える数
          slidesToScroll: 1, //スライドのスクロール数
          arrows: false,
          fade: true, //切り替え時のフェードイン設定
          asNavFor: '.custom-slider-nav',
     });

    $('.custom-slider-nav').slick({
        infinite: true, // 無限スクロールに
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true, //要素を中央寄せ
        variableWidth: true, // 縦方向へのスライド
        adaptiveHeight: true,
        centerPadding: '50px', //両サイドの見えている部分のサイズ
        autoplay: true, //自動再生
        autoplaySpeed: 5000, //自動で画像が切り替えられるまでの時間 1000 = 1秒
        pauseOnHover: true, // 自動再生時にスライドのエリアにマウスオンで一時停止するかどうか
        draggable: true, // ドラッグができるかどうか
        swipe: true, // タッチスワイプに対応するかどうか
        asNavFor: '.custom-slider-top',//スライダー本体のクラス名
        focusOnSelect: true,
    });
});
