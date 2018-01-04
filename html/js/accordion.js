    // アコーディオン基本
    $(function() {
        $('#accordion dd').hide();
        $('#accordion dt').click(function() {
            $(this).next('dd').slideToggle();
            $(this).next('dd').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-order a').click(function() {
            $('#accordion .main-order-dd').slideToggle();
            $('#accordion .main-order-dd').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-remake a').click(function() {
            $('#accordion .main-remake-dd').slideToggle();
            $('#accordion .main-remake-dd').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-coordination a').click(function() {
            $('#accordion .main-coordination-dd').slideToggle();
            $('#accordion .main-coordination-dd').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-story a').click(function() {
            $('#accordion .main-story-dd').slideToggle();
            $('#accordion .main-story-dd').siblings('dd').slideUp();
        });
    });
    $(function() {
        $('#accordion dd').hide();
        $('.navbar-profile a').click(function() {
            $('#accordion .main-profile-dd').slideToggle();
            $('#accordion .main-profile-dd').siblings('dd').slideUp();
        });
    });