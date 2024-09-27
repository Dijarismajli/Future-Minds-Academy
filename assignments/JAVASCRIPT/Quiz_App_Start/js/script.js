const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const next_btn = document.querySelector('.next_btn');
const timer_sec = document.querySelector('.timer_sec');
const time_line = document.querySelector('.time_line');

let currentQuestion = 0;
let timeTick = 10;
let timerLine = 0;

//i shtin n funksion butonat
start_btn.addEventListener('click', function () {
    info_box.classList.add('activeInfo');
});

exit_quiz.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');

    loadQuestion(currentQuestion);
});

function loadQuestion(q) {
    timeTick = 10;
    timerLine = 0;
    timerLineA = 0;
    que_text.textContent = questions[q].question;//i qet pytjet
    option_list.innerHTML = '';
    //i qet opcionet
    for (let i = 0; i < questions[q].options.length; i++) {
        option_list.innerHTML += `
        <div class="option" onclick="optionClicked()">
            <span>${questions[q].options[i]}</span>
        </div>
        `;
    }
    next_btn.style.display = "none";//e jek butonin next
    //i qet kejt pytjet amo nuk i len me kalu numrin
    if (currentQuestion != questions.length - 1) {
        currentQuestion++;
    }
}

next_btn.addEventListener('click', function () {
    loadQuestion(currentQuestion);
})

function optionClicked() {
    next_btn.style.display = "inline";
}

let ticker = setInterval(timer, 1000); // every 1 second call the function timer()
//i qet secondat edhe i len me ec deri n 0
function timer() {
    timer_sec.textContent = timeTick;
    if (timeTick != 0) {
        timeTick--;
    }
    else {
        // aftr Timer is 0
        option_list.innerHTML = '';
        //i bon opcionet mos me mujt me kliku masi t kalon koha
        for (let i = 0; i < questions[currentQuestion - 1].options.length; i++) {
            option_list.innerHTML += `
            <div class="option disabled">
                <span>${questions[currentQuestion - 1].options[i]}</span>
            </div>
            `;
        }
        next_btn.style.display = "inline";
    }
}
//e qet vijen e kaltert
let timerLineAnime = setInterval(timerLineFill, 100);
let timerLineA = 0;
function timerLineFill() {
    time_line.style.width = timerLineA + 'px';
    timerLineA += 5.3;
}
