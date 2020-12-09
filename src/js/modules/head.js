define([
    'jquery'
], function($) {
    function innerHead() {
        // 最外层
        $('.false').mouseover(function() {
            //console.log($(this).children("div.nav-submenu"));
            $(this).children("div.nav-submenu").css({ "display": "block" })
        }).mouseout(function() {
            $(this).children("div.nav-submenu").css({ "display": "none" })
        });
        //系列
        // $('.submenu-tabs div').mouseover(function() {
        //     $('.submenu-tabs div').attr('id', '');
        //     $('.submenu-box ul').attr('id', '');
        //     $(this).attr('id', 'active');
        //     $('.submenu-box ul').eq($(this).index()).add('id', 'show');
        // });

    }
    return innerHead
});