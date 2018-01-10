
    // アコーディオン(メイン)
    $(function() {
        $('#accordion dd').hide();
        $('#accordion dt').click(function() {
            $(this).next('dd').slideToggle();
            $(this).next('dd').siblings('dd').slideUp();
        });
    });
    // アコーディオン(ナビゲーション用)
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-order a').click(function() {
            $('#accordion .dd-order').slideToggle();
            $('#accordion .dd-order').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-remake a').click(function() {
            $('#accordion .dd-remake').slideToggle();
            $('#accordion .dd-remake').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-coordination a').click(function() {
            $('#accordion .dd-coordination').slideToggle();
            $('#accordion .dd-coordination').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-story a').click(function() {
            $('#accordion .dd-story').slideToggle();
            $('#accordion .dd-story').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-profile a').click(function() {
            $('#accordion .dd-profile').slideToggle();
            $('#accordion .dd-profile').siblings('dd').slideUp();
        });
    });