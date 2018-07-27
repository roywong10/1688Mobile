<?php
/**
 * Created by PhpStorm.
 * User: wangr
 * Date: 2018/7/24
 * Time: 13:33
 */
?>


<?php
if(!isset($_GET['type'])){
    exit();
}
$type = $_GET['type'];

if($type == '1' && isset($_GET['id']) and isset($_GET['type']) and isset($_GET['title']) and isset($_GET['origin']) and isset($_GET['date']) and isset($_GET['views'])) {
    ?>
    <div class="card costume-card-1" title="post-<?php echo htmlspecialchars($_GET['id']); ?>">
        <div class="card-content open-content-popup">
            <div class="list-block media-list">
                <ul>
                    <li class="item-content">
                        <div class="item-media">
                            <img onload="picFadeIn(this)" style="opacity: 0"
                                src="https://source.unsplash.com/random/<?php echo rand(); ?>" width="400" height="300">
                        </div>
                        <div class="item-inner">
                            <div class="item-title-row">
                                <div class="item-title"><?php echo htmlspecialchars($_GET['title']); ?></div>
                            </div>
                            <div class="item-subcontent">
                                <span class="item-origin pull-left"><?php echo htmlspecialchars($_GET['origin']); ?></span>
                                <span class="item-date pull-left"><?php echo htmlspecialchars($_GET['date']); ?></span>

<!--                                <span class="item-views pull-right">--><?php //echo htmlspecialchars($_GET['views']); ?><!--条评论</span>-->
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <?php
}

if($type == '2' && isset($_GET['id']) and isset($_GET['type']) and isset($_GET['title']) and isset($_GET['origin']) and isset($_GET['date']) and isset($_GET['views'])) {
    ?>
    <div class="card costume-card-1" title="post-<?php echo htmlspecialchars($_GET['id']); ?>">
        <div class="card-content open-content-popup">
            <div class="list-block media-list">
                <ul>
                    <li class="item-content">
                        <div class="item-inner">
                            <div class="item-title-row">
                                <div class="item-title"><?php echo htmlspecialchars($_GET['title']); ?></div>
                            </div>
                            <div class="item-subcontent">
                                <span class="item-origin pull-left"><?php echo htmlspecialchars($_GET['origin']); ?></span>
                                <span class="item-date pull-left"><?php echo htmlspecialchars($_GET['date']); ?></span>

                                <!--                                <span class="item-views pull-right">--><?php //echo htmlspecialchars($_GET['views']); ?><!--条评论</span>-->
                            </div>
                        </div>
                        <div class="item-media">
                            <img onload="picFadeIn(this)" style="opacity: 0"
                                 src="https://source.unsplash.com/random/<?php echo rand(); ?>" width="400" height="300">
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <?php
}

if($type == '3' && isset($_GET['id']) and isset($_GET['type']) and isset($_GET['title']) and isset($_GET['origin']) and isset($_GET['date']) and isset($_GET['views'])) {
    ?>
    <div class="card costume-card-1 costume-card-2 open-content-popup" title="post-<?php echo htmlspecialchars($_GET['id']); ?>">
        <div class="card-header-costume">
            <div class="item-title-row">
                <div class="item-title"><?php echo htmlspecialchars($_GET['title']); ?></div>
            </div>
        </div>
        <div class="card-content">
            <div class="list-block media-list">
                <ul>
                    <li class="item-content">
                        <div class="item-row">
                            <div class="item-media">
                                <img onload="picFadeIn(this)" style="opacity: 0"
                                     src="https://source.unsplash.com/random/<?php echo rand(); ?>" width="640" height="360">
                            </div>
                            <div class="item-media">
                                <img onload="picFadeIn(this)" style="opacity: 0"
                                     src="https://source.unsplash.com/random/<?php echo rand(); ?>" width="640" height="360">
                            </div>
                            <div class="item-media">
                                <img onload="picFadeIn(this)" style="opacity: 0"
                                     src="https://source.unsplash.com/random/<?php echo rand(); ?>" width="640" height="360">
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        </div>
        <div class="card-footer-costume">
            <div class="item-subcontent">
                <span class="item-origin pull-left"><?php echo htmlspecialchars($_GET['origin']); ?></span>
                <span class="item-date pull-left"><?php echo htmlspecialchars($_GET['date']); ?></span>
            </div>
        </div>
    </div>
    <?php
}