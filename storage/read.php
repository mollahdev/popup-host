<?php 
header('Access-Control-Allow-Origin: *');

$file = $_GET['file'];
if( !empty( $file ) ) {
    $myfile = fopen($file, "r") or die("Unable to open file!");
    
    if( filesize($file) > 0 ) {
        echo fread($myfile, filesize($file));
        fclose($myfile);
    }
    
}

