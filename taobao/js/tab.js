$(function () {
// console.log($('#tab1 span'))
    $('#tab1 span').mouseover( function () {
        $(this).addClass('current1-hd').siblings().removeClass('current1-hd');
        var index = $(this).index();
        $('.tab1-ht div').eq(index).show().siblings().hide();
    });

    //tab2
    $('.tab2-hd .tab-icon').mouseover(function () {
        $(this).css('borderBottom', '').siblings('.tab-icon').css('borderBottom', '1px solid #ff4400');
        $(this).siblings('.tab-icon-l').css('borderLeft','1px solid #ff4400').siblings('.tab-icon-r').css(
            'borderRight', '1px solid #ff4400');
        $('.tab2-ht').css({'border': '1px solid #ff4400', 'borderTop': 'none'});

    });
    $('.tab2-hd .tab-icon').mouseout(function () {
        $(this).siblings('.tab-icon').css('borderBottom', '');
        $(this).siblings('.tab-icon-l').css('borderLeft','').siblings('.tab-icon-r').css(
            'borderRight', '');
        $('.tab2-ht').css({'border': '', 'borderTop': 'none'});
    })



    // 侧边栏aside
    //goback
    var lineTop = $('#line').offset().top;
    var asideTop = $('#aside').offset().top;
    var proTop = $('.prduct').offset().top;
    var mg = 20;
    // var storeTop = $('.store-live').offset().top;
    // var lifeTop = $('.life-auct').offset().top;
    // var chepTop = $('.cheap-com').offset().top;
    // // var hotTop = $('.hot-sale').offset().top;
    // var recomTop = $('.recom-love').offset().top;
    var flag = true;



    $(window).scroll(function () {
        //固定导航栏
        var navTop = $('.pg-content').offset().top;
        if ($(document).scrollTop() >= navTop) {
            $('.sear-box').addClass('current-search');
            $('.com-nav').hide();
        } else {
            $('.sear-box').removeClass('current-search');
            $('.com-nav').show();
        }


        if ($(document).scrollTop() >= lineTop) {
            // $('#aside').css({'position': 'fixed', 'top': '0px','right': '151px'});
            $('#aside').css('position', 'fixed').stop().animate({
                top: 0,
                right:  150,
            }, 0)
        } else {
            $('#aside').css({'position': 'absolute', 'top': '220px','right': '-60px'});
        }
        if ($(document).scrollTop() >= proTop) {
            $('#goback').show();
        } else {
            $('#goback').hide();
        }
        if (flag) {
            $('.com-top').each(function (i, ele) {
                var htop = $(ele).offset().top;
                if ($(document).scrollTop() >= htop) {
                    $('#aside .common-s').eq(i).addClass('current-li').siblings().removeClass('current-li');
                }
            });
        }


        // if ($(document).scrollTop() < navTop) {
        //     $('.sear-box').removeClass('current-search');
        //     $('.com-nav').show();
        // }
    });
    var index = 0;
    $('#aside .common-s').click(function () {
        flag = false;
        index = $(this).index();
        // console.log($(this).index())
        var currentTop = $('.com-top').eq($(this).index()).offset().top;
        $("body, html").stop().animate({
            scrollTop: currentTop + mg
        }, function () {
            flag = true;
        });
        $(this).addClass('current-li').siblings().removeClass('current-li');
    });
    $('#aside li').mouseenter(function () {
        $(this).addClass('current-li').siblings().removeClass('current-li');
    });
    $('#aside li').mouseleave(function () {
        $('#aside li').eq(index).addClass('current-li').siblings().removeClass('current-li');
    });
    $('#goback').click(function () {
        $("body, html").stop().animate({
            scrollTop: 0
        }, 500);
    });
    //关闭二维码
    $('.erweima .close').click(function () {
        $('.ewm-box').hide();
    })

})