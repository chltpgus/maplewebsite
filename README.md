# maplewebsite

maplewebsite는 게임 메이플스토리에서 호불호가 갈리는 얼굴을 대상으로 테스트를 해서 본인 취향을 확인할 수 있는 사이트다.

사용 기술 : Netlify(웹호스팅), Html, Css, Javascript

제작 이유 : 개발 실력 향상과 게임 사용자에게 흥미를 주기 위해

![image](https://user-images.githubusercontent.com/67909892/109588027-6b6cfb00-7b4b-11eb-8a66-3f5178dced87.png)
Html, Css을 사용해서 메인화면을 구성했다. 퍼센트를 조절해서 반응형으로 만들었다.
"현재 테스트한 사용자는 82명 입니다."의 텍스트는 웹서버에 GET 요청을 해서 82명이라는 인원을 가져왔다.


<img src="https://user-images.githubusercontent.com/67909892/109589519-c69fed00-7b4d-11eb-940c-967f65938c38.png" >

<p align="center">
<img src="https://user-images.githubusercontent.com/67909892/109588372-f817b900-7b4b-11eb-9d1f-0926c801d38c.png" width="40%"> <img src="https://user-images.githubusercontent.com/67909892/109588449-18477800-7b4c-11eb-89e1-bd35f8a27d6a.png" width="40%"></p>

테스트를 시작하면 나오는 질문 화면을 구성했다. 질문 div를 10개 만들고 display = 'none'처리를 해놓고 버튼을 누르면 다음 화면이 display = 'block'이 되서 출력되는 방식이다.
count 변수에는 긍적 대답이 나오는 질문을 카운트해서 마지막 결과에 사용된다.

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/109591440-d967f100-7b50-11eb-9f1e-974129bb0764.png" align="center" width="40%"><img src="https://user-images.githubusercontent.com/67909892/109591301-9dcd2700-7b50-11eb-84ab-dfb81af4af04.png" align="center" width="80%"></p>



<p align="center"><img src="https://user-images.githubusercontent.com/67909892/109589856-59d92280-7b4e-11eb-92ed-59a08871a1b3.png" align="center" width="40%"><img src="https://user-images.githubusercontent.com/67909892/109589980-8856fd80-7b4e-11eb-9caf-152c15b89023.png" align="center" width="30%"></p>

<p align="center"><img src="https://user-images.githubusercontent.com/67909892/109590002-9442bf80-7b4e-11eb-8e0e-2fcbf76ceef4.png" align="center" ></p>

결과 화면은 count 변수에 들어있는 숫자로 결과 화면이 다르게 출력된다. 그리고 처음으로 버튼을 누르면 메인 화면으로 돌아가면서 count 변수를 초기화 한다.
