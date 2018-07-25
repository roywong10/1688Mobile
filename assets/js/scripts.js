var ajax_in_progress = false;
var theme_dark = false;
var default_font_size = 14 * ($(window ).width() / 320);
var small_font_size = default_font_size * 0.85;
var large_font_size = default_font_size * 1.15;

$('html,body, .font-size-option.mid').css('font-size', default_font_size + 'px');
$('.font-size-option.small').css('font-size', small_font_size + 'px');
$('.font-size-option.large').css('font-size', large_font_size + 'px');



console.log($.device);

// window.location.href.split('#')[0];

removeHash();

$(document).on('opened', '.popup-content', function () {
    var ele = $(this).find('.related-posts');
    addItems(ele, 3, 1000);
} );

$(document).on('click','.open-popup-options', function () {
    var ele = $(".post-options");
    if(ele.hasClass("no-display")){
        ele.removeClass("no-display");
        ele.animate({right: 0}, 300, 'ease-in-out');
    }else{
        ele.animate({right: '-100%'}, 300, 'ease-in-out');
        setTimeout(function () {
            ele.addClass("no-display");
        },301);
    }
});

$(document).on('click','.post-options-background', function () {
    var ele = $(".post-options");
    ele.animate({right: '-100%'}, 300, 'ease-in-out');
    setTimeout(function () {
        ele.addClass("no-display");
    },301);
});



//
// $(document).on('click','.close-popup-options', function () {
//     $.closeModal('.popup-options');
// });

$(document).on('click', '.font-size-option', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var size = $(this).css('font-size');
    change_global_font_size(size);
});

// this function must be defined in the global scope
window.toggle_theme = function() {
    var obj = $('.theme input[type=checkbox]');
    setTimeout(function () {
        if($(obj).prop("checked") === true){
            $('body').addClass('theme-dark');
        }else{
            $('body').removeClass('theme-dark');
        }
    },100);
};

window.picFadeIn = function(obj) {
    $(obj).animate({opacity: 1},500, 'ease-in');
};

function removeHash () {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}


function change_global_font_size(size) {
    $('html,body').css('font-size', size);
}

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


$(document).on("click", ".post-comment-input", function () {
    $(".post-textarea").removeClass('no-display');
    $(".post-comment-textarea").focus();
});

$(document).on("click", ".post-textarea .cancel", function () {
    $(".post-textarea").addClass('no-display');
});


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

    $(document).on('click','.open-content-popup', function () {
        $.popup('.popup-content');
    });
});

$(document).on('ajaxStart', function(){
    ajax_in_progress = true;
});

$(document).on('ajaxStop', function(){
    ajax_in_progress = false;
});

function addItems(ele,number, lastId) {
    // 生成新条目的HTML
    var baseUrl = document.location.origin;
    $.ajax({
        async : false,
        type: 'GET',
        url: baseUrl+'/AJAX/get-data.php?' + 'id=' + lastId + '&num=' + number + '&rid=' + Math.random(),
        // type of data we are expecting in return:
        dataType: 'json',
        timeout: 3000,
        success: function(data){
            var url = '';
            var html = '';
            for (var i = 0; i < data.length; i++) {
                url =  baseUrl + '/AJAX/card.php?' + 'id=' + data[i]['id'] ;
                url = url + '&type=1';
                url = url + '&title=' + data[i]['title'];
                url = url + '&origin=' + data[i]['origin'];
                url = url + '&date=' + data[i]['date'];
                url = url + '&views=' + data[i]['views'];
                url = url + '&author=' + data[i]['author'];
                url = url + '&rid=' + Math.random();
                $.ajax({
                    async : false,
                    type: 'GET',
                    url: url,
                    timeout: 300,
                    success: function(data2){
                        html += data2;
                    },
                    error: function(xhr, type){
                        console.log('Ajax error!');
                    }
                });
            }
            // 添加新条目
            ele.append(html);
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
    var ele = $(this).find('.infinite-scroll-bottom .list-container');
    if($(this).find('.list-container .card').length == 0){
        addItems(ele,itemsPerLoad, 0);
    }
    var lastIndex = $(this).find('.list-container .card').length;
    var lastId = parseInt($(this).find('.list-container>.card:nth-last-of-type(1)').attr('title').split('-')[1]);
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
        lastId = parseInt($(this).find('.list-container>.card:nth-last-of-type(1)').attr('title').split('-')[1]);
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
            addItems(ele, itemsPerLoad, lastId);
            $.refreshScroller();
        }.bind(that), 10);

    });
});