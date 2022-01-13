<?php 

if( ! defined( 'ABSPATH' ) ) die( 'not allowed to access this page!' );

final class Get_Method_Config {
   
   private static function get_all() {
      $data = [];
      $data['html']  = \utility\Helper::read('html');
      $data['css']   = \utility\Helper::read('css');
      $data['storage'] = \utility\Helper::read('storage');
      \utility\Helper::printResponse(200, $data);
   }

   public static function router() {
      if( isset($_GET['all']) ) {
         self::get_all();
      }
      else {
         \utility\Helper::printResponse(400);
      }
      
   }
}