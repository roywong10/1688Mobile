<?php
/**
 * Created by PhpStorm.
 * User: wangr
 * Date: 2018/7/2
 * Time: 11:29
 */?>

<!-- 添加 class infinite-scroll 和 data-distance  向下无限滚动可不加infinite-scroll-bottom类，这里加上是为了和下面的向上无限滚动区分-->
<div class="content infinite-scroll infinite-scroll-bottom" data-distance="300">
    <div class="content-block no-padding no-margin">
        <?php include dirname(__FILE__).'/carousel-banner.php'; ?>
    </div>
    <div class="list-block" style="margin-top: 0">
        <ul class="list-container">

        </ul>
    </div>
    <!-- 加载提示符 -->
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>
</div>
