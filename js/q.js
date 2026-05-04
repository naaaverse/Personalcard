const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "What is the highest mountain in the world?",
        options: ["K2", "Kangchenjunga", "Lhotse", "Mount Everest"],
        correct: "Mount Everest"
    },
    {
        question: "What is the largest ocean in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    }
];

const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const option1El = document.getElementById('option1');
const option2El = document.getElementById('option2');
const option3El = document.getElementById('option3');
const option4El = document.getElementById('option4');
const option1LabelEl = document.getElementById('option1-label');
const option2LabelEl = document.getElementById('option2-label');
const option3LabelEl = document.getElementById('option3-label');
const option4LabelEl = document.getElementById('option4-label');
const nextButton = document.getElementById('next-button');
const answerEls = document.querySelectorAll('.answer');

let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionNumberEl.innerText = currentQuestion + 1;
    questionTextEl.innerText = currentQuizData.question;
    option1LabelEl.innerText = currentQuizData.options[0];
    option2LabelEl.innerText = currentQuizData.options[1];
    option3LabelEl.innerText = currentQuizData.options[2];
    option4LabelEl.innerText = currentQuizData.options[3];
    option1El.value = currentQuizData.options[0];
    option2El.value = currentQuizData.options[1];
    option3El.value = currentQuizData.options[2];
    option4El.value = currentQuizData.options[3];
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.value;
        }
    });
    return answer;
}

nextButton.addEventListener('click', () => {
    const answer = getSelected();
    if(answer) {
        if(answer === quizData[currentQuestion].correct) {
            score++;
        }

        currentQuestion++;

        if(currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            alert(`You scored ${score}/${quizData.length}`);
            location.reload();
        }
    } else {
        alert('Please select an answer');
    }
});
