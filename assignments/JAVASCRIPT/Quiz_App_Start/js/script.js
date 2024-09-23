const start_btn = document.querySelector('.start_btn');
const info_box = document.querySelector('.info_box');
const exit_quiz = document.querySelector('.exit_quiz');
const continue_btn = document.querySelector('#continue_btn');
const quiz_box = document.querySelector('.quiz_box');
const que_text = document.querySelector('.que_text');
const option_list = document.querySelector('.option_list');
const next_btn = document.querySelector('.next_btn');

let currentQuestion = 0;

start_btn.addEventListener('click', function () {
    info_box.classList.add('activeInfo');
});

exit_quiz.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
});

continue_btn.addEventListener('click', function () {
    info_box.classList.remove('activeInfo');
    quiz_box.classList.add('activeQuiz');

    quizStart(currentQuestion);
});

function quizStart(q) {
    que_text.textContent = questions[q].question;
    option_list.innerHTML = '';

    for (let i = 0; i < questions[q].options.length; i++) {
        option_list.innerHTML += `
        <div class="option" onclick="optionClicked()">
            <span>${questions[q].options[i]}</span>
        </div>
        `;
    }
    next_btn.style.display = "none";
    if (currentQuestion != questions.length - 1) {
        currentQuestion++;
    }

}

next_btn.addEventListener('click', function () {
    quizStart(currentQuestion);
})

function optionClicked() {
    next_btn.style.display = "inline";
}
