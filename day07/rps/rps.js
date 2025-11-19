// console.log('when are we gaming?')


function rockPaperSciossor(){
    console.log('we are to start the game')

    const userChoicePrompt = prompt("Enter Rock, Paper or Scissor")

    let userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1


    if ( randomNumber === 1 ) {
        computerChoice = 'rock'
    }else if (randomNumber === 2){
        computerChoice = 'paper'
    }else {
        computerChoice = 'scissor'
    }

    console.log('User selected:', userChoice)
    console.log('Computer selected:', computerChoice)

    if(
         (userChoice === 'rock' && computerChoice === 'scissor') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissor' && computerChoice === 'paper')
     ) {
        console.log('User: Win win Chicken Diner!')
    } else if(
         (userChoice === 'rock' && computerChoice === 'rock') ||
        (userChoice === 'paper' && computerChoice === 'paper') ||
        (userChoice === 'scissor' && computerChoice === 'scissor')
    )  {
        console.log('The game is Tie')
    }else if(
        (userChoice === 'rock' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'scissor') ||
        (userChoice === 'scissor' && computerChoice === 'rock')
        
    ) {
        console.log('Computer:  Win win Chicken Diner!')
    } else {
        console.log('Please give valid input')
    }


    const playAgainPrompt = prompt("Do you feel like playing again? (yes/no)")

       const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : 'No' ;



       if(playAgain === 'yes') {
      
        rockPaperSciossor()

       }else {console.log('Thanks for playing. See you next Time !')}
         

    }rockPaperSciossor()


//to start the game

// rockPaperSciossor()




