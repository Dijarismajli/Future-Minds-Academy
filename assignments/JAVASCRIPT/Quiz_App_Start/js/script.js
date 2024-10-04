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
const total_que = document.querySelector('.total_que');

let currentQuestion = 0;
let timeTick = 10;
let timerLineA = 0;
let timerLineAnime;
let ticker;

//i qet boksat
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
    reset()
    que_text.textContent = questions[q].question;//e qet pytjen
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
    //i qet pytjet amo ju jep limit deri sa jan pytjet
    if (currentQuestion != questions.length - 1) {
        currentQuestion++;
    }

    total_que.textContent = currentQuestion + " / " + questions.length + " questions";//i qet numrin e pytjev
}

next_btn.addEventListener('click', function () {
    loadQuestion(currentQuestion);
})

function optionClicked() {
    next_btn.style.display = "inline";//e qet next butonin
    clearInterval(ticker);// e fshin intervalen
    clearInterval(timerLineAnime);// e fshin intervalen

    disableQ()//e thirr funksion qe me bo disable opcionet mos me mujt me kliku ma shum se
}
//i qet sekondat
function timer() {
    timer_sec.textContent = timeTick;
    if (timeTick != 0) {
        timeTick--;
    }
    else {
        disableQ()
        next_btn.style.display = "inline";//e qet next butonin masi kalojn sekondat
    }

}
//e qet vijen e kaltert
function timerLineFill() {
    time_line.style.width = timerLineA + 'px';
    if (timerLineA <= 548) {
        timerLineA += 5.3;
    }
}
// e nal sekondat vijen edhe i nal nqat sekond qe e klikon opcionin 
function reset() {
    timer_sec.textContent = "15";
    timeTick = 9;
    timerLineA = 0;
    timerLineAnime = setInterval(timerLineFill, 100);
    ticker = setInterval(timer, 1000);
}

function disableQ() {
    option_list.innerHTML = '';
    // e bon mos me mujt me kliku opcionet masi kalon koha
    for (let i = 0; i < questions[currentQuestion - 1].options.length; i++) {
        option_list.innerHTML += `
        <div class="option disabled">
            <span>${questions[currentQuestion - 1].options[i]}</span>
        </div>
        `;
    }
}