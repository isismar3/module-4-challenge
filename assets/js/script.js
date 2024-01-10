// step 1 - make a start button
// step 2 - display question
// step 3 - display next question in list of questions
// step 4 - when a question is answered incorrectly - temp do a console.log
// step 5 - when questions are all answered then we end the quiz
// step 6 - when quiz is over then we save initials




let startButton = document.getElementById("startButton")
let questionsSection = document.getElementById("questionsSection")
let menuContainer = document.getElementById("menu")

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
    },


]

function startMenu(){
    let show = menuContainer.getAttribute("data-startMenu")
    if(show === "visible") {
        menuContainer.setAttribute("data-startMenu", "none");
        menuContainer.setAttribute("style", "display: none;");
        // generateQuestions()
    }
    else{
        menuContainer.setAttribute("data-startMenu", "visible");
        menuContainer.setAttribute("style", "display: visible;");
    }

    }

startButton.addEventListener("click", function(event) {
    event.preventDefault();
    startMenu()

})


