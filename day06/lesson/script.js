// console.log('hi how are you')
//function is something which maps its input to its output  



//Declare or define funtion

// function printThis(){
//     console.log('print this // this is the body of the fun')
//}

//call or invoke the fun

// printThis()


// let prinMe = function(){
//     console.log('waayaabnay!')
// }

// prinMe()


// function sum(a, b){
//     return a + b
// }

// result = sum((6+6), (8+8))

// console.log(result)



/*
parameters are the placeholders  or the variables that we pass as an input to the function
while we declaring or defining hte function .

Arguments are the actual values we replace with the parameters
while invoking or calling the function

*/

function double(x){
    return 2 ** x
}

result = double(8)

// console.log(result)

//default parameters

function cal(a  = 4, b = 20){
    return((a + b) * 65)
}

// result2 = cal(54, 32)

// console.log(result2)


//rest parameters always neec to be the last 

// function calculateThis(x, y, ...haraa){
//  console.log(x, y, haraa)
// }

// calculateThis(1,2,3,4,5,6,7,)


//Nested function



// function outer(){
//     console.log('outer')

//     function inner(){
//         console.log('inner')
//     }
   
//     inner()
// }


// let see = outer()
// console.log(see)


//callback fun

// const toCalBuz = true

// function foo(func){
//     console.log("foo")
//      if(toCalBuz){
     
//          func()
        
//     }
   
// }

// let func  = function(){
//     console.log("buuuz")
// }

// foo(function() {
//     console.log("buz")
// })


//pure function => is a function that returns the same output for the same input


// let greetingMsg = "hello"  //side effect

function greeting(name){
 return "hello" + " " + name
}

// console.log(greeting("moha"))
// console.log(greeting("moha"))
// console.log(greeting("moha"))
// console.log(greeting("moha"))



//Higher Oder function hof


//useful to create wrappers


function getCamera(camera){
    camera();
}


getCamera(function(){
    console.log('Sony')
})



function returnFunc(){
    return function(){
        console.log('hello')
    }
}


const getrReturnFunc = returnFunc()


getrReturnFunc();

//arrow function, shortway of writing function


// let greetMe = (name) => console.log(`Hi, ${name}`)  


// greetMe('Mohamed')




//IIFE(Immediately Invoked Function Expression)



(function(){
    console.log("IIFE")
}()
)









//callStack

//Recursion

// function foo(){
//    return console.log( foo())
// }



// foo()



function fetchWater(count){
    console.log('Fetching Water...', count)
    if(count === 0){
        console.log('No more water is left to fecth')

        return
    }
    fetchWater(count - 1)
}

fetchWater(5)

