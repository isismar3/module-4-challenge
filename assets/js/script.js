// step 1 - make a start button
// step 2 - display question
// step 3 - display next question in list of questions
// step 4 - when a question is answered incorrectly - temp do a console.log
// step 5 - when questions are all answered then we end the quiz
// step 6 - when quiz is over then we save initials




let startButton = document.getElementById("start-button")
let questionsSection = document.getElementById("questionsSection")
let menuContainer = document.getElementById("menu")
let score;
let nextQuestion;
let i = 0;
let timerInterval;
const timerEl = document.getElementById("timer")
const questionDiv = document.getElementById("questions")



const questions = [
    {
        question: "What color is the grass?",
        choices: [
            "green", "purple", "brown", "blue",
        ],
        answer: 0
    },
    {
        question: "What color is the sky?",
        choices: [
            "green", "purple", "brown", "blue",
        ],
        answer: 3
    },
    {
        question: "What is the rarest M&M color?",
        choices: [
            "green", "purple", "brown", "blue",
        ],
        answer: 2
    }
]

function startMenu(){
    let show = menuContainer.getAttribute("data-startMenu")
    if(show === "visible") {
        menuContainer.setAttribute("data-startMenu", "none");
        menuContainer.setAttribute("style", "display: none;");
        startQuiz(questions)
    }
    else{
        menuContainer.setAttribute("data-startMenu", "visible");
        menuContainer.setAttribute("style", "display: visible;");
    }

    }
startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startMenu()
    timerInterval = setInterval(updateTimer, 1000);
})

function startQuiz(item) {
    let score = 0;

        const content = item[i]; 
        if (content) {
        const question = content.question;
        const answer = content.answer;
        const choices = content.choices;
    //     console.log(choices);
    //     console.log(answer);
    //     console.log(content);
    //    console.log(question);
        const divEl = document.getElementById("questions")
        const questionEl = document.createElement("h2")
        questionEl.setAttribute("class", "previous");
        questionEl.textContent = question;
        divEl.append(questionEl);
        for (let index = 0; index < choices.length; index++) {
            const buttonEl = document.createElement("button");
            buttonEl.textContent = choices[index];
            buttonEl.value = index;
            const breakEl = document.createElement("br");
            buttonEl.setAttribute("class", "previous");
            breakEl.setAttribute("class", "previous");
            divEl.append(buttonEl);
            divEl.append(breakEl);

        }}
    };
    questionDiv.addEventListener("click", function(event) {
        event.preventDefault();
        if (event.target.tagName === "BUTTON")
        { i++
            const answer = questions[i - 1].answer
            console.log(answer);
            if (parseInt(event.target.value) === answer) {
            const correct = document.getElementById("correct");
            correct.textContent = "correct"
            }
            else {
                const correct = document.getElementById("correct");
                correct.textContent = "wrong"
            }
            display()
            startQuiz(questions);
        }
    })
    function display() {
        const previous = document.querySelectorAll(".previous")
        for (let index = 0; index < previous.length; index++){
            previous[index].style.display = "none"
        }
    }



const targetTimeInSeconds = 1 * 60;

let remainingTime = targetTimeInSeconds;
function updateTimer() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    timerEl.textContent = `${minutes}:${seconds}`
    console.log(`${minutes}:${seconds}`);
    
    // If the timer reaches zero, you can perform any action here
    if (remainingTime === 0) {

        console.log("Timer expired!");
        clearInterval(timerInterval);
    }
    else if(i  === questions.length) {
        console.log("finish question");
        clearInterval(timerInterval);
        const correct = document.getElementById("correct");
            correct.textContent = "Quiz Finished!"
    }


    remainingTime--;
}

// Update the timer every second

