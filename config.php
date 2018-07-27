<?php
/**
 * Created by PhpStorm.
 * User: wangr
 * Date: 2018/7/27
 * Time: 17:21
 */

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


define('PATH_NAME' , $_SERVER["REQUEST_URI"] );

define('WORKING_DIR', end(preg_split('/(\/|\\\)/', getcwd())));




