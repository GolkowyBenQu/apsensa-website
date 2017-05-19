<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST');

$content = file_get_contents('content.json');
$content = json_decode($content);
$content = json_encode($content->projects);

//echo "<pre>";
//var_dump($content->projects);
echo ($content);
die;