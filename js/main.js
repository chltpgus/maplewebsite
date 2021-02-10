const main_btn = document.getElementById('btn-white');
const main_screen = document.querySelector('.main-screen');
let Question_screen = [];
let Question_btn1 = [];
let Question_btn2 = [];

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let counter = 0;

for (a in array) {
    Question_screen[a-1] = document.querySelector('.Question-screen' + a);

}
for (a in array) {
    Question_btn1[a-1] = document.querySelector('.btn-Question-' + a);

}

for (a in array) {
    Question_btn2[a-1] = document.querySelector('.btn-Question2-' + a);

}



main_btn.addEventListener('click', function(){
    main_screen.style.display = 'none';
    Question_screen[0].style.display = 'block';

});


function Question_click_1(screen) {
    Question_btn1[screen].addEventListener('click', function () {
        Question_screen[screen].style.display = 'none';
        Question_screen[screen + 1].style.display = 'block';
        counter =0;
    });
}

function Question_click_2(screen) {
    Question_btn2[screen].addEventListener('click', function () {
        Question_screen[screen].style.display = 'none';
        Question_screen[screen + 1].style.display = 'block';
    });
}

    for(i=0; i<9; i++){
        Question_click_1(i);
        Question_click_2(i);
        console.log('counter');
    }
