
// defines
var baseUrl = document.location.origin;
var ajax_in_progress = false;
var theme_dark = false;
var default_font_size = 16;
var small_font_size = 14;
var large_font_size = 18;
var active_pill_width = 0;
var active_pill_left = 0;
var nav_indicator_width = 0 ;
var nav_indicator_left = 0 ;
var current_font_index = 2;
var current_translate_index = 1;
var current_theme_index = 1;
var current_page = 'home';
removeHash();




//使用简繁切换
var defaultEncoding = 2; //网站编写字体是否繁体，1-繁体，2-简体
var translateDelay = 0; //延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
var cookieDomain = "http://localhost:81/"; //Cookie地址, 一定要设定, 通常为你的网址
translateInitilization();

$(document).ready(function () {
    console.log($.device);
    default_font_size = 15 * ($(window ).width() / 320);
    default_font_size = default_font_size <= 20? default_font_size : 20;
    small_font_size = default_font_size * 0.85;
    large_font_size = default_font_size * 1.15;
    $('html,body, .font-size-option.mid').css('font-size', default_font_size + 'px');
    $('.font-size-option.small').css('font-size', small_font_size + 'px');
    $('.font-size-option.large').css('font-size', large_font_size + 'px');
});

$('.scrollmenu').on('ready',function () {

    // nav_indicator
    var nav_indicator = $('.nav-indicator');
    var active_pill = $('.menu-pills.active');
    active_pill_width = active_pill.width();
    active_pill_left = active_pill.offset().left + $(".scrollmenu").scrollLeft();
    nav_indicator_width = active_pill_width / 5;
    nav_indicator_left = active_pill_left + (active_pill_width / 2) - (nav_indicator_width / 2);
    nav_indicator.css({left : nav_indicator_left+'px', width : nav_indicator_width+'px'});

    var ele = $('.scrollmenu .menu-pills.active');
    var ele_offset_left = ele.offset().left;
    var ele_left = ele_offset_left + $(".scrollmenu").scrollLeft();
    var target_x = ele_left - ($(window).width() / 2) + (ele.width() / 2);
    target_x = (target_x >= 0)? target_x : 0;
    smoothScroll($(".scrollmenu"), target_x, 300);
});


$(document).on('click', '.translateLink', function () {
    current_translate_index = parseInt($(this).attr('target'));
   if($(this).attr('target') == '1'){
       targetEncoding = 1;
   }else{
       targetEncoding = 2;
   }
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    translatePage();
});


$(document).on('opened', '.popup-content', function () {
    var ele = $(this).find('.related-posts');
    addItems(ele, 3, 1000);
    $('.font-size-option').removeClass('active');
    $('.font-size-option[target="'+ current_font_index +'"]').addClass('active');
    $('.translateLink').removeClass('active');
    $('.translateLink[target="'+ current_translate_index +'"]').addClass('active');
});

$(document).on('closed', '.popup-content', function () {
    $('.font-size-option').removeClass('active');
    $('.font-size-option[target="'+ current_font_index +'"]').addClass('active');
    $('.translateLink').removeClass('active');
    $('.translateLink[target="'+ current_translate_index +'"]').addClass('active');
});

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

$(document).on('click', '.font-size-option', function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    var size = $(this).css('font-size');
    current_font_index = parseInt($(this).attr('target'));
    change_global_font_size(size);
});

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
    var nav_indicator = $('.nav-indicator');
    active_pill_width = $(this).width();
    active_pill_left = $(this).offset().left + $(".scrollmenu").scrollLeft();
    nav_indicator_width = active_pill_width / 5;
    nav_indicator_left = active_pill_left + (active_pill_width / 2) - (nav_indicator_width / 2);

    var ele_offset_left = $(this).offset().left;
    var ele_left = ele_offset_left + $(".scrollmenu").scrollLeft();
    var target_x = ele_left - ($(window).width() / 2) + ($(this).width() / 2);
    target_x = (target_x >= 0)? target_x : 0;

    smoothScroll($(".scrollmenu"), target_x, 300);
    nav_indicator.animate({left : nav_indicator_left+'px', width : nav_indicator_width+'px'}, 300, 'linear');

});

function mapping_url() {
    var pathname = window.location.pathname.split(/\/|\\/)[1];
    if($(pathname).hasClass('page')) {
        $(pathname).siblings().removeClass('page-current')
        $(pathname).addClass('page-current');
    }
}

$(document).on('ready',function () {

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

$(document).on("pageInit","#home", function () {
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
});


$(document).on("pageInit",".main-layer .page-group>.page", function () {
    //infinite scroll
    // 加载flag
    // console.log($(this).attr('id'));
    changeURL($(this));
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

// functions
function changeURL(pointer){
    var pathname = pointer.attr('id');
    window.history.pushState({},0,baseUrl+'/'+pathname);
}
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

// if("onhashchange" in window) {
//     window.onhashchange = function(){
//         alert("Hash changed!");
//     }
// }

function removeHash () {
    history.pushState("", document.title, window.location.pathname
        + window.location.search);
}


function change_global_font_size(size) {
    $('html,body').css('font-size', size);
}

function open_meun () {
    $(".menu-canvas").css('display','none');
    $(".home-options").removeClass('no-display');
    $(".scrollmenu .tab-button svg").animate({rotateZ: '45deg'}, 400, 'ease-out');
    $(".scrollmenu").animate({height: '100%'}, 300, 'ease-out');

    $(".scrollmenu>div").addClass('scrollmenu-sub');
}

function close_menu () {
    $(".home-options").addClass('no-display');
    $(".menu-canvas").css('display','unset');
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

function addItems(ele,number, lastId) {
    // 生成新条目的HTML

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
                url = url + '&type=' + parseInt(Math.random() * 3 +1);
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
