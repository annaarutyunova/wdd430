const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
// const refuseBtn = document.getElementById("refuse-btn");
startBtn.addEventListener("click", startQuiz);
nextBtn?.addEventListener("click", () => {
  currentQuestionIndex++
  setNextQuestion()
});
let shuffledQuestions: { question: string, answers: { text: string, correct: boolean }[] }[];
let currentQuestionIndex: number;
const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers-container");



// function refuseQuiz(){

// }

function startQuiz(){
  console.log("Started Quiz")
  startBtn.classList.add("hidden");
  nextBtn.classList.remove("hidden");
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainer.classList.remove("hidden");
  setNextQuestion()

}

function setNextQuestion(){
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question){
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement("button")
    button.innerText = answer.text
    if(answer.correct){
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answersContainer.appendChild(button)
  })
}

function selectAnswer(e){
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answersContainer.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if(shuffledQuestions.length > currentQuestionIndex + 1){
    nextBtn.classList.remove("hidden")
  } else {
    startBtn.innerText = "Restart"
    startBtn?.classList.add("mt-10")
    startBtn.classList.remove("hidden")
  }

}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  const children = answersContainer.querySelectorAll("button")
  children.forEach(child => {
    if(child === element){
      if(correct){
        child.classList.add("text-[#5cb85c]")
      } else {
        child.classList.add("text-[#d9534f]")
      }
    }
  })
  
}


function clearStatusClass(element){
  element.classList.remove("correct")
  element.classList.remove("wrong")
}

function resetState(){
  clearStatusClass(document.body)
  nextBtn.classList.add("hidden")
  while (answersContainer.firstChild) {
    answersContainer.removeChild(answersContainer.firstChild)
  }
}

const questions = [
  {
    question: "What is Anna's favorite food",
    answers: [
      {text: "Poke", correct: true},
      {text: "Hamburger", correct: false},
      {text: "BBQ Chicken Pizza", correct: false},
      {text: "Broscht", correct: false}
    ]
  },
  {
    question: "What is Anna's biggest fear",
    answers: [
      {text: "Spiders", correct: false},
      {text: "Too personal to share", correct: true},
      {text: "She has no fear", correct: false},
      {text: "The ocean", correct: false}
    ]
  },
  {
    question: "Which class is Anna not taking this semester?",
    answers: [
      {text: "Camping", correct: false},
      {text: "Family relations", correct: true},
      {text: "Encapsulation Design", correct: false},
      {text: "Auto ownership and maintainance", correct: false}
    ]
  },
  
  {
    question: "Anna likes",
    answers: [
      {text: "Beef more than chicken", correct: false},
      {text: "Noodles more than rice", correct: false},
      {text: "Stair climber more than treadmill", correct: false},
      {text: "Tomatoes more than cucumbers", correct: true}
    ]
  }
]