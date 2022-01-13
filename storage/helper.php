<?php 
namespace utility;

if( ! defined( 'ABSPATH' ) ) die( 'not allowed to access this page!' );

trait Helper {

   /**
    *
    *
    *
    * write file
    * 
    */ 
    public static function write( $name, $data )  {
      $myfile = fopen( "./temp/". $name .".txt", "w");
      fwrite($myfile, $data);
      fclose($myfile);
    }
   
    /**
    *
    *
    *
    * read file
    * 
    */ 
    public static function read( $name )  {
      $read  = fopen( "./temp/". $name .".txt", "r");
      if( filesize("./temp/". $name .".txt") > 0 ) {
         $read = fread($read, filesize("./temp/". $name .".txt"));
      } else {
         $read = '';
      }
      return $read;
    }

   /**
    *
    *
    *
    * Generate UID for identifying unique widget
    * 
    */ 
   public static $_ent_his = 0;
   public static function createUid(){
      $read = fopen("./temp/ent-his-temp.txt", "r");
      $read = fread($read, filesize("./temp/ent-his-temp.txt"));

      self::$_ent_his = intval($read);
      self::$_ent_his++;
      
      $myfile = fopen( "./temp/ent-his-temp.txt", "w");
      fwrite($myfile, self::$_ent_his);
      fclose($myfile);
     
      return self::$_ent_his . rand(self::$_ent_his, 9999);
   }
   
   /**
    *
    *
    *
    * print response
    * 
    */ 
   public static function printResponse($code, $body = '') {
      $data = [];
      $data['code'] = $code; 
      $data['body'] = $body;

      switch( $code ) {
         case 200: $data['message']  = 'success'; break;
         case 202: $data['message']  = 'accepted'; break;
         case 204: $data['message']  = 'no content'; break;
         case 400: $data['message']  = 'bad request'; break;
         case 401: $data['message']  = 'unauthorized'; break;
         case 403: $data['message']  = 'forbidden'; break;
         case 404: $data['message']  = 'not found'; break;
         case 405: $data['message']  = 'method not allowed'; break;
         case 406: $data['message']  = 'not accepted'; break;
         case 412: $data['message']  = 'request processing'; break;
         case 409: $data['message']  = 'conflict'; break;
         case 500: $data['message']  = 'internal server error'; break;
         default : $data['message']  = 'service unavailable'; 
      }

      echo json_encode( $data );
   }

   

}