<?php
/**
 * Created by PhpStorm.
 * User: wangr
 * Date: 2018/7/19
 * Time: 17:20
 */

if(!isset($_GET['id']) or !isset($_GET['num'])){
    exit();
}
$startId = $_GET['id'] +1;
$num = $_GET['num'];
$endId = $startId + $num;

$a = array();
for($i = $startId; $i < $endId ; $i++ ){
    $a[] = (object) array(
        'id' => $i,
        'title' => '这是一个标题这是一个标题这是一个标题这是一个标题'.$i,
        'img' => '这是一个这是一个这是一个这是一个img'.$i,
        'text' => '这是一个text这是一个text这是一个text这是一个text'.$i,
        'origin' => '1688新闻网'.$i,
        'author' => 'author'.$i,
        'views' => ''.$i,
        'date' => $i.'小时前');
}


$json = json_encode($a);
echo $json;
