var ajax_in_progress = false;



function open_meun () {
    $(".scrollmenu .tab-button svg").animate({rotateZ: '45deg'}, 400, 'ease-out');
    $(".scrollmenu").animate({height: '100%'}, 300, 'ease-out');

    $(".scrollmenu>div").addClass('scrollmenu-sub');
}

function close_menu () {
    $(".scrollmenu .tab-button svg").animate({rotateZ: '0deg'}, 400, 'ease-out');
    $(".scrollmenu").animate({height: '2.2rem'}, 300, 'ease-out');

    $(".scrollmenu>div").removeClass('scrollmenu-sub');
}

function smoothScroll(el, to, duration) {
    if (duration < 0) {
        return;
    }
    var difference = to - el.scrollLeft();
    var perTick = difference / duration * 10;
    this.scrollToTimerCache = setTimeout(function() {
        if (!isNaN(parseInt(perTick, 10))) {
            el.scrollLeft(el.scrollLeft() + perTick);
            smoothScroll(el, to, duration - 10);
        }
    }.bind(this), 10);
}


$(document).on("click", ".scrollmenu .tab-button", function () {
    if(!$(this).hasClass("active")){
        open_meun();
        $(this).addClass("active");
    }else{
        close_menu();
        $(this).removeClass("active");
    }
});

$(document).on('click', '.menu-pills', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    if($(".scrollmenu .tab-button").hasClass('active')){
        close_menu();
    }
    var ele_offset_left = $(this).offset().left;
    var ele_left = ele_offset_left + $(".scrollmenu").scrollLeft();
    var target_x = ele_left - ($(window).width() / 2) + ($(this).width() / 2);
    target_x = (target_x >= 0)? target_x : 0;
    smoothScroll($(".scrollmenu"), target_x, 300);

});

$(document).on("pageInit", function(){

    $(document).on('click','.open-about', function () {
        $.popup('.popup-about');
    });
});

$(document).on('ajaxStart', function(){
    ajax_in_progress = true;
});

$(document).on('ajaxStop', function(){
    ajax_in_progress = false;
});

function addItems(ele,number, lastIndex) {
    // 生成新条目的HTML
    var baseUrl = document.location.origin;
    $.ajax({
        type: 'GET',
        url: baseUrl+'/AJAX/get-data.php',
        // type of data we are expecting in return:
        dataType: 'json',
        timeout: 300,
        success: function(data){
            console.log(data[0]['title']);
            var html = '';

            for (var i = 0; i < data.length; i++) {
                html += '<div class="card">' +
                    '            <div class="card-content">' +
                    '                <div class="list-block media-list">' +
                    '                    <ul>\n' +
                    '                        <li class="item-content">' +
                    '                            <div class="item-media">' +
                    '                                <img src="http://gqianniu.alicdn.com/bao/uploaded/i4//tfscom/i3/TB10LfcHFXXXXXKXpXXXXXXXXXX_!!0-item_pic.jpg_250x250q60.jpg" width="44">' +
                    '                            </div>' +
                    '                            <div class="item-inner">' +
                    '                                <div class="item-title-row">' +
                    '                                    <div class="item-title">标题' + data[i]['title'] + '</div>' +
                    '                                </div>\n' +
                    '                                <div class="item-subtitle">' + data[i]['text'] + '</div>' +
                    '                            </div>' +
                    '                        </li>' +
                    '                    </ul>' +
                    '                </div>' +
                    '            </div>' +
                    '            <div class="card-footer">' +
                    '                <span>2015/01/15</span>' +
                    '                <span>5 评论</span>' +
                    '            </div>' +
                    '        </div>'
                // html += '<li class="item-content"><div class="item-inner"><a href="#" class="open-about"><div class="item-title">Item ' + i + '</div></a></div></li>';
            }
            // 添加新条目
            ele.find('.infinite-scroll-bottom .list-container').append(html);
        },
        error: function(xhr, type){
            console.log('Ajax error!');
        }
    })

}

$("#home").on("pageInit", function () {
    var elem = document.querySelector('.img-carousel');
    var flkty = new Flickity( elem, {
        // options
        imagesLoaded: true,
        percentPosition: false,
        autoPlay: true,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
    });
})

$(".page-group>.page").on("pageInit", function () {
    //infinite scroll
    // 加载flag
    var loading = false;
    // 最多可加载的条目
    var maxItems = 200;
    // 每次加载添加多少条目
    var itemsPerLoad = 20;
    if($(this).find('.list-container .card').length == 0){
        addItems($(this),itemsPerLoad, 0);
    }
    var lastIndex = $(this).find('.list-container .card').length;
    //文档专用事件 updateContent

    var that = $(this);

    // 注册'infinite'事件处理函数
    $(this).find('.infinite-scroll-bottom').on('infinite', function() {

        // 如果正在加载，则退出
        if (loading) return;
        if (ajax_in_progress) return;
        // 设置flag
        loading = true;
        lastIndex = $(this).find('.list-container .card').length;
        // 模拟1s的加载过程
        setTimeout(function() {
            // 重置加载flag
            loading = false;

            if (lastIndex >= maxItems) {
                // 加载完毕，则注销无限加载事件，以防不必要的加载
                $.detachInfiniteScroll($(this).find('.infinite-scroll'));
                // 隐藏加载提示符
                $(this).find('.infinite-scroll-preloader').hide();
                return;
            }

            // 添加新条目
            addItems($(this), itemsPerLoad, lastIndex);
            // 更新最后加载的序号

            lastIndex = $(this).find('.list-container .card').length;
            // console.log(lastIndex);
            //容器发生改变,如果是js滚动，需要刷新滚动
            $.refreshScroller();
        }.bind(that), 100);

    });
});