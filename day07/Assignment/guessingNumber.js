// console.log('can i start the assignment')


/**
 * Ask the User for a number between 1 to 10
 * Upon the choice of the user, tell is the number is right or wrong
 * Depending on your replay, user will alter the input till it gets the right numer
 * Count the attempts as the user changes the inputs while looking the right number
 * Show Number of attempts in the finall
 */

// function guessingRandomNumber(){
//     console.log('Gues the right number')

//     const userSelection = prompt('please select the a number between 1 to 10')

//     const UserSelectedItem = userSelection

//     let randomNumber = Math.floor(Math.random() * 10) + 1

//     const count = userSelection

//     if( userSelection === randomNumber){
//         console.log('win win got the right number ',+ count, + ' in $ attempts')
//     } else if(userSelection > randomNumber){
//         console.log('it is too high')
//     }else if (userSelection < randomNumber){
//         console.log('it is too high')
//     }else if(userSelection < 0 || userSelection > 10) {
//         console.log('out of range please enter valid number')
//     }else{
//         console.log('please Enter valid Number')
//     }



    

    
// }

// guessingRandomNumber()


const maxNumb = 10;
const minNumb = 1

function secretNUmberGuessing(){
    const secretNumb = Math.floor(Math.random() * maxNumb) + 1

    let attempts = 0;
    let guess = null;

    console.log('Welcome to the Game!')
    console.log(`try to gues a number Btn ${minNumb} and ${maxNumb}`)

    while (guess !== secretNumb){
        const guessPrompt = prompt('Please Enter Your Guess:')
        guess = parseInt(guessPrompt)

        if(isNaN(guess) || guess < minNumb || guess > maxNumb){
            console.log(`Invalid Input, please Enter a number Between ${minNumb} and ${maxNumb}.`)

            continue
        }

        attempts++;

        if(guess < minNumb){
            console.log('It is too low. try again')
        }else if(guess > maxNumb){
            conole.log('It is too high. try again')
        }else{
            console.log(`Congrats! you've got the right Number with ${attempts} attempts`)
            
            break
        }
    }
    
    const playAgainPrompt = prompt('You wanna play again ? (Yes/No)')
    console.log(playAgainPrompt)

    playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain === "yes"){
        secretNUmberGuessing()
    }else{
        console.log('Thanks For Playing. See later!')
        
        return
       
    }

   

}

//start
secretNUmberGuessing()
