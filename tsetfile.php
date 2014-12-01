<?php include_once './libs/Strategic.php'; ?>
<?php
echo "test msg";
ini_set('display_errors', 'On');
ini_set('error_reporting', E_ALL);
$entity = "";
$strategic = new Strategic();
var_dump($strategic);
$entity = $strategic->getDataTable();
var_dump($entity);
echo json_encode($entity);
echo "hello world";
echo phpinfo();