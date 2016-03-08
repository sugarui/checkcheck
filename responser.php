<!DOCTYPE html>
<html>
<head>
  <title></title>
  <!--<meta charset="utf-8">-->
  <!--<meta charset="euc-kr">-->
</head>
<body>
	<div>hello world!</div>

	<?php 

		//다양한 사이트에서 접속 허용
		header("Access-Control-Allow-Origin:*");
		//header("Content-Type: text/html; charset=euc-kr");
		//header("Content-Type: text/html; charset=UTF-8");

		//받아온 값
		$name_typed = $_POST['name_typed'];

		//컨버팅 함수
		//그러나 form측에서 utf-8로 전송한 것을 받아오는 것이 전체적인 구조이므로, 사실 이 컨버팅은 필요하지 않다 
		//$name_typed = iconv("euc-kr", "UTF-8", $name_typed); //http://bomool.net/bbs/board.php?bo_table=bo0102&wr_id=10

		//받아온 값을 확인하기
		echo '인코딩을 디텍팅한 값은['.mb_detect_encoding($name_typed).']이다';

		//받은 데이터를 화면에 표시
		echo "<div id='name_typed'>".$name_typed."</div>";
	
		// echo "<div class='name_checked'>".$name_checked."</div>";
			// 위 방식으로는, 2개의 데이터가 전달되기를 바랬으나 실제로는 마지막 데이터로 덮어씌워져서 1개 데이터만 전달되었음.
			// 위 경우 name을 두가지로 하거나, ajax를 통해 제대로 된 데이터 타입으로 전달해야 함.

	?>

	<script type="text/javascript">
	
	function function_find(){
		//alert('펑션파인드를 실행했다');
		
		var query_typed = document.getElementById('name_typed').innerHTML;
		//alert('받은값은 '+queryname);
		
		var query_checked = document.getElementsByName('name_checkd');
		alert(typeof query_checked);

		var query_typed_aladin = urlEncode(query_typed);
		function urlEncode(str){
		    str = escape(str);
		    str = str.replace(new RegExp('\\+','g'),'%2B');
		    return str.replace(new RegExp('%20','g'),'+');
		}
		/*
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
		//window.open('http://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord='+query_typed_aladin);
		//window.open('http://ridibooks.com/search/?q='+query_typed);
		//window.close();

	}
	function_find();

    </script>

</body>
</html>