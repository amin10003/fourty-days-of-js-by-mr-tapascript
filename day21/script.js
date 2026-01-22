console.log("DAY 21: QUIZ APPLICATION PROJECT")

const quizDate = [
    {
        question: "What does DOM stands for?",
        options: [
            "Document Order Model",
            "Document Object Model",
            "Data Object Method",
            "Direct Object Management"
        ],

        correct: 1
    },
    {
    question: "What does HTML stand for?",
    options: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Transfer Markup Language"
    ],
    correct: 0
},

{
    question: "What does CSS stand for?",
    options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets"
    ],
    correct: 0
},

{
    question: "What does JavaScript mainly do?",
    options: [
        "Adds interactivity to web pages",
        "Styles web pages",
        "Structures web pages",
        "Stores website files"
    ],
    correct: 0
},

{
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
        "<href>",
        "<url>",
        "<a>",
        "<link>"
    ],
    correct: 2
},

{
    question: "Which CSS property is used to change text color?",
    options: [
        "font-color",
        "color",
        "text-color",
        "font-style"
    ],
    correct: 1
},

{
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
        "getElementsByTagName()",
        "querySelectorAll()",
        "getElementsByClassName()",
        "getElementById()"
    ],
    correct: 3
},

{
    question: "Which HTML tag is used to display an image?",
    options: [
        "<pic>",
        "<photo>",
        "<image>",
        "<img>"
    ],
    correct: 3
},

{
    question: "Which CSS property controls the size of text?",
    options: [
        "size",
        "font-weight",
        "text-size",
        "font-size"
    ],
    correct: 3
},

{
    question: "Which JavaScript keyword is used to declare a variable?",
    options: [
        "variable",
        "define",
        "int",
        "var"
    ],
    correct: 3
},

{
    question: "What does API stand for?",
    options: [
        "Application Program Interaction",
        "Advanced Programming Interface",
        "Applied Program Internet",
        "Application Programming Interface"
    ],
    correct: 3
}

]


let questions = [...quizDate].sort(() => Math.random() - 0.5)

let currentQuestion = 0;

let score = 0;

let timer;

let timeLeft;




const timerEl = document.getElementById("timer")

const questionEl = document.getElementById("question")

const optionEl = document.getElementById("options")

const nextBtn = document.getElementById("next-btn")

const resultEl = document.getElementById("result")


function loadQuestion(){

    clearInterval(timer)

    timeLeft = 5;

    updateTimer()
    

    timer = setInterval(countDown, 1000);

    const q = questions[currentQuestion]

    questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`

    optionEl.innerHTML = "";

    q.options.forEach((op, index) => {
       const btn = document.createElement("button")
       btn.classList.add("option-btn");
       
       btn.textContent = op;

       btn.addEventListener("click", () =>  selectAnswer(index, true))

       optionEl.appendChild(btn);

    })


     nextBtn.style.display = "none"

     function countDown(){

        timeLeft--; 

        updateTimer()


        if(timeLeft === 0) {
            clearInterval(timer);
            
            selectAnswer(questions[currentQuestion]?.correct, false)
        }
     }

     function updateTimer(){
        timerEl.textContent = `🕒 ${timeLeft}`
     }

  

    function selectAnswer(index, shoulScore){

        clearInterval(timer);
        
        const q = questions[currentQuestion];

         const buttons = document.querySelectorAll(".option-btn");

         buttons.forEach((but) => {

            but.disabled = true

         })



        if (index === q.correct) {

            shoulScore && score++
            
           buttons[index].classList.add("correct")
           


        } else {

             buttons[index].classList.add("wrong")

             buttons[q.correct].classList.add("correct")

        }

        nextBtn.style.display = "inline-block"
    }

    
}


 nextBtn.addEventListener("click", () => {

     currentQuestion++;

    if (currentQuestion < questions.length){

        loadQuestion()

    } else{
        
        showResult();

    }

 })


 function showResult(){

    nextBtn.style.display = "none";
   
    questionEl.textContent = "Quiz Finished 🎉";
    
    const highestScore = localStorage.getItem("highestScore") || 0; 

    const isNew = score > highestScore;

     optionEl.innerHTML = "";

    if(isNew){
        localStorage.setItem("highestScore", score)
    }

    resultEl.innerHTML = ` 
     <h1>Congratulations!!! Quiz Completed </h1>

     <p>You have Scored ${score} out of ${questions.length} questions </p>
      <p>Highest Score: ${Math.max(score,highestScore)}</p>

      ${isNew ? "<p>Hey, New High Score!</p>" : ""} 
      

      <button onclick="location.reload()" style="  padding: 10px 20px;
    border: none;
    background-color: #FF00B3;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;">Restart Quiz</button>

    `
 }


loadQuestion()