<?php

include 'config.php';

$pathname = PATH_NAME;
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
