const questions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Delhi", correct: true },
      { text: "Mumbai", correct: false },
      { text: "Kolkata", correct: false },
      { text: "Chennai", correct: false },
    ],
  },
  {
    question: "What is the capital of USA?",
    answers: [
      { text: "Washington DC", correct: true },
      { text: "New York", correct: false },
      { text: "Los Angeles", correct: false },
      { text: "San Francisco", correct: false },
    ],
  },
  {
    question: "What is the capital of UK?",
    answers: [
      { text: "London", correct: true },
      { text: "Manchester", correct: false },
      { text: "Birmingham", correct: false },
      { text: "Liverpool", correct: false },
    ],
  },
  {
    question: "What is the capital of Australia?",
    answers: [
      { text: "Canberra", correct: true },
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Perth", correct: false },
    ],
  },
  {
    question: "What is the capital of Japan?",
    answers: [
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Kyoto", correct: false },
      { text: "Hiroshima", correct: false },
    ],
  },
];

//explain what is DOM and how to answer it during interview?
//DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

//whatt is programming interface?
//A programming interface is a set of rules and protocols that allow different software applications to communicate with each other. It defines how software components should interact and exchange data.

//is dom API?
//Yes, the DOM is an API (Application Programming Interface) that allows programs and scripts to interact with web documents. It provides a way to access and manipulate the content, structure, and style of a web page.

//what is document?
//The Document interface represents any web page loaded in the browser and serves as an entry point into the web page's content, which is the DOM tree.

//what is dom tree?
//The DOM tree is a representation of the structure of a document. It is a hierarchical structure that consists of nodes representing elements, attributes, and text content in the document.

//why do we use getElementById?
//We use getElementById to access and manipulate an element in the DOM by its ID. This method allows us to select a specific element on the page and perform actions such as changing its content, style, or attributes.
const answer = document.getElementById("answer");
const question = document.getElementById("question");
const nextBtn = document.getElementById("btn");

// console.log(answer);
// console.log(question);
// console.log(nextBtn);

let currentQuestionIndex = 0;
let score = 0;

function start() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerText = "Next";
  showQuestions();
}

function showQuestions() {
  let currentQuestion = questions[currentQuestionIndex];

  let currentQuestionNo = currentQuestionIndex + 1;
  question.innerText = `${currentQuestionNo}.${currentQuestion}}`;
    currentQuestion.foreach((value) => {
      
  });
}
