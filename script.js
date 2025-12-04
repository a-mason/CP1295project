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
        question: "Which Super Mario game was the first in the series to feature live orchestrated music?",
        answers: ["Super Mario 64", "Super Mario Sunshine", "Super Mario Galaxy", "Super Mario Odyssey"],
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
let randomQuestions = []
let currentScore = 0;

let loadQuestion = () => {
    let question = randomQuestions[currentQuestion];
    document.getElementById("questionNumber").textContent = currentQuestion + 1;
    document.getElementById("questionDisplay").textContent = question.question;

    for (let i = 0; i < question.answers.length; i++) {
        document.getElementById("button" + i).textContent = question.answers[i];
    }
}

let getRandomQuestions = () => {
    let allQuestions = [...questions]

    for (let index = 0; index < 10; index++) {
        let randomIndex = Math.floor(Math.random() * allQuestions.length)
        randomQuestions.push(allQuestions[randomIndex])
        allQuestions.splice(randomIndex, 1)
    }
    console.log(randomQuestions)
}

let checkAnswer = (selected) => {
    const question = randomQuestions[currentQuestion]
    const result = document.getElementById("result")

    if (selected == question.correct) {
        currentScore++;
        document.getElementById("currentScore").textContent = currentScore;
        result.textContent = "Correct!"
        result.style.color = "green"
        animateMario(true)
    } else {
        result.textContent = "False!"
        result.style.color = "red"
        animateMario(false)
    };

    currentQuestion++;
    if (currentQuestion < randomQuestions.length) {
        loadQuestion()
    } else {
        result.textContent += " All questions answered!"
    };
}

let animateMario = (isCorrect) => {
    const marioImages = [
        "images/marioPoseOne.png",
        "images/marioPoseTwo.png",
        "images/marioPoseThree.png",
        "images/marioPoseFour.png",
        "images/marioPoseFive.png",
        "images/marioPoseSix.png",
        "images/marioPoseSeven.png",
        "images/marioPoseEight.png"
    ]

    const marioImg = document.querySelector(".mario-character")
    let frameIndex = 0
    const endFrame = isCorrect ? 6 : 7

    const interval = setInterval(() => {
        if (frameIndex <= 5) {
            marioImg.src = marioImages[frameIndex]
            frameIndex++
        } else {
            clearInterval(interval)
            marioImg.src = marioImages[endFrame]

            setTimeout(() => {
                marioImg.src = marioImages[0]
            }, 1000);
        }
    }, 100);
};

document.getElementById("footerToggle").addEventListener("click", () => {
    const form = document.getElementById("addQuestionForm")
    const toggle = document.getElementById("footerToggle")
    form.hidden = !form.hidden
    toggle.textContent = form.hidden ? "▼ Click to add another question ▼" : "▲ Click to hide ▲"
})

document.getElementById("submitQuestion").addEventListener("click", () => {
    const newQ = document.getElementById("newQuestion").value.trim()
    const ans0 = document.getElementById("answer0").value.trim()
    const ans1 = document.getElementById("answer1").value.trim()
    const ans2 = document.getElementById("answer2").value.trim()
    const ans3 = document.getElementById("answer3").value.trim()
    const correct = parseInt(document.getElementById("correctAnswer").value)

    if (newQ && ans0 && ans1 && ans2 && ans3) {
        questions.push({
            question: newQ,
            answers: [ans0, ans1, ans2, ans3],
            correct: correct
        })

        let activeQuestionNumber = document.getElementById("questionNumber").textContent
        let activeQuestion = document.getElementById("questionDisplay").textContent

        document.getElementById("questionDisplay").textContent = "Your new question has been added!"

        document.getElementById("newQuestion").value = ""
        document.getElementById("answer0").value = ""
        document.getElementById("answer1").value = ""
        document.getElementById("answer2").value = ""
        document.getElementById("answer3").value = ""
        document.getElementById("correctAnswer").value = "0"

        document.getElementById("addQuestionForm").hidden = true
        document.getElementById("footerToggle").textContent = "Click to add another question ▼"

        setTimeout(() => {
            document.getElementById("questionNumber").textContent = activeQuestionNumber
            document.getElementById("questionDisplay").textContent = activeQuestion
        }, 3000);

    }
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentScore").textContent = currentScore
    getRandomQuestions()
    for (let i = 0; i < 4; i++) {
        document.getElementById("button" + i).addEventListener("click", () => {
            checkAnswer(i)
        });
    }
    loadQuestion()
});