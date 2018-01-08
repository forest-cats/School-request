// クリック時ページジャンプ

// 上に戻るボタン
$(window).scroll(function(){
 if ($(window).scrollTop() > 500){
 $("#page-top").fadeIn();
 }else{
 $("#page-top").fadeOut();
 }
});
$("#move-page-top").click(function(){
 $("html,body").animate({scrollTop: 0}, 350);
});