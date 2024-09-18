const start_btn = document.querySelector('.start_btn button');
const info_box = document.querySelector('.info_box');
const exit_btn = document.querySelector('.button .quit');
const continue_btn = document.querySelector('.button .restart');
const quiz_box = document.querySelector('.quiz_box');
const result_box = document.querySelector('.result_box');
const option_list = document.querySelector('.option_list');
const time_line = document.querySelector('header .time_line');
const timeText = document.querySelector('.timer .time_left_txt');
const timeCount = document.querySelector('.timer .timer_sec');
const next_btn = document.querySelector('.next_btn');
const currentQuestion = document.querySelector('#current');
const totalQuestions = document.querySelector('#total');
let score = 0;
let que_count = 0;
const questions = [
    {
       numb: 1,
       question: 'What does HTML stand for?',
       answer: 'Hyper Text Markup Language',
       options: [
        'Hyper Text Preprocessor',
        'Hyper Text Markup Language',
        'Hyper Text Multiple Language',
        'Hyper Text Multi Language'
       ]
    },
    {
        numb: 2,
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets',
        options: [
         'Common Style Sheets',
         'Colorful Style Sheets',
         'Computer Style Sheets',
         'Cascading Style Sheets'
        ]
    },
    {
        numb: 3,
        question: 'What does PHP stand for?',
        answer: 'Hypertext Preprocessor',
        options: [
         'Hypertext Preprocessor',
         'Hypertext Preprogramming',
         'Hypertext Programming',
         'Hometext Preprocessor'
        ]
    },
    {
        numb: 4,
        question: 'What does SQL stand for?',
        answer: 'Structured Query Language',
        options: [
         'Stylish Query Language',
         'Stylesheet Query Language',
         'Statement Question Language',
         'Structured Query Language'
        ]
    },
    {
        numb: 5,
        question: 'What does XML stand for?',
        answer: 'eXtensible Markup Language',
        options: [
         'eXtensible Markup Language',
         'eXecutable Multiple Language',
         'eXtra Multi-Program Language',
         'eXamine Multiple Language'
        ]
    },
];

start_btn.onclick = () => {
    info_box.classList.add('activeinfo');
};

exit_btn.onclick = () => {
    window.location.reload();
};

continue_btn.onclick = () => {
    info_box.classList.remove('activeinfo');
    quiz_box.classList.add('activequiz');
    showQuestions(0);
    startTimer(15);
};

next_btn.onclick = () => {
    if (que_count < questions.length - 1) {
        que_count++;
        showQuestions(que_count);
        clearInterval(counter);
        startTimer(15);
        updateQuestionCounter();
    } else {
        showResult();
    }
};

function showQuestions(index) {
    const que_text = document.querySelector('.que_text');
    let question = questions[index];
    let options = '';
    question.options.forEach((option, i) => {
        options += `
            <div class="option" onclick="optionSelected(this)">
                ${option}
            </div>
        `;
    });
    que_text.innerHTML = `<span>${question.question}</span>`;
    option_list.innerHTML = options;
}

function optionSelected(answer) {
    const userAnswer = answer.textContent;
    const correctAnswer = questions[que_count].answer;
    const allOptions = option_list.children.length;
    
    if (userAnswer === correctAnswer) {
        answer.classList.add('correct');
        score++;
    } else {
        answer.classList.add('incorrect');
        Array.from(option_list.children).forEach(option => {
            if (option.textContent === correctAnswer) {
                option.classList.add('correct');
            }
        });
    }

    Array.from(option_list.children).forEach(option => {
        option.classList.add('disabled');
    });

    next_btn.classList.add('show');
}

function startTimer(time) {
    timeText.textContent = "Time Left";
    timeCount.textContent = time;
    counter = setInterval(timer, 1000);

    function timer() {
        time--;
        timeCount.textContent = time;
        if (time <= 0) {
            clearInterval(counter);
            timeText.textContent = "Time Off";
            Array.from(option_list.children).forEach(option => {
                if (option.textContent === questions[que_count].answer) {
                    option.classList.add('correct');
                }
                option.classList.add('disabled');
            });
            next_btn.classList.add('show');
        }
    }
}

function showResult() {
    info_box.classList.remove('activeinfo');
    quiz_box.classList.remove('activequiz');
    result_box.classList.add('activeresult');
    result_box.querySelector('.score_text').innerHTML = `
        <span> Your Score is <p>${score}</p> out of <p>${questions.length}</p></span>
    `;
}

function updateQuestionCounter() {
    currentQuestion.textContent = que_count + 1;
}

