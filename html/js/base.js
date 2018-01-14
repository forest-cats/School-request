// クリック時ページジャンプ

// $(function(){
//   $('a[href^="#"]').click(function(){
//     var speed = 500;
//     var href= $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $("html, body").animate({scrollTop:position}, speed, "swing");
//     return false;
//   });
// });

// 上に戻るボタン
// $(window).scroll(function(){
//  if ($(window).scrollTop() > 500){
//  $("#page-top").fadeIn();
//  }else{
//  $("#page-top").fadeOut();
//  }
// });
// $("#move-page-top").click(function(){
//  $("html,body").animate({scrollTop: 0}, 350);
// });