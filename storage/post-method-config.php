<?php 

if( ! defined( 'ABSPATH' ) ) die( 'not allowed to access this page!' );

final class Post_Method_Config {
   /**
    *
    *
    * Save Markup
    */
    private static function save_content() {
      $html = $_POST['html'];
      $css  = $_POST['css'];
      $storage = $_POST['storage'];

      \utility\Helper::write('html', $html);
      \utility\Helper::write('css', $css);
      \utility\Helper::write('storage', $storage);
      \utility\Helper::printResponse(202);
      
    }

   /**
    *
    *
    * Route 
    */ 
   public static function router() {

      $action = $_POST['action'];

      if( isset($action) && $action === 'save' ) {
        self::save_content();
      }
      else {
         \utility\Helper::printResponse(400);
      }
      
   }
}