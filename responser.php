<!DOCTYPE html>
<html>
<head>
  <title></title>
  <!--<meta charset="utf-8">-->
  <!--<meta charset="euc-kr">-->
</head>
<body>

	<?php 

		//다양한 사이트에서 접속 허용
		header("Access-Control-Allow-Origin:*");
		//header("Content-Type: text/html; charset=euc-kr");
		//header("Content-Type: text/html; charset=UTF-8");

		//받아온 검색어 & 이를 화면에 표시하기
		$name_typed = $_POST['name_typed'];
		echo "인코딩을 디텍팅한 결과는 [".mb_detect_encoding($name_typed)."]이다";
		echo "<div id='name_typed'>인코딩되어 수신된 데이터는 [".$name_typed."]이다</div>";


		//받아온 사이트 체크박스 목록 & 이를 화면에 표시하기 
		//여기서 반복문 제어숫자(가운데)는 checkcheck.js에서 선언된 var sites 배열의 원소 갯수와 같게 할 것 		
		for($i = 0; $i < 2; $i++){ 
			$name_checked = $_POST['name_checked_'.$i];
			echo "<div class='name_checked'>".$name_checked."</div>";
		}
		
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