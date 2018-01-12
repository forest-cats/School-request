$(function() {
    $('.custom-slider').slick({
        infinite: true, //無限スクロール
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true, //無限スクロール
        slidesToShow: 1, //スライドが見える数
        slidesToScroll: 1, //スライドのスクロール数
        fade: true, //切り替え時のフェードイン設定
    });
});

// $(function() {
//      $('.custom-slider').slick({
//           infinite: true, //無限スクロール
//           slidesToShow: 1, //スライドが見える数
//           slidesToScroll: 1, //スライドのスクロール数
//           arrows: false,
//           fade: true, //切り替え時のフェードイン設定
//           asNavFor: '.slick-nav',
//      });
//      $('.custom-slider').slick({
//           infinite: true,
//           slidesToShow: 4,
//           slidesToScroll: 1,
//           asNavFor: '.slick-box',
//           focusOnSelect: true,
//           autoplay: true, //自動再生
//           pauseOnHover: true, //自動再生時スライドエリアにマウスオンで一時停止
//      });
// });