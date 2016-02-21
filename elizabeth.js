var frame = document.createElement('div');

frame.style.zIndex = 999999;
frame.style.top = '0px';
frame.style.right = '0px';
frame.style.position = 'fixed';
frame.style.width = '240px';
frame.style.padding = '10px';
frame.style.background = '#ffff00';

var guide = document.createElement('label');
guide.innerHTML = 'title';
guide.style.margin ='0 6px 0 0';

var inputBox = document.createElement('input');
inputBox.setAttribute('type','text');
inputBox.setAttribute('size','20');
inputBox.id = 'inp';
inputBox.style.margin = '0 6px 0 0';

var button = document.createElement('input');
button.setAttribute('type','button');
button.setAttribute('value','find');

frame.appendChild(guide);
frame.appendChild(inputBox);
frame.appendChild(button);

button.addEventListener('click', function(){
	var queryName = document.getElementById('inp').value;
	var url_ridi = 'http://ridibooks.com/search/?q='+ queryName;
	var url_usb = 'http://userstorybook.net/books/?keyword='+ queryName;
	window.open(url_ridi);
	window.open(url_usb);
	document.getElementsByTagName('body')[0].removeChild(frame);
})

document.getElementsByTagName('body')[0].appendChild(frame);