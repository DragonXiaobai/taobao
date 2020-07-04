$(function () {
    $('.down-menu').hover(function () {
        $(this).find('.h-load').toggle();
    })

    //2种
    // $('.down-menu').mouseover(function () {
    //     $(this).children().find('ul').show();
    //
    // });
    // $('.down-menu').mouseout(function () {
    //     $(this).children().find('ul').hide();
    // })
    // $(".down-menu").hover(function() {
    //     $(this).find("ul").stop().toggle();
    // });
})
// window.addEventListener('load', function () {
//     var menus = document.querySelectorAll('.menu');
//     for (var i = 0; i < menus.length; i++) {
//         menus[i].onmouseover = function () {
//             this.children[1].style.display = 'block';
//         }
//         menus[i].onmouseout=function () {
//             this.children[1].style.display = 'none';
//         }
//     }
// })