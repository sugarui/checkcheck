var frame = document.createElement('div');

frame.style.zIndex = 999999;
frame.style.top = '0px';
frame.style.right = '0px';
frame.style.position = 'fixed';
frame.style.width = '600px';
frame.style.padding = '10px';
frame.style.background = '#f0f0f0';

var guide = document.createElement('span');
guide.innerHTML = '제목이나 저자';
guide.style.margin ='0 6px 0 0';

var input_box = document.createElement('input');
input_box.setAttribute('type','text');
input_box.setAttribute('size','15');
input_box.id = 'inp';
input_box.style.margin = '0 6px 0 0';

var button_find = document.createElement('input');
button_find.setAttribute('type','button');
button_find.setAttribute('value','찾아줘');
button_find.style.margin = '0 6px 0 0';

var button_close = document.createElement('input');
button_close.setAttribute('type','button');
button_close.setAttribute('value','닫기');
button_close.style.margin = '0 20px 0 0';


var check_box_aladin = document.createElement('input');
check_box_aladin.setAttribute('type','checkbox');
check_box_aladin.setAttribute('value','aladin');
var check_box_label_aladin = document.createElement('span');
check_box_label_aladin.innerHTML = '알라딘';

var check_box_ridi = document.createElement('input');
check_box_ridi.setAttribute('type','checkbox');
check_box_ridi.setAttribute('value','ridi');
var check_box_label_ridi = document.createElement('span');
check_box_label_ridi.innerHTML = '리디';

var check_box_usb = document.createElement('input');
check_box_usb.setAttribute('type','checkbox');
check_box_usb.setAttribute('value','usb');
var check_box_label_usb = document.createElement('span');
check_box_label_usb.innerHTML = '유북';


frame.appendChild(guide);
frame.appendChild(input_box);
frame.appendChild(button_find);
frame.appendChild(button_close);

frame.appendChild(check_box_aladin);
frame.appendChild(check_box_label_aladin);
frame.appendChild(check_box_ridi);
frame.appendChild(check_box_label_ridi);
frame.appendChild(check_box_usb);
frame.appendChild(check_box_label_usb);


button_find.addEventListener('click', function(){

	function urlEncode(str){
	    str=escape(str);
	    str=str.replace(new RegExp('\\+','g'),'%2B');
	    return str.replace(new RegExp('%20','g'),'+');
	}
	var queryname = document.getElementById('inp').value;
	var querynameurl = urlEncode(queryname);

	var url_aladin = 'http://www.aladin.co.kr/search/wsearchresult.aspx?SearchTarget=All&SearchWord='+querynameurl;
	var url_ridi = 'http://ridibooks.com/search/?q='+queryname;
	var url_usb = 'http://userstorybook.net/books/?keyword='+queryname;
	window.open(url_aladin);
	window.open(url_ridi);
	window.open(url_usb);
	document.getElementsByTagName('body')[0].removeChild(frame);
});

button_close.addEventListener('click', function(){
	document.getElementsByTagName('body')[0].removeChild(frame);
});

document.getElementsByTagName('body')[0].appendChild(frame);

/*
function urlEncode() : from : https://ostermiller.org/calc/encode.html

SINGLE LINE CONVERTING RESULT : from : http://mrcoles.com/bookmarklet
javascript:(function()%7Bvar%20frame%20%3D%20document.createElement('div')%3Bframe.style.zIndex%20%3D%20999999%3Bframe.style.top%20%3D%20'0px'%3Bframe.style.right%20%3D%20'0px'%3Bframe.style.position%20%3D%20'fixed'%3Bframe.style.width%20%3D%20'400px'%3Bframe.style.padding%20%3D%20'10px'%3Bframe.style.background%20%3D%20'%23f0f0f0'%3Bvar%20guide%20%3D%20document.createElement('p')%3Bguide.innerHTML%20%3D%20'%EC%A0%9C%EB%AA%A9%EC%9D%B4%EB%82%98%20%EC%A0%80%EC%9E%90'%3Bguide.style.margin%20%3D'0%206px%200%200'%3Bvar%20input_box%20%3D%20document.createElement('input')%3Binput_box.setAttribute('type'%2C'text')%3Binput_box.setAttribute('size'%2C'15')%3Binput_box.id%20%3D%20'inp'%3Binput_box.style.margin%20%3D%20'0%206px%200%200'%3Bvar%20button_find%20%3D%20document.createElement('input')%3Bbutton_find.setAttribute('type'%2C'button')%3Bbutton_find.setAttribute('value'%2C'%EC%B0%BE%EC%95%84%EC%A4%98')%3Bvar%20button_close%20%3D%20document.createElement('input')%3Bbutton_close.setAttribute('type'%2C'button')%3Bbutton_close.setAttribute('value'%2C'%EB%8B%AB%EA%B8%B0')%3Bframe.appendChild(guide)%3Bframe.appendChild(input_box)%3Bframe.appendChild(button_find)%3Bframe.appendChild(button_close)%3Bbutton_find.addEventListener('click'%2C%20function()%7Bfunction%20urlEncode(str)%7Bstr%3Descape(str)%3Bstr%3Dstr.replace(new%20RegExp('%5C%5C%2B'%2C'g')%2C'%252B')%3Breturn%20str.replace(new%20RegExp('%2520'%2C'g')%2C'%2B')%3B%7Dvar%20queryname%20%3D%20document.getElementById('inp').value%3Bvar%20querynameurl%20%3D%20urlEncode(queryname)%3Bvar%20url_aladin%20%3D%20'http%3A%2F%2Fwww.aladin.co.kr%2Fsearch%2Fwsearchresult.aspx%3FSearchTarget%3DAll%26SearchWord%3D'%2Bquerynameurl%3Bvar%20url_ridi%20%3D%20'http%3A%2F%2Fridibooks.com%2Fsearch%2F%3Fq%3D'%2Bqueryname%3Bvar%20url_usb%20%3D%20'http%3A%2F%2Fuserstorybook.net%2Fbooks%2F%3Fkeyword%3D'%2Bqueryname%3Bwindow.open(url_aladin)%3Bwindow.open(url_ridi)%3Bwindow.open(url_usb)%3Bdocument.getElementsByTagName('body')%5B0%5D.removeChild(frame)%3B%7D)%3Bbutton_close.addEventListener('click'%2C%20function()%7Bdocument.getElementsByTagName('body')%5B0%5D.removeChild(frame)%3B%7D)%3Bdocument.getElementsByTagName('body')%5B0%5D.appendChild(frame)%7D)()
*/
