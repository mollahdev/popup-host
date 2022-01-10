<?php 
header('Access-Control-Allow-Origin: *');

$css = $_POST['css'];
$html = $_POST['html'];

$htmlfile = fopen("markup.txt", "w") or die("Unable to open file!");
fwrite($htmlfile , $html);
fclose($htmlfile);

$cssfile = fopen("style.txt", "w") or die("Unable to open file!");
fwrite($cssfile , $css);
fclose($cssfile);