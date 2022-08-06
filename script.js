const quizData = [
    {
        question: " An HTML document can contain _____",
        a: "Attributes",
        b: "Tags",
        c: "Raw text",
        d: "All the answers are true",
        correct: "d",
    },
    {
        question: "The HTML document contains a root tag called ____",
        a: "Head",
        b: "Title",
        c: "Body",
        d: "Html",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "If we want to place text around an image, which CSS property should we use?",
        a: "push",
        b: "flow",
        c: "align",
        d: "wrap",
        correct: "b",
    },
    {
        question: "If we want to use a nice green dotted border around an image, which css property are we going to use?",
        a: "border-line",
        b: "border-style",
        c: "border-decoration",
        d: "border-color",
        correct: "d",
    },
    {
        question: "Which of the following keywords is used to define a variable in Javascript?",
        a: "Var",
        b: "let",
        c: "Both A and B",
        d: "None of these",
        correct: "c",
    },
    {
        question: "Which of the following methods is used to access HTML elements using Javascript??",
        a: "getElementbyId",
        b: "getElementByClassName",
        c: "Both A and B",
        d: "None of these",
        correct: "c",
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        a: "const",
        b: "var",
        c: "let",
        d: "constant",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        else{
            submitBtn.textContent="Wrong answer! correct is "+quizData[currentQuiz].correct;

        }
        currentQuiz++;
        setTimeout(() => {
            if (currentQuiz < quizData.length) {
                submitBtn.textContent="Submit";
                document.getElementById("submit").style.backgroundColor=  "rgb(211, 22, 22)";
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                    
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }, 1000);
    }
});