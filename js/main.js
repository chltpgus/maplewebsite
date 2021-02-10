const main_btn = document.getElementById('btn-white');
const main_screen = document.querySelector('.main-screen');
let Question_screen = [];
let Question_btn1 = [];
let Question_btn2 = [];

let Result_screen = [];
const Result_btn = document.querySelector('.btn-Confirm');
let Return_btn = [];


const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let count = 0;

for (a in array) {
    Question_screen[a-1] = document.querySelector('.Question-screen' + a);

}
for (a in array) {
    Question_btn1[a-1] = document.querySelector('.btn-Question-' + a);

}

for (a in array) {
    Question_btn2[a-1] = document.querySelector('.btn-Question2-' + a);

}

for (a in array2) {
    Result_screen[a] = document.querySelector('.Result-' + a);
}

for (a in array3) {
    Return_btn[a] = document.querySelector('.btn-Result-' + a);
}



main_btn.addEventListener('click', function(){
    main_screen.style.display = 'none';
    Question_screen[0].style.display = 'block';

});


function Question_click_1(screen) {
    Question_btn1[screen].addEventListener('click', function () {
        if(screen == 9){
            Question_screen[screen].style.display = 'none';
            Result_screen[0].style.display = 'block';
            count = count + 1;
            console.log(count);
        }
        else {
            Question_screen[screen].style.display = 'none';
            Question_screen[screen + 1].style.display = 'block';
            count = count + 1;
            console.log(count);
        }
    });
}

function Question_click_2(screen) {
    Question_btn2[screen].addEventListener('click', function () {
        if(screen == 9){
            Question_screen[screen].style.display = 'none';
            Result_screen[0].style.display = 'block';
            console.log(count);
            console.log(count);
        }
        else {
        Question_screen[screen].style.display = 'none';
        Question_screen[screen + 1].style.display = 'block';
        console.log(count);
        }
    });
}

function Result_click(){
    Result_btn.addEventListener('click', function(){
        switch (count){
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



function Return_click(number) {
    Return_btn[number].addEventListener('click', function () {
        
        Result_screen[number].style.display = 'none';
        count = 0;
        main_screen.style.display = 'block';
    });
}


for (i = 0; i < 10; i++) {
    Question_click_1(i);
    Question_click_2(i);
}

Result_click();

for(let i =1; i<10; i++){
    Return_click(i);
}

