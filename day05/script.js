// console.log('How is it going day05')

//Mastering Loops and  iteration in javascript


/*
#for loop :- "is best when we know exactly how many times we need to run a block of code"
*/

// for(let i = 1; i <= 5; i++){
//    console.log(`${i}:How is it going day${i} and the date today is ${new Date()}`)
// }


//addition of even number btn 1-100
// function addevenNumbers(){
//    let i = 1
//    if(i % 2 === 0){
//       return i+
//    }
// }

// let sum = 0;

// for (let i = 1; i <= 100; i++){
//    if(i % 2 === 0){
//      sum = sum + i;
//    }

//    console.log(`${i}:- ${sum}`)
// }



// let sub = 0;
// for(i = 100; i >= 0; i--){
//    if(i % 3 === 0){
//       sub += i
//    }


// }

//    console.log(`${i}:- let's start counting: ${sub}`)





// let language = "javaScript";

// for (let i = 0; i < language.length - 1; i++ ){
//    console.log(language.charAt(i))
// }



//Nested loop


for(i= 1; i <= 3; i++){
   for(let j = 1; j <= 3; j++){
      console.log("Raw", i, "column", j )
   }
}



// Break : stopping the iteration at all
//continue : skipping a particular part of iteration


for(let i = 1; i <= 10; i++){
   if(i === 7) continue //break
   console.log(i)
}


for( i = 1, j = 10; i <= 8 && j >= 2; i++, j--){
   console.log(i , j)
}