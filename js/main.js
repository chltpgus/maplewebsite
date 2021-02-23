const main_btn = document.getElementById('btn-white');          //메인 버튼 선언
const main_screen = document.querySelector('.main-screen');     //메인 화면이 담겨있는 div를 선언
const user_text = document.querySelector('.text2');
let Question_screen = [];    //질문 화면을 담을 배열 선언
let Question_btn1 = [];      //질문 1 버튼 배열선언
let Question_btn2 = [];      //질문 2 버튼 배열 선언

let Result_screen = [];      //결과 화면을 담을 배열 선언
const Result_btn = document.querySelector('.btn-Confirm');    //결과를 버튼 선언
let Return_btn = [];         //첫 화면으로 돌아가는 리턴 버튼 선언


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];   //배열에 넣을 인덱스를 위한 배열 선언
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

let count = 0;  //질문에 긍적적인 답변을 한 수를 더하기 위한 변수 선언
let user = {
    id: "",
    name: "",
    num: ""
};

fetch('https://mapleing.herokuapp.com/api/user')
  .then(function(res) {
    return res.json();
  })
  .then(function(res) {
    /*console.log(res);*/
    user = res;
    console.log(user);
    user_text.innerHTML = "현재 테스트한 사용자는 "+user[0].num+"명 입니다.";
    
  });


for (a in array) { // 질문 화면 선언
    Question_screen[a-1] = document.querySelector('.Question-screen' + a);

}
for (a in array) { // 질문1 버튼 선언
    Question_btn1[a-1] = document.querySelector('.btn-Question-' + a);

}

for (a in array) { // 질문2 버튼 선언
    Question_btn2[a-1] = document.querySelector('.btn-Question2-' + a);

}

for (a in array2) {// 결과 화면 선언
    Result_screen[a] = document.querySelector('.Result-' + a);
}

for (a in array3) {//첫 화면 리턴 버튼 선언
    Return_btn[a] = document.querySelector('.btn-Result-' + a);
}



main_btn.addEventListener('click', function(){ // 메인 화면 버튼을 누르면 메인 스크린은 없어지고 첫번째 질문 스크린 출력
    main_screen.style.display = 'none';
    Question_screen[0].style.display = 'block';

});


function Question_click_1(screen) {  // 질문에서 왼쪽 버튼을 누르면 다음 질문으로 이동하는 함수
    Question_btn1[screen].addEventListener('click', function () {
        if(screen == 9){  // 마지막 질문에서는 결과 화면을 출력
            Question_screen[screen].style.display = 'none';
            Result_screen[0].style.display = 'block';
            count = count + 1;  // 긍정적인 답변을 카운트
        }
        else {
            Question_screen[screen].style.display = 'none';
            Question_screen[screen + 1].style.display = 'block';
            count = count + 1; // 긍정적인 답변을 카운트
        }
    });
}

function Question_click_2(screen) {  // 질문에서 오른쪽 버튼을 누르면 다음 질문으로 이동하는 함수
    Question_btn2[screen].addEventListener('click', function () {
        if(screen == 9){ // 마지막 질문에서는 결과 화면을 출력
            Question_screen[screen].style.display = 'none';
            Result_screen[0].style.display = 'block';
        }
        else {
        Question_screen[screen].style.display = 'none';
        Question_screen[screen + 1].style.display = 'block';
        }
    });
}

function post_to_url(path, params, method) {
    method = method || "get"; // Set method to post by default, if not specified.
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    for(var key in params) {
        var hiddenField = document.createElement("input");
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("name", key);
        hiddenField.setAttribute("value", params[key]);
        form.appendChild(hiddenField);
    }
    document.body.appendChild(form);
    form.submit();
}

function Result_click() {  // 결과 화면 출력 함수
    Result_btn.addEventListener('click', function () {

        fetch('https://mapleing.herokuapp.com/api/user')
            .then(function (res) {
                return res.json();
            })
            .then(function (res) {
                /*console.log(res);*/
                user = res;
                user[0].num ++;
               
                post_to_url('https://mapleing.herokuapp.com/api/user', user, "get");

                user_text.innerHTML = "현재 테스트한 사용자는 " + user[0].num + "명 입니다.";

            });
        
        
        
        switch (count){  // 긍정적인 답변의 수에 따른 결과 화면 출력
            case 0:
                Result_screen[0].style.display = 'none';
                Result_screen[1].style.display = 'block';
                break;
            case 1:
                Result_screen[0].style.display = 'none';
                Result_screen[2].style.display = 'block';
                break;
            case 2:
                Result_screen[0].style.display = 'none';
                Result_screen[3].style.display = 'block';
                break;
            case 3:
                Result_screen[0].style.display = 'none';
                Result_screen[4].style.display = 'block';
                break;
            case 4:
                Result_screen[0].style.display = 'none';
                Result_screen[5].style.display = 'block';
                break;
            case 5:
                Result_screen[0].style.display = 'none';
                Result_screen[5].style.display = 'block';
                break;
            case 6:
                Result_screen[0].style.display = 'none';
                Result_screen[5].style.display = 'block';
                break;
            case 7:
                Result_screen[0].style.display = 'none';
                Result_screen[6].style.display = 'block';
                break;
            case 8:
                Result_screen[0].style.display = 'none';
                Result_screen[7].style.display = 'block';
                break;
            case 9:
                Result_screen[0].style.display = 'none';
                Result_screen[8].style.display = 'block';
                break;
            case 10:
                Result_screen[0].style.display = 'none';
                Result_screen[9].style.display = 'block';
                break;
            default:
                console.log(count);
        }

    });

}



function Return_click(number) {  // 결과 화면을 확인하고 처음 메인 화면으로 돌아가기 위한 리턴 버튼 클릭 함수
    Return_btn[number].addEventListener('click', function () {
        
        Result_screen[number].style.display = 'none';
        count = 0; // 답변을 카운트한 변수를 초기화
        main_screen.style.display = 'block';
    });
}


for (i = 0; i < 10; i++) { // 질문 출력 함수 실행
    Question_click_1(i);
    Question_click_2(i);
}

Result_click(); // 결과 출력 함수 실행 


for(let i =1; i<10; i++){ // 리턴 함수 실행
    Return_click(i);
}

