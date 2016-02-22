
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

frame.appendChild(guide);
frame.appendChild(input_box);
frame.appendChild(button_find);
frame.appendChild(button_close);

var sites = ['aladin','ridibooks','userstorybook'];
for (var i = 0 ; i < sites.length ; i++) {
	var checkbox = document.createElement('input');
	checkbox.setAttribute('type','checkbox');
	checkbox.setAttribute('name','sites_set');
	checkbox.setAttribute('value',sites[i]);
	checkbox.setAttribute('checked','checked');
	
	var label = document.createElement('span');
	label.innerHTML = sites[i];
	label.style.margin = '0 10px 0 0';
	label.style.color = '#999';

	frame.appendChild(checkbox);
	frame.appendChild(label);
}

button_find.addEventListener('click', function(){

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
	document.getElementsByTagName('body')[0].removeChild(frame);
});

button_close.addEventListener('click', function(){
	document.getElementsByTagName('body')[0].removeChild(frame);
});

document.getElementsByTagName('body')[0].appendChild(frame);

/*
function urlEncode() : from : https://ostermiller.org/calc/encode.html

SINGLE LINE CONVERTING RESULT : from : http://mrcoles.com/bookmarklet
javascript:(function()%7Bvar%20frame%20%3D%20document.createElement('div')%3Bframe.style.zIndex%20%3D%20999999%3Bframe.style.top%20%3D%20'0px'%3Bframe.style.right%20%3D%20'0px'%3Bframe.style.position%20%3D%20'fixed'%3Bframe.style.width%20%3D%20'600px'%3Bframe.style.padding%20%3D%20'10px'%3Bframe.style.background%20%3D%20'%23f0f0f0'%3Bvar%20guide%20%3D%20document.createElement('span')%3Bguide.innerHTML%20%3D%20'%EC%A0%9C%EB%AA%A9%EC%9D%B4%EB%82%98%20%EC%A0%80%EC%9E%90'%3Bguide.style.margin%20%3D'0%206px%200%200'%3Bvar%20input_box%20%3D%20document.createElement('input')%3Binput_box.setAttribute('type'%2C'text')%3Binput_box.setAttribute('size'%2C'15')%3Binput_box.id%20%3D%20'inp'%3Binput_box.style.margin%20%3D%20'0%206px%200%200'%3Bvar%20button_find%20%3D%20document.createElement('input')%3Bbutton_find.setAttribute('type'%2C'button')%3Bbutton_find.setAttribute('value'%2C'%EC%B0%BE%EC%95%84%EC%A4%98')%3Bbutton_find.style.margin%20%3D%20'0%206px%200%200'%3Bvar%20button_close%20%3D%20document.createElement('input')%3Bbutton_close.setAttribute('type'%2C'button')%3Bbutton_close.setAttribute('value'%2C'%EB%8B%AB%EA%B8%B0')%3Bbutton_close.style.margin%20%3D%20'0%2020px%200%200'%3Bframe.appendChild(guide)%3Bframe.appendChild(input_box)%3Bframe.appendChild(button_find)%3Bframe.appendChild(button_close)%3Bvar%20sites%20%3D%20%5B'aladin'%2C'ridibooks'%2C'userstorybook'%5D%3Bfor%20(var%20i%20%3D%200%20%3B%20i%20%3C%20sites.length%20%3B%20i%2B%2B)%20%7Bvar%20checkbox%20%3D%20document.createElement('input')%3Bcheckbox.setAttribute('type'%2C'checkbox')%3Bcheckbox.setAttribute('name'%2C'sites_set')%3Bcheckbox.setAttribute('value'%2Csites%5Bi%5D)%3Bcheckbox.setAttribute('checked'%2C'checked')%3Bvar%20label%20%3D%20document.createElement('span')%3Blabel.innerHTML%20%3D%20sites%5Bi%5D%3Blabel.style.margin%20%3D%20'0%2010px%200%200'%3Blabel.style.color%20%3D%20'%23999'%3Bframe.appendChild(checkbox)%3Bframe.appendChild(label)%3B%7Dbutton_find.addEventListener('click'%2C%20function()%7Bfunction%20urlEncode(str)%7Bstr%3Descape(str)%3Bstr%3Dstr.replace(new%20RegExp('%5C%5C%2B'%2C'g')%2C'%252B')%3Breturn%20str.replace(new%20RegExp('%2520'%2C'g')%2C'%2B')%3B%7Dvar%20queryname%20%3D%20document.getElementById('inp').value%3Bvar%20querynameurl%20%3D%20urlEncode(queryname)%3Bvar%20urls%20%3D%20%7B'aladin'%20%3A%20'http%3A%2F%2Fwww.aladin.co.kr%2Fsearch%2Fwsearchresult.aspx%3FSearchTarget%3DAll%26SearchWord%3D'%2Bquerynameurl%2C'ridibooks'%20%3A%20'http%3A%2F%2Fridibooks.com%2Fsearch%2F%3Fq%3D'%2Bqueryname%2C'userstorybook'%20%3A%20'http%3A%2F%2Fuserstorybook.net%2Fbooks%2F%3Fkeyword%3D'%2Bqueryname%7D%3Bvar%20sites_set%20%3D%20document.getElementsByName('sites_set')%3Bfor%20(var%20i%20%3D%200%20%3B%20i%20%3C%20sites_set.length%20%3B%20i%2B%2B)%20%7Bif%20(sites_set%5Bi%5D.checked)%7Bwindow.open(urls%5Bsites_set%5Bi%5D.value%5D)%3B%7D%7Ddocument.getElementsByTagName('body')%5B0%5D.removeChild(frame)%3B%7D)%3Bbutton_close.addEventListener('click'%2C%20function()%7Bdocument.getElementsByTagName('body')%5B0%5D.removeChild(frame)%3B%7D)%3Bdocument.getElementsByTagName('body')%5B0%5D.appendChild(frame)%7D)()
*/
