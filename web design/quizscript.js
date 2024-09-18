// Selecting all required elements
const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const exit_btn = document.querySelector('.button .quit');
const continue_btn = document.querySelector('.button .restart');
const quiz_box = document.querySelector('.quiz_box');
const result_box = document.querySelector('.result_box');
const option_list = document.querySelector('.option_list');
const time_line = document.querySelector('header .time_line');
const timeText = document.querySelector('.timer .time_left_txt'); // Fixed class name
const timeCount = document.querySelector('.timer .timer_sec');

// If start button is clicked
start_btn.onclick = () => {
    info_box.classList.add('activeinfo'); // Show info box
};

// If exit button is clicked (Exit Quiz)
exit_btn.onclick = () => {
    info_box.classList.remove('activeinfo'); // Hide info box
};

// If continue button is clicked (Start Quiz)
continue_btn.onclick = () => {
    info_box.classList.remove('activeinfo'); // Hide info box
    quiz_box.classList.add('activequiz'); // Show quiz box
};

// You can now add more event listeners for navigating the quiz and handling results.



