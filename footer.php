<?php
/**
 * Created by PhpStorm.
 * User: wangr
 * Date: 2018/7/19
 * Time: 14:57
 */
?>

<script type='text/javascript' src='assets/js/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='assets/js/zepto.fx.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm-extend.min.js' charset='utf-8'></script>
<script src="http://hammerjs.github.io/dist/hammer.min.js"></script>
<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
<script type="text/javascript" src="assets/js/tw_cn.js"></script>
<script type="text/javascript" src="assets/js/scripts.js" charset='utf-8'></script>

//使用简繁切换
<script type="text/javascript">
    var defaultEncoding = 2; //网站编写字体是否繁体，1-繁体，2-简体
    var translateDelay = 0; //延迟时间,若不在前, 要设定延迟翻译时间, 如100表示100ms,默认为0
    var cookieDomain = "http://localhost:81/"; //Cookie地址, 一定要设定, 通常为你的网址
    var msgToTraditionalChinese = "繁體"; //此处可以更改为你想要显示的文字
    var msgToSimplifiedChinese = "简体"; //同上，但两处均不建议更改
    var translateButtonId = "translateLink"; //默认互换id
    translateInitilization();
</script>

<script>
$.init();
$.initInfiniteScroll('.infinite-scroll-bottom');
</script>

</body>
</html>