<?php
header('content-type:text/html;charset="utf-8');
error_reporting(0);

//$_REQUEST 都可以获取

$username = $_GET['username'];
$age=$_GET['age'];
$username = $_POST['username'];
$age=$_POST['age'];

echo "你的名字:{$username},年龄:{$age}";
