<?php
$categories = array(
        'home' => '首页',
    'australia' => '全澳',
    'sydney' => '悉尼',
    'melbourne' => '墨尔本',
    'brisbane' => '布里斯班',
    'video' => '视频',
    'finance' => '金融',
    'realestate' => '地产',
    'national' => '国际',
    'china' => '中国',
    'hongkong' => '港澳台',
    'entertainment' => '娱乐',
    'sport' => '体育',
    'fashion' => '时尚',
    'column' => '专栏',
    'event' => '活动',
    'fresh' => '新鲜事',
    'travel' => '旅游',
    'food' => '美食',
    'abroad' => '留学',
    'migration' => '移民',
    'health' => '健康'
);


$pathname = $_SERVER["REQUEST_URI"];
$path_array = array_map('strtolower', preg_split('/(\/|\\\)/', $pathname));
$active_category = 'home';
//print_r($path_array);
foreach($categories as $key => $value){

    if(in_array($key, $path_array)){
        $active_category = $key;
        break;
    }
}
echo '<script> console.log("active_cat:'.$active_category.'") </script>';
?>

<?php include 'header.php' ?>

<header>
    <?php include 'parts/menu.php'; ?>
</header>
<div class="main-layer">
<!-- scroll menu   -->


    <div class="page-group">
        <!-- 单个page ,第一个.page默认被展示-->
        <?php
            foreach($categories as $key => $value){
                ?>
                <div id="<?php echo $key; ?>" class="page <?php echo $key == $active_category? 'page-current' : ''; ?>">
                    <?php
                    if ($key == 'home'){
                        include dirname(__FILE__).'/parts/home-page.php';
                    }else{
                        include dirname(__FILE__).'/parts/category-page.php';
                    }
                    ?>
                </div>
                <?php
            }
        ?>
    </div>

    <!-- popup, panel 等放在这里 -->
    <div class="popup popup-content">
        <?php include dirname(__FILE__) . '/parts/post-popup.php'; ?>
    </div>

</div>
<?php include 'footer.php' ?>
