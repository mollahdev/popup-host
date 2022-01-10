<?php 
header('Access-Control-Allow-Origin: *');
$file = $_GET['file'];
$myfile = fopen($file, "r") or die("Unable to open file!");
echo fread($myfile,filesize($file));
fclose($myfile);
