requirejs.config({
    paths: {
        'jquery': '/lib/jquery-3.4.1.min'
    }
});

define(["jquery", "./modules/head"], function($, innerHead) {
    innerHead()
})

var now = -1
var time = setInterval(function() {
    if (now == $('button').length - 1) {
        now = 0;
    } else {
        now++;
    }
    $('button').eq(now).attr('class', 'active').siblings().attr('class', '')
    $('.banner-img').animate({ left: -1280 * now })
}, 3000)

// $('button').mouseover(function() {
//     $(this).attr('class', 'active').siblings().attr('class', '')
//     $('.banner-img').animate({ left: -1280 * $(this).index() }, 100)
//     now = $(this).index()
// })