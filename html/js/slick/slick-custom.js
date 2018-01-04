// オーダーメイド
$(function() {
     $('.slick-order').slick({
          infinite: true, //無限スクロール
          slidesToShow: 1,//スライドが見える数
          slidesToScroll: 1,//スライドのスクロール数
          arrows: false,
          fade: true,
          asNavFor: '.slick-order-nav'
     });
     $('.slick-order-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slick-order',
          focusOnSelect: true,
     });
});
// リメイク
$(function() {
     $('.slick-remake').slick({
          infinite: true, //無限スクロール
          slidesToShow: 1,//スライドが見える数
          slidesToScroll: 1,//スライドのスクロール数
          arrows: false,
          fade: true,
          asNavFor: '.slick-remake-nav'
     });
     $('.slick-remake-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slick-remake',
          focusOnSelect: true,
     });
});
// コーディネイト
$(function() {
     $('.slick-coordination').slick({
          infinite: true, //無限スクロール
          slidesToShow: 1,//スライドが見える数
          slidesToScroll: 1,//スライドのスクロール数
          arrows: false,
          fade: true,
          asNavFor: '.slick-coordination-nav'
     });
     $('.slick-coordination-nav').slick({
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          asNavFor: '.slick-coordination',
          focusOnSelect: true,
     });
});