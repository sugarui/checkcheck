<?php 
header("Access-Control-Allow-Origin:*");
//header("Content-Type: text/html; charset=UTF-8");

//$data_test = 'hi';
//echo $data_test;

$data = $_POST['dataname'];
//$data = iconv("euc-kr", "UTF-8", $data); //http://bomool.net/bbs/board.php?bo_table=bo0102&wr_id=10
echo $data;

?>