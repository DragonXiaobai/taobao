window.addEventListener('load', function () {
    var mfocus = document.querySelector('.m-focus');
    var iconl = mfocus.querySelector('.icon-l-m');
    var iconr = mfocus.querySelector('.icon-r-m');
    var mwiper = mfocus.querySelector('#m-wiper');
    var ft = document.querySelector('#font-html');
    mfocus.addEventListener('mouseover', function () {
        iconl.style.display = 'block';
        iconr.style.display = 'block';
        clearInterval(timer1);
        timer1 = null;
    });
    mfocus.addEventListener('mouseout', function () {
        iconl.style.display = 'none';
        iconr.style.display = 'none';
        timer1 = setInterval(function() {
            //手动调用点击事件
            iconr.click();
        }, 2000);
    });

    for (var i = 0; i < mwiper.children.length; i++) {
        // var li1 = document.createElement('li');
        // li1.setAttribute('index', i);
        mwiper.children[i].setAttribute('index', i);
        var imgwidth1 = mfocus.offsetWidth;

    }
    var newli1 = mwiper.children[0].cloneNode(true);
    mwiper.appendChild(newli1);
    ft.innerHTML = 1;
    var num = 1;
    var flag = true;

    iconr.addEventListener('click', function () {
        if (flag) {
            flag = false;

            if (num == mwiper.children.length ) {
                num = 1;
                mwiper.style.left = 0;

            }

            animate(mwiper, -imgwidth1 * num , function () {
                flag = true;
            });
            num++;
            if (num === mwiper.children.length ) {
                ft.innerHTML = 1;
                return;
            }
            ft.innerHTML = num;



        }
    });
    iconl.addEventListener('click', function () {
        if (flag) {
            flag = false;
            if (num === 1) {
                num = mwiper.children.length;
                mwiper.style.left =  (1 - num) * imgwidth1 + 'px';

            }

            num--;
            animate(mwiper, -imgwidth1 *  (num - 1)  , function () {
                flag = true;
            });
            if (num === 1) {
                ft.innerHTML = num ;
                return;
            }
            ft.innerHTML = num;
        }
    });
    var timer1 = setInterval(function() {
        //手动调用点击事件
        iconr.click();
    }, 2000);

})