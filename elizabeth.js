var frame = document.createElement('div');

frame.style.zIndex = 999999;
frame.style.top = '3px';
frame.style.right = '3px';
frame.style.position = 'fixed';
frame.style.padding = '10px 17px';
frame.style.background = '#d9e8f8';
frame.style.border = '1px solid #bed2e6';
frame.style.borderRadius = "3px";
frame.style.boxShadow = '0px 1px 3px #ccd1d6';
frame.setAttribute('id', 'checkcheckframe');

var frame_inner = document.createElement('div');
frame_inner.style.float = 'left';
frame.appendChild(frame_inner);

if(window.getSelection){
    var window_selection=window.getSelection();
}

var sites = ['aladin','ridibooks','userstorybook'];
for (var i = 0 ; i < sites.length ; i++) {
	var checkbox = document.createElement('input');
	checkbox.setAttribute('type','checkbox');
	checkbox.setAttribute('name','sites_set');
	checkbox.setAttribute('value',sites[i]);
	checkbox.setAttribute('checked','checked');
	checkbox.style.margin = '0 3px 0 0';
	
	var label = document.createElement('span');
	label.innerHTML = sites[i];
	label.style.margin = '0 10px 0 0';
	label.style.color = '#3b99fc';
	label.style.fontSize= 'small';

	frame_inner.appendChild(checkbox);
	frame_inner.appendChild(label);
}

var guide = document.createElement('span');
guide.innerHTML = '제목이나 저자';
guide.style.margin = '0 8px 0 10px';
guide.style.color = '#444';
guide.style.fontWeight = 'bold';

var input_box = document.createElement('input');
input_box.setAttribute('type','text');
input_box.setAttribute('autofocus','autofocus');
input_box.setAttribute('value',window_selection);
input_box.id = 'inp';
input_box.style.margin = '0 6px 0 0';

var button_find = document.createElement('input');
button_find.setAttribute('type','button');
button_find.setAttribute('value','찾아줘!');
button_find.style.margin = '0 6px 0 0';

var button_close = document.createElement('input');
button_close.setAttribute('type','button');
button_close.setAttribute('value','닫기');
button_close.style.margin = '0 0 0 30px';
button_close.style.color = "#aaa";
button_close.style.verticalAlign = "middle";

var feedback = document.createElement('a');
feedback.setAttribute('href','https://github.com/sugarui/checkcheck.js');
feedback.setAttribute('target','_blank');
feedback.innerHTML = 'ⓘ';
feedback.style.margin = '0 0 0 10px';
feedback.style.color = '#9cc0e6';
feedback.style.fontWeight = 'bold';

frame_inner.appendChild(guide);
frame_inner.appendChild(input_box);
frame_inner.appendChild(button_find);
frame_inner.appendChild(button_close);
frame_inner.appendChild(feedback);

button_find.addEventListener('click', function_find);
button_close.addEventListener('click', function_frame_remove);
frame.addEventListener('keydown', function_by_keyboard);

function function_frame_remove() {
	document.getElementsByTagName('body')[0].removeChild(frame);
}

function function_find() {
	function urlEncode(str){
	    str=escape(str);
	    str=str.replace(new RegExp('\\+','g'),'%2B');
	    return str.replace(new RegExp('%20','g'),'+');
	}
	var queryname = document.getElementById('inp').value;
	var querynameurl = urlEncode(queryname);
	var urls = {
		'aladin' : 'http://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord='+querynameurl,
		'ridibooks' : 'http://ridibooks.com/search/?q='+queryname,
		'userstorybook' : 'http://userstorybook.net/books/?keyword='+queryname
	};
	var sites_set = document.getElementsByName('sites_set');
	for (var i = 0 ; i < sites_set.length ; i++) {
		if (sites_set[i].checked){
			window.open(urls[sites_set[i].value]);
		}	
	}
	function_frame_remove();
}

function function_by_keyboard(event){
	if (event.keyCode == 13) {
		function_find();
	} else if (event.keyCode == 27){
		function_frame_remove();
	}
}

if( ! document.getElementById('checkcheckframe') ){
	document.getElementsByTagName('body')[0].appendChild(frame);
} else {
	alert ('이미 책첵을 켰어요! 화면 우측 상단을 보세요 ↗↗');
}