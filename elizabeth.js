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
for (var i = 0 ; i < sites.length; i++) {
	var checkbox = document.createElement('input');
	checkbox.setAttribute('type','checkbox');
	checkbox.setAttribute('name','sites_set');
	checkbox.setAttribute('value',sites[i]);
	
	var label = document.createElement('span');
	label.innerHTML = sites[i];
	label.style.margin = '0 10px 0 0';
	label.style.color = '#aaa';

	frame.appendChild(checkbox);
	frame.appendChild(label);
};

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
	
	var sites_set = document.getElementsByName('sites_set')
	for (var i = 0 ; i < sites_set.length; i++) {
		if (sites_set[i].checked){
			alert(sites_set[i].value);
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
*/
