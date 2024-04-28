var startBtn = document.getElementById("start-btn");
var nextBtn = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var nextBtn = document.getElementById("next-btn");
// const refuseBtn = document.getElementById("refuse-btn");
startBtn.addEventListener("click", startQuiz);
nextBtn === null || nextBtn === void 0 ? void 0 : nextBtn.addEventListener("click", function () {
    currentQuestionIndex++;
    setNextQuestion();
});
var shuffledQuestions;
var currentQuestionIndex;
var questionElement = document.getElementById("question");
var answersContainer = document.getElementById("answers-container");
// function refuseQuiz(){
// }
function startQuiz() {
    console.log("Started Quiz");
    startBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
    shuffledQuestions = questions.sort(function () { return Math.random() - .5; });
    currentQuestionIndex = 0;
    questionContainer.classList.remove("hidden");
    setNextQuestion();
}
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(function (answer) {
        var button = document.createElement("button");
        button.innerText = answer.text;
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answersContainer.appendChild(button);
    });
}
function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answersContainer.children).forEach(function (button) {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hidden");
    }
    else {
        startBtn.innerText = "Restart";
        startBtn === null || startBtn === void 0 ? void 0 : startBtn.classList.add("mt-10");
        startBtn.classList.remove("hidden");
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element);
    var children = answersContainer.querySelectorAll("button");
    children.forEach(function (child) {
        if (child === element) {
            if (correct) {
                child.classList.add("text-[#5cb85c]");
            }
            else {
                child.classList.add("text-[#d9534f]");
            }
        }
    });
}
function clearStatusClass(element) {
    element.classList.remove("correct");
    element.classList.remove("wrong");
}
function resetState() {
    clearStatusClass(document.body);
    nextBtn.classList.add("hidden");
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild);
    }
}
var questions = [
    {
        question: "What is Anna's favorite food",
        answers: [
            { text: "Poke", correct: true },
            { text: "Hamburger", correct: false },
            { text: "BBQ Chicken Pizza", correct: false },
            { text: "Broscht", correct: false }
        ]
    },
    {
        question: "What is Anna's biggest fear",
        answers: [
            { text: "Spiders", correct: false },
            { text: "Too personal to share", correct: true },
            { text: "She has no fear", correct: false },
            { text: "The ocean", correct: false }
        ]
    },
    {
        question: "Which class is Anna not taking this semester?",
        answers: [
            { text: "Camping", correct: false },
            { text: "Family relations", correct: true },
            { text: "Encapsulation Design", correct: false },
            { text: "Auto ownership and maintainance", correct: false }
        ]
    },
    {
        question: "Anna likes",
        answers: [
            { text: "Beef more than chicken", correct: false },
            { text: "Noodles more than rice", correct: false },
            { text: "Stair climber more than treadmill", correct: false },
            { text: "Tomatoes more than cucumbers", correct: true }
        ]
    }
];
