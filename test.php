<?php include dirname(__FILE__).'/header.php'?>
<header class="bar bar-nav">
    <h1 class='title'>标签页</h1>
</header>
<div class="content">
    <div class="buttons-tab">
        <a href="#tab1" class="tab-link active button">全部</a>
        <a href="#tab2" class="tab-link button">待付款</a>
        <a href="#tab3" class="tab-link button">待发货</a>
    </div>
    <div class="content-block">
        <div class="tabs">
            <div id="tab1" class="tab active">
                <div class="content-block">
                    <p>This is tab 1 content</p>
                </div>
            </div>
            <div id="tab2" class="tab">
                <div class="content-block">
                    <p>This is tab 2 content</p>
                </div>
            </div>
            <div id="tab3" class="tab">
                <div class="content-block">
                    <p>This is tab 3 content</p>
                </div>
            </div>
        </div>
    </div>
</div>
<?php include dirname(__FILE__).'/footer.php'?>