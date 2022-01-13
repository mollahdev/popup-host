<?php 

if( ! defined( 'ABSPATH' ) ) die( 'not allowed to access this page!' );

final class Put_Method_Config {

   public static function router() {

      if( isset($_GET['services']) ) {
        
      }
      else {
         \utility\Helper::printResponse(400);
      }
      
   }
}