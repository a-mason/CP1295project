const questions = [
    {
        question: "What is Mario's brother's name?",
        answers: ["Luigi", "Wario", "Yoshi", "Toad"],
        correct: 0
    },
    {
        question: "In which year was Mario first introduced?",
        answers: ["1978", "1981", "1984", "1987"],
        correct: 1
    },
    {
        question: "What is the name of the creator of Mario?",
        answers: ["Shigeru Miyamoto", "Satoshi Tajiri", "Gunpei Yokoi", "Hideo Kojima"],
        correct: 0
    }
];

let currentQuestion = 0;

function loadQuestion() {
    let question = questions[currentQuestion];
    document.getElementById("questionNumber").textContent = currentQuestion + 1;
    document.getElementById("questionDisplay").textContent = question.question;
    
    for (let i = 0; i < question.answers.length; i++) {
        document.getElementById("button" + i).textContent = question.answers[i];
    }
}

function checkAnswer(selected) {
    const question = questions[currentQuestion]
    const result = document.getElementById("result")
    
    if (selected == question.correct) {
        result.textContent = "Correct!"
        result.style.color = "green"
    } else {
        result.textContent = "False!"
        result.style.color = "red"
    };

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion()
    } else {
        result.textContent += "All questions answered!"
    };
}

document.addEventListener("DOMContentLoaded", () => {
    loadQuestion()
    for (let i = 0; i < questions.length; i++) {
    document.getElementById("button" + i).addEventListener("click", function() {
        checkAnswer(i)
    });
}
});