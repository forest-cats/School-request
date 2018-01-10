











    // ナブメニュー文字変換
    $(function() {
        $('.navbar-order a, .main-order a').hover(function() {
            $(this).text('洋服のオーダーメイド');
        }, function() {
            $(this).text('Order');
        });
        $('.navbar-remake a, .main-remake a').hover(function() {
            $(this).text('洋服・衣装のリメイク');
        }, function() {
            $(this).text('Remake');
        });
        $('.navbar-coordination a, .main-coordination a').hover(function() {
            $(this).text('衣装のコーディネイト');
        }, function() {
            $(this).text('Coordination');
        });
        $('.navbar-story a, .main-story a').hover(function() {
            $(this).text('Mijose物語');
        }, function() {
            $(this).text('Mijose Story');
        });
        $('.navbar-profile a, .main-profile a').hover(function() {
            $(this).text('プロフィール');
        }, function() {
            $(this).text('Profile');
        });

        $('.navbar-mail a, .main-mail a').hover(function() {
            $(this).text('メール');
        }, function() {
            $(this).text('Mail');
        });
    });


