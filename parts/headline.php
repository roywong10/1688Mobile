
<?php
/**
 * Created by PhpStorm.
 * User: wangr
 * Date: 2018/6/12
 * Time: 17:28
 */?>
<style type="text/css">
    .infinite-scroll-preloader {
        margin-top:-20px;
    }
</style>
<!-- 添加 class infinite-scroll 和 data-distance  向下无限滚动可不加infinite-scroll-bottom类，这里加上是为了和下面的向上无限滚动区分-->
<div class="content infinite-scroll infinite-scroll-bottom" data-distance="300">
    <div class="list-block">
        <ul class="list-container">

        </ul>
    </div>
    <!-- 加载提示符 -->
    <div class="infinite-scroll-preloader">
        <div class="preloader"></div>
    </div>
</div>




