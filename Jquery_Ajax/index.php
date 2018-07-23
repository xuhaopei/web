<?php
/**
 * @Author: anchen
 * @Date:   2018-07-23 16:28:06
 * @Last Modified by:   anchen
 * @Last Modified time: 2018-07-23 16:31:54
 */
if(!empty($_GET['username'])&&!empty($_GET['content'])){
     $username=$_GET['username'];
     $content=$_GET['content'];
     $dataArray = array("username"=>$username,"content"=>$content);
     $jsonStr=json_decode($dataArray);
     echo $jsonStr;
}
?>