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

var form = document.createElement('form');
form.style.margin = '10px 0 0 0';
form.setAttribute('accept-charset','utf-8');
form.setAttribute('action','http://elecuchi.cafe24.com/program/checkcheck/responser.php');
form.setAttribute('method','post');
form.setAttribute('target','_blank');
form.id = 'fo';

frame_inner.appendChild(form);

var sites = ['aladin','ridibooks'];
for (var i = 0 ; i < sites.length ; i++) {
	var checkbox = document.createElement('input');
	checkbox.setAttribute('type','checkbox');
	checkbox.setAttribute('name','name_checked');
	checkbox.setAttribute('value',sites[i]);
	checkbox.setAttribute('checked','checked');
	checkbox.style.margin = '0 3px 0 0';
	
	var label = document.createElement('span');
	label.innerHTML = sites[i];
	label.style.margin = '0 10px 0 0';
	label.style.color = '#3b99fc';
	label.style.fontSize= 'small';

	form.appendChild(checkbox);
	form.appendChild(label);
}

var guide = document.createElement('span'); 
guide.innerHTML = '제목이나 저자';
guide.style.margin = '0 8px 0 0';
guide.style.color = '#444';
guide.style.fontWeight = 'bold';

var input_box = document.createElement('input');
input_box.setAttribute('type','text');
input_box.setAttribute('name','name_typed');
input_box.setAttribute('autofocus','autofocus');
input_box.setAttribute('value',window_selection);
input_box.id = 'inp';
input_box.style.margin = '0 6px 0 0';

var button_find = document.createElement('input');
button_find.setAttribute('type','submit');
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

form.appendChild(guide);
form.appendChild(input_box);
form.appendChild(button_find);
form.appendChild(button_close);
form.appendChild(feedback);

button_close.addEventListener('click', function_frame_remove);

function function_frame_remove() {
	document.getElementsByTagName('body')[0].removeChild(frame);
}

if( ! document.getElementById('checkcheckframe') ){
	document.getElementsByTagName('body')[0].appendChild(frame);
} else {
	alert ('이미 책첵을 켰어요! 화면 우측 상단을 보세요 ↗↗');
}
//브랜치 분기 성공여부 테스트용 주석 추가