console.log('are we ready!')


//Closure :-is a function that can remember a variable from it is outer function 
// even after the outer function has been executed

function $outer(){
    let x = 10

    function $inner(){
        console.log(x)
    }

    $inner()
}

$outer()




function outer(){
    let x = 100

   return function inner(){
        console.log(x)
    }

    
}

let funct = outer()

console.log(funct())



function outerCount(){
    let count = 0;

    return function innerCount(){
        count++

        console.log(count)
        

        return count
    }
}


let see = outerCount()


console.log(see())
console.log(see())
console.log(see())
console.log(see())










//Real World Example





// function createBankAccount(initialBalance){
//     let balance = initialBalance;

//     return function checkingBalance(){
//         return balance

//         function deposit(){
//             let dep = balance + initialBalance


//             function withdrow(){
//                 let withD = dep
//             }
//         }
//     }
// }













function createBankAccount(initialBalance){
    let balance = initialBalance;

    return {
          deposit: function(amount) {
        

        if(amount > 0 || !undefined){

            balance += amount
            
            console.log(`deposited this ${amount}, current balance ${balance}`)
        }else{

            console.log(`you have insufficient balance`)
        }
        
    },

    withdrow: function(amount){
        if(amount > balance ){
           
            console.log(`you have insufficient fund`)
        }else if(amount <= 0){
            console.log(`invalid withdrowal amount`)
        } else{
            balance -= amount
            console.log(`You have withdrawn ${amount}, your current balance is ${balance}`)
        }
    },
    checkBlanace:() => {
        console.log(`Your balance is ${balance}`)
     }
    }
  
}


const aliAccount = createBankAccount(1000)

aliAccount.deposit(1000)
aliAccount.deposit(100000)
aliAccount.withdrow(10500)
aliAccount.deposit(9876400)
aliAccount.withdrow(1057830)
aliAccount.checkBlanace()





// function dealingWithBigdata(){
//    let bigData = new Array(200000).fill("Hooyo Barni")

//    console.log(bigData)
// }


// dealingWithBigdata()




function dealingWithBigdata(){
   let bigData = new Array(200000).fill("Hooyo Barni")

   bigData.push('i have pushed in a new element')

   return function(){

    console.log(bigData.at(-1))

   }
}


let var2 = dealingWithBigdata()

var2()




/**
 * USEFULNES OF CLOSURE
 * 1.You can keep the variables private without exposing them.
 * 2.You can stop variable pollution.
 * 3.You can create a function factory.
 * 4.You can keep a variable alive between multiple calls.
 */

//ONE MORE EXAMPLE

function timer(){
    let seco = 0;
    return function(){
        seco++;
        console.log(seco)
    }

}

let ex = timer()


ex()//1
ex()//2
ex()//3
ex()//4
ex()//5
ex()//6









































