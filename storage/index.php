<?php 
header("Access-Control-Allow-Origin:*");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

define( 'ABSPATH', true );
define('__ROOT_DIR__', getcwd() );

include_once( __ROOT_DIR__ . '/helper.php' );
include_once( __ROOT_DIR__ . '/get-method-config.php' );
include_once( __ROOT_DIR__ . '/post-method-config.php' );

$method = $_SERVER['REQUEST_METHOD'];

switch( $method ) {
   
    case 'GET':
       Get_Method_Config::router();
    break;
 
    case 'POST':
       Post_Method_Config::router();
    break;
 
    default: 
    \utility\Helper::printResponse(405);
 
}