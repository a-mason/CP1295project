const questions = [
    {   // question 1
        question: "What is Mario's brother's name?",
        answers: ["Luigi", "Wario", "Yoshi", "Toad"],
        correct: 0
    },
    {   // question 2
        question: "In which year was Mario first introduced?",
        answers: ["1978", "1981", "1984", "1987"],
        correct: 1
    },
    {   // question 3
        question: "What is the name of the creator of Mario?",
        answers: ["Shigeru Miyamoto", "Satoshi Tajiri", "Gunpei Yokoi", "Hideo Kojima"],
        correct: 0
    },
    {   // question 4
        question: "Which of these is not a shell color in Mario Kart?",
        answers: ["Red", "Blue", "Yellow", "Green"],
        correct: 2
    },
    {   // question 5
        question: "Who is princess that Mario is trying to rescue in Super Mario Land?",
        answers: ["Princess Toadstool", "Princess Peach", "Princess Daisy", "Princess Rosalina"],
        correct: 2
    },
    {   // question 6
        question: "How many worlds are there in the original Super Mario Bros. game?",
        answers: ["6", "7", "8", "9"],
        correct: 2
    },
    {   // question 7
        question: "What was Mario's original name before he was called Mario?",
        answers: ["Mr. Video", "Jumpman", "Redcap", "Carpenter"],
        correct: 1
    },
    {   // question 8
        question: "DUPE?",
        answers: ["6", "7", "8", "9"],
        correct: 2
    },
    {   // question 9
        question: "In which game did Mario first have the ability to ride Yoshi?",
        answers: ["Super Mario Bros", "Super Mario World", "Super Mario 64", "Super Mario Sunshine"],
        correct: 1
    },
    {   // question 10
        question: "In Super Mario 64, how does Mario travel between different worlds?",
        answers: ["Portals", "Paintings", "Pipes", "Star Doors"],
        correct: 1
    },
    {   // question 11
        question: "In Paper Mario, which partner joins Mario first?",
        answers: ["Goombario", "Kooper", "Bombette", "Parakarry"],
        correct: 0
    },
    {   // question 12
        question: "In Paper Mario: The Thousand-Year Door, what does Mario collect to open the door?",
        answers: ["Shining Orbs", "Pure Hearts", "Crystal Stars", "Gem Stones"],
        correct: 2
    },
    {   // question 13
        question: "In the first Super Mario Bros. game, what color were Mario's overalls?",
        answers: ["Red", "Blue", "Brown", "Yellow"],
        correct: 0
    },
    {   // question 14
        question: "In Super Mario Sunshine, what is the name of Mario's water-spraying partner?",
        answers: ["W.A.T.E.R.", "F.L.U.D.D.", "L.U.I.G.I.", "S.P.L.A.S.H."],
        correct: 1
    },
    {   // question 15
        question: "Who is the main villain of Super Mario RPG?",
        answers: ["Bowser", "Geno", "Exor", "Smithy"],
        correct: 3
    },
];

let currentQuestion = 0;

let loadQuestion = () => {
    let question = questions[currentQuestion];
    document.getElementById("questionNumber").textContent = currentQuestion + 1;
    document.getElementById("questionDisplay").textContent = question.question;
    
    for (let i = 0; i < question.answers.length; i++) {
        document.getElementById("button" + i).textContent = question.answers[i];
    }
}

let checkAnswer = (selected) => {
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