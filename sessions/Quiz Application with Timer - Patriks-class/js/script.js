const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const timer_sec = document.querySelector('.timer_sec');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const total_que = document.querySelector('.total_que');
const next_btn = document.querySelector('.next_btn');
const result_box = document.querySelector('.result_box');
const score_text = document.querySelector('.score_text');

let timer = 15;
let activeQuestion = 0;
let points = 0;

start_btn.addEventListener('click', function () {
    info_box.classList.add('activeInfo');
});

exit_quiz.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');
    startQuiz();
    loadQuestions(activeQuestion);
});

next_btn.addEventListener('click', function () {
    next_btn.classList.remove('show');
    if (activeQuestion == 4) {
        next_btn.textContent = 'Finish';
    }

    if (activeQuestion < questions.length - 1) {
        activeQuestion++;
        loadQuestions(activeQuestion);
    }
    else {
        quiz_box.classList.remove('activeQuiz');
        result_box.classList.add('activeResult');
        score_text.textContent = points + '/' + questions.length;
    }
});

function startQuiz() {
    let timeCount = setInterval(() => {
        timer_sec.textContent = timer;
        if (timer > 0) { timer-- }
        else { clearInterval(timeCount); }
    }, 1000);
}

function loadQuestions(q) {

    let allOptions = questions[q].options;
    que_text.textContent = questions[q].question;
    option_list.innerHTML = '';

    for (let i = 0; i < allOptions.length; i++) {
        option_list.innerHTML += `
            <div class="option" onclick="checkAnswer(${q}, ${i}, this)">
                <span>${allOptions[i]}</span>
            </div>
        `;
    }
    total_que.textContent = questions[q].numb + '/' + questions.length + ' questions';
}

function checkAnswer(q, o, opt) {
    console.log(opt);
    next_btn.classList.add('show');

    for (let i = 0; i < questions[q].options.length; i++) {
        option_list.children[i].classList.add('disabled');
        if (questions[q].options[i] == questions[q].answer) {
            option_list.children[i].classList.add('correct');
        }
    }
    if (questions[q].answer == questions[q].options[o]) {
        opt.classList.add('correct');
        points++;
    }
    else {
        opt.classList.add('incorrect');
    }

}