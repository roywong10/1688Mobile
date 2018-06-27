<!DOCTYPE html>
<html>
<head>
    <?php include 'header.php' ?>
</head>
<body>
<div class="page-group">
    <div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div class="page page-current">

            <!-- Scroll Menu -->
            <?php include 'parts/menu.php'; ?>
           

            <!-- 工具栏 -->
<!--            --><?php //include 'parts/tabs.php'; ?>
            <!-- 这里是页面内容区 -->

            <div class="content">
                <div class="content-block">
                    <p><a href="#" class="open-about">Open About Popup </a></p>
                </div>
                <div class="content-block">
                    <?php include 'parts/headline.php'; ?>
                </div>

            </div>
        </div>

        <!-- 其他的单个page内联页（如果有） -->
        <div class="page">...</div>
    </div>

    <!-- popup, panel 等放在这里 -->
    <?php include 'parts/content-popup.php'; ?>
    <div class="panel-overlay">

    </div>
    <!-- Left Panel with Reveal effect -->
    <div class="panel panel-left panel-reveal">
        <div class="content-block">
            <p>这是一个侧栏</p>
            <p></p>
            <!-- Click on link with "close-panel" class will close panel -->
            <p><a href="#" class="close-panel">关闭</a></p>
        </div>
    </div>

</div>
<script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js' charset='utf-8'></script>

<script>

    $(document).on("pageInit", function(){

        $(document).on('click','.open-about', function () {
            $.popup('.popup-about');
        });
    });

    $(document).on("pageInit", function () {
        //infinite scroll
        // 加载flag
        var loading = false;
        // 最多可加载的条目
        var maxItems = 200;

        // 每次加载添加多少条目
        var itemsPerLoad = 20;

        function addItems(number, lastIndex) {
            // 生成新条目的HTML
            var html = '';
            for (var i = lastIndex + 1; i <= lastIndex + number; i++) {
                html += '<li class="item-content"><div class="item-inner"><a href="#" class="open-about"><div class="item-title">Item ' + i + '</div></a></div></li>';
            }
            // 添加新条目
            $('.infinite-scroll-bottom .list-container').append(html);
        }

        // 上次加载的序号


        var lastIndex = itemsPerLoad;
        //文档专用事件 updateContent
        addItems(itemsPerLoad, 0);

        // 注册'infinite'事件处理函数
        $('.infinite-scroll-bottom').on('infinite', function() {
            // 如果正在加载，则退出
            if (loading) return;

            // 设置flag
            loading = true;

            // 模拟1s的加载过程
            setTimeout(function() {
                // 重置加载flag
                loading = false;

                if (lastIndex >= maxItems) {
                    // 加载完毕，则注销无限加载事件，以防不必要的加载
                    $.detachInfiniteScroll($('.infinite-scroll'));
                    // 隐藏加载提示符
                    $('.infinite-scroll-preloader').hide();
                    return;
                }

                // 添加新条目
                addItems(itemsPerLoad, lastIndex);
                // 更新最后加载的序号
                lastIndex = $('.list-container li').length;
                //容器发生改变,如果是js滚动，需要刷新滚动
                $.refreshScroller();
            }, 300);
        });
    });

    $.init();
    $.initInfiniteScroll('.infinite-scroll-bottom');

</script>

</body>
</html>