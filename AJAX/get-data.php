<?php
/**
 * Created by PhpStorm.
 * User: wangr
 * Date: 2018/7/19
 * Time: 17:20
 */


$a = array();
for($i = 1; $i <=20; $i++ ){
    $a[] = (object) array('title' => 'title'.$i, 'img' => 'img'.$i, 'text' => 'text'.$i);
}


$json = json_encode($a);
echo $json;
