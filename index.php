<!DOCTYPE html>
<html>
<head>
    <?php include 'header.php' ?>
</head>
<body>

<header>
    <?php include 'parts/menu.php'; ?>
</header>
<div class=" main-layer">
<!-- scroll menu   -->


    <div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <div id="home" class="page page-current">
            <?php include dirname(__FILE__).'/parts/home-page.php'; ?>
        </div>

        <!-- 其他的单个page内联页（如果有） -->
        <div id="australia" class="page">
            <?php include dirname(__FILE__).'/parts/category-page.php'; ?>
        </div>
        <div id="sydney" class="page">
            <?php include dirname(__FILE__).'/parts/category-page.php'; ?>
        </div>
        <div id="melbourne" class="page">
            <?php include dirname(__FILE__).'/parts/category-page.php'; ?>
        </div>
        <div id="brisbane" class="page">
            <?php include dirname(__FILE__).'/parts/category-page.php'; ?>
        </div>
        <div id="video" class="page">
            <?php include dirname(__FILE__).'/parts/category-page.php'; ?>
        </div>
        <div id="finance" class="page">
            <?php include dirname(__FILE__).'/parts/category-page.php'; ?>
        </div>
    </div>

    <!-- popup, panel 等放在这里 -->
    <div class="popup popup-content" style="top: -2.2rem; background: #efeff4">
        <?php include dirname(__FILE__) . '/parts/post-popup.php'; ?>
    </div>

</div>
<?php include 'footer.php' ?>
