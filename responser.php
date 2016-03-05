<?php 
header("Access-Control-Allow-Origin:*");
//header("Content-Type: text/html; charset=UTF-8");

//테스트 값
	//$data_test = 'hi';
	//echo $data_test;

//실제로 받아온 값
$data = $_POST['dataname'];


//컨버팅 함수 
//그러나 utf-8로 받아오는 것이 목적이므로 사실 컨버팅이 필요하지 않다 
	//$data = iconv("euc-kr", "UTF-8", $data); //http://bomool.net/bbs/board.php?bo_table=bo0102&wr_id=10


//받아온 값을 확인하기
	echo '인코딩을 디텍팅한 값은['.mb_detect_encoding($data).']이다 < 이거 결과가 무지 미심쩍음';

//받은 데이터를 화면에 표시
echo $data;

?>

<!DOCTYPE html>
<html>
<head>
  <title>HTML - 수업소개</title>
  <meta charset="utf-8">
</head>
<body>
	<div>hello world!</div>

	<script type="text/javascript">
	function_find();
	function function_find(){
		alert('펑션파인드를 실행했다');
		/*
		var queryname_aladin = urlEncode(queryname_raw);
		function urlEncode(str){
		    str = escape(str);
		    str = str.replace(new RegExp('\\+','g'),'%2B');
		    return str.replace(new RegExp('%20','g'),'+');
		}
		
		var urls = {
			'aladin' : 'http://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord='+queryname_aladin,
			'ridibooks' : 'http://ridibooks.com/search/?q='+queryname,
			'userstorybook' : 'http://userstorybook.net/books/?keyword='+queryname
		};
		var sites_set = document.getElementsByName('sites_set');
		if (queryname) {
			for (var i = 0 ; i < sites_set.length ; i++) {
				if (sites_set[i].checked){
					window.open(urls[sites_set[i].value]);
				}	
			}
			function_frame_remove();
		}
		*/
	}

    </script>

</body>
</html>