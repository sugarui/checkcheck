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
		$name_checked_0 = $_POST['name_checked_0'];
		$name_checked_1 = $_POST['name_checked_1'];

		//컨버팅 함수
		//그러나 form측에서 utf-8로 전송한 것을 받아오는 것이 전체적인 구조이므로, 사실 이 컨버팅은 필요하지 않다 
		//$name_typed = iconv("euc-kr", "UTF-8", $name_typed); //http://bomool.net/bbs/board.php?bo_table=bo0102&wr_id=10

		//받아온 값을 확인하기
		echo '인코딩을 디텍팅한 값은['.mb_detect_encoding($name_typed).']이다';

		//받은 데이터를 화면에 표시
		echo "<div id='name_typed'>".$name_typed."</div>";
		echo "<div class='name_checked'>".$name_checked_0."</div>";
		echo "<div class='name_checked'>".$name_checked_1."</div>";
	?>

	<script type="text/javascript">
	
	function function_find(){
		alert('펑션파인드를 실행했다');
		
		var name_typed = document.getElementById('name_typed').innerHTML;	
		
		/*
		var name_typed_aladin = urlEncode(name_typed);
		function urlEncode(str){
		    str = escape(str);
		    str = str.replace(new RegExp('\\+','g'),'%2B');
		    return str.replace(new RegExp('%20','g'),'+');
		}
		*/

		var name_checked = document.getElementsByClassName('name_checked');
		alert(typeof name_checked + name_checked.length);
		
		var urls = {
			'aladin' : 'http://www.aladin.co.kr/',
			'ridibooks' : 'http://ridibooks.com/',
			'userstorybook' : 'http://userstorybook.net/'
			/*
			'aladin' : 'http://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord='+name_typed_aladin,
			'ridibooks' : 'http://ridibooks.com/search/?q='+name_typed,
			'userstorybook' : 'http://userstorybook.net/books/?keyword='+name_typed
			*/
		};

		for (var i = 0 ; i < name_checked.length ; i++) {
			var name_i = name_checked[i].innerHTML;
			if (name_i){
				alert(name_i);			
				window.open(urls[name_i]);
			}
		}
		//window.close();
	}
	function_find();

    </script>

</body>
</html>