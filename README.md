# checkcheck, 책첵 : 책을 체크해줍니다<br>
어떤 책에 대해 검색하고 싶을 때, 한번에 3개의 도서정보 사이트를 자동으로 열어서 검색해줍니다.<br>
대상 사이트는 **알라딘, 리디북스, 유저스토리북** 입니다. <br>
<br> 
관심이 가는 책이 생기면 책소개나 리뷰를 읽어보기 위해 이런저런 사이트를 열고 검색을 하곤 하는데,<br> 
이를 좀더 편하게 하려는 개인적인 필요로 만들었습니다. <br>
북마클릿 방식의 프로그램입니다. <br>
<br>
### 사용법<br>
- 1. [책첵]("javascript:(function()%7Bvar frame %3D document.createElement('div')%3Bframe.style.zIndex %3D 999999%3Bframe.style.top %3D '3px'%3Bframe.style.right %3D '3px'%3Bframe.style.position %3D 'fixed'%3Bframe.style.padding %3D '10px 17px'%3Bframe.style.background %3D '%23d9e8f8'%3Bframe.style.border %3D '1px solid %23cadef3'%3Bframe.style.borderRadius %3D "3px"%3Bvar frame_inner %3D document.createElement('div')%3Bframe_inner.style.float %3D 'left'%3Bframe.appendChild(frame_inner)%3Bif(window.getSelection)%7Bvar window_selection%3Dwindow.getSelection()%3B%7Dvar sites %3D %5B'aladin'%2C'ridibooks'%2C'userstorybook'%5D%3Bfor (var i %3D 0 %3B i < sites.length %3B i%2B%2B) %7Bvar checkbox %3D document.createElement('input')%3Bcheckbox.setAttribute('type'%2C'checkbox')%3Bcheckbox.setAttribute('name'%2C'sites_set')%3Bcheckbox.setAttribute('value'%2Csites%5Bi%5D)%3Bcheckbox.setAttribute('checked'%2C'checked')%3Bcheckbox.style.margin %3D '0 3px 0 0'%3Bvar label %3D document.createElement('span')%3Blabel.innerHTML %3D sites%5Bi%5D%3Blabel.style.margin %3D '0 10px 0 0'%3Blabel.style.color %3D '%233b99fc'%3Blabel.style.fontSize%3D 'small'%3Bframe_inner.appendChild(checkbox)%3Bframe_inner.appendChild(label)%3B%7Dvar guide %3D document.createElement('span')%3Bguide.innerHTML %3D '제목이나 저자'%3Bguide.style.margin %3D '0 8px 0 10px'%3Bguide.style.color %3D '%23444'%3Bguide.style.fontWeight %3D 'bold'%3Bvar input_box %3D document.createElement('input')%3Binput_box.setAttribute('type'%2C'text')%3Binput_box.setAttribute('autofocus'%2C'autofocus')%3Binput_box.setAttribute('value'%2Cwindow_selection)%3Binput_box.id %3D 'inp'%3Binput_box.style.margin %3D '0 6px 0 0'%3Bvar button_find %3D document.createElement('input')%3Bbutton_find.setAttribute('type'%2C'button')%3Bbutton_find.setAttribute('value'%2C'찾아줘')%3Bbutton_find.style.margin %3D '0 6px 0 0'%3Bvar button_close %3D document.createElement('input')%3Bbutton_close.setAttribute('type'%2C'button')%3Bbutton_close.setAttribute('value'%2C'닫기')%3Bbutton_close.style.margin %3D '0 0 0 30px'%3Bbutton_close.style.color %3D "%23aaa"%3Bbutton_close.style.verticalAlign %3D "middle"%3Bvar feedback %3D document.createElement('a')%3Bfeedback.setAttribute('href'%2C'http%3A%2F%2Fsugarui.net%2F%3Fid%3D71%23disqus_thread')%3Bfeedback.setAttribute('target'%2C'_blank')%3Bfeedback.innerHTML %3D 'ⓘ'%3Bfeedback.style.margin %3D '0 0 0 10px'%3Bfeedback.style.color %3D '%239cc0e6'%3Bfeedback.style.fontWeight %3D 'bold'%3Bframe_inner.appendChild(guide)%3Bframe_inner.appendChild(input_box)%3Bframe_inner.appendChild(button_find)%3Bframe_inner.appendChild(button_close)%3Bframe_inner.appendChild(feedback)%3Bbutton_find.addEventListener('click'%2C function_find)%3Bbutton_close.addEventListener('click'%2C function_frame_remove)%3Bframe.addEventListener('keydown'%2C function_by_keyboard)%3Bfunction function_frame_remove() %7Bdocument.getElementsByTagName('body')%5B0%5D.removeChild(frame)%3B%7Dfunction function_find() %7Bfunction urlEncode(str)%7Bstr%3Descape(str)%3Bstr%3Dstr.replace(new RegExp('%5C%5C%2B'%2C'g')%2C'%252B')%3Breturn str.replace(new RegExp('%2520'%2C'g')%2C'%2B')%3B%7Dvar queryname %3D document.getElementById('inp').value%3Bvar querynameurl %3D urlEncode(queryname)%3Bvar urls %3D %7B'aladin' %3A 'http%3A%2F%2Fwww.aladin.co.kr%2Fsearch%2Fwsearchresult.aspx%3FSearchTarget%3DAll%26SearchWord%3D'%2Bquerynameurl%2C'ridibooks' %3A 'http%3A%2F%2Fridibooks.com%2Fsearch%2F%3Fq%3D'%2Bqueryname%2C'userstorybook' %3A 'http%3A%2F%2Fuserstorybook.net%2Fbooks%2F%3Fkeyword%3D'%2Bqueryname%7D%3Bvar sites_set %3D document.getElementsByName('sites_set')%3Bfor (var i %3D 0 %3B i < sites_set.length %3B i%2B%2B) %7Bif (sites_set%5Bi%5D.checked)%7Bwindow.open(urls%5Bsites_set%5Bi%5D.value%5D)%3B%7D%7Dfunction_frame_remove()%3B%7Dfunction function_by_keyboard(event)%7Bif (event.keyCode %3D%3D 13) %7Bfunction_find()%3B%7D else if (event.keyCode %3D%3D 27)%7Bfunction_frame_remove()%3B%7D%7Ddocument.getElementsByTagName('body')%5B0%5D.appendChild(frame)%7D)()") ← 요 부분을 클릭한채로 드래그해서 브라우저의 북마크바에 추가합니다. 근데이거 리드미에서 링크 안먹을 것 같다. <br>
- 2. 검색이 하고 싶어지면, 언제든 브라우저의 북마크 바에서 책첵 북마크를 눌러서 실행하면 됩니다.<br>
<br>
<br>

##### 좀더 간편하게 쓰기 <br>
- 3개 사이트 중 검색할 사이트를 지정할 수 있습니다.
- 현재 페이지에서 책 제목을 드래그한뒤 책첵하면, 자동으로 책첵 검색창에 입력해줍니다. 
- esc키를 누르면 책첵 검색창이 닫힙니다.
<br>

##### 피드백 <br>
- http://sugarui.net/?id=71#disqus_thread
- sugarui@naver.com
<br>

##### 제작자 정보<br>
- 자바스크립트 늅
