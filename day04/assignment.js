//## 1. What will be the output of this code snippet and why?
 //```js
 let day = "Monday";

switch (day) {
    case "monday":
        console.log("It's the start of the week.");
        break;
    default:
        console.log("It's a normal day.");
}


/*
Monday because the monday case is true
*/



/*
## 2. Build an ATM Cash Withdrawal System
Rajan goes to the Axis bank ATM. He enters an amount to withdraw. The ATM only allows multiples of 100. Print “Withdrawal successful” if valid, otherwise print “Invalid amount”.

*/


let amount = 15000 ;

function ATM_Machine(amount){
    if(amount < 1000){
        return 'withdrawal succeful '
    } else if (amount > 1000) {
        return 'insufficient balance'
    }else {
        'invalid amount'
    }
}

console.log(ATM_Machine(amount))


//this assignment is from day04, above logic accepts the first two cases but the last case is never executed if when i made it to be the second case?



//#4  .i did a separate calculator but using function only, i could not do it with switch case.






