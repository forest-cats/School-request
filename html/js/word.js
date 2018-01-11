











    // ナブメニュー文字変換
    $(function() {
        $('.navbar-order a, .dt-order a').hover(function() {
            $(this).text('洋服のオーダーメイド');
        }, function() {
            $(this).text('Order');
        });
        $('.navbar-remake a, .dt-remake a').hover(function() {
            $(this).text('洋服・衣装のリメイク');
        }, function() {
            $(this).text('Remake');
        });
        $('.navbar-coordination a, .dt-coordination a').hover(function() {
            $(this).text('衣装のコーディネイト');
        }, function() {
            $(this).text('Coordination');
        });
        $('.navbar-story a, .dt-story a').hover(function() {
            $(this).text('Mijose物語');
        }, function() {
            $(this).text('Mijose Story');
        });
        $('.navbar-profile a, .dt-profile a').hover(function() {
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


