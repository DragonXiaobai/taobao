window.addEventListener('load', function () {
    //获得元素
    var focus = document.querySelector('.focus');
    var circle = document.querySelector('.circle');
    var icon_l = document.querySelector('.icon_l');
    var icon_r = document.querySelector('.icon_r');
    var ul = document.querySelector('.wiper-lun');
    var current = focus.querySelector('.current');

    //鼠标移进显示，移走则隐藏
    focus.addEventListener('mouseover', function () {
        icon_l.style.display = "block";
        icon_r.style.display = "block";
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseout', function () {
        icon_l.style.display = "none";
        icon_r.style.display = "none";
        timer = setInterval(function() {
            //手动调用点击事件
            icon_r.click();
        }, 2000);
    })
    //动态获得ol下的小li
    /*console.log(ul.children.length)*/
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        //给小li赋属性，目的是让图片与圆点绑定起来
        li.setAttribute('index', i);
        circle.appendChild(li);
        //获得图片的宽度
        var imgwidth = focus.offsetWidth;

        //排他思想，让ol下的小li点击时背景改变
        li.addEventListener('click', function () {
            for (var i = 0; i < circle.children.length; i++) {
                circle.children[i].className = '';
            }
            this.className = 'current';

            /*console.log(imgwidth);*/
            //得到绑定小li 的属性值,这里不能用li代替this，因为li代表的是全部li，而this代表当前被点击的li
            var index = this.getAttribute('index');
            //同步点击小li时再点击箭头的时间缝隙
            num = index;
            circles = index;

            animate(ul, - imgwidth * index);
        })
    }
    var newli = ul.children[0].cloneNode(true);
    ul.appendChild(newli);
    circle.children[0].className = 'current';
    var num = 0; //计算图片点击次数
    var circles = 0; //计算小圆圈的次数
    var flag = true; //气流阀 优化程序（锦上添花）
    //右边
    icon_r.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animate(ul, -imgwidth * num, function () {
                flag = true;
            });
            circles++; //与num同步
            if (circles == circle.children.length) {
                circles = 0;
            }
            circleChange();
        }

    })
    //左边
    icon_l.addEventListener('click', function () {
       if (flag) {
           flag = false;
           if (num == 0) {
               num = ul.children.length - 1;
               ul.style.left = -num * imgwidth + 'px';
           }
           num--;
           animate(ul, -imgwidth * num, function () {
               flag = true;
           });
           circles--; //与num同步
           if (circles < 0) {
               circles = circle.children.length - 1;
           }
           circleChange();
       }
    })
    function circleChange() {
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].className = '';
        }
        circle.children[circles].className = 'current';
    }
    var timer = setInterval(function() {
        //手动调用点击事件
        icon_r.click();
    }, 2000);
})