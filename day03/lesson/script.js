// console.log('do you see me in the in the console')


/*
OPERATOR

1: Arithmetic
2:Assignmentt
3:Comparison
4:Relational
5:logical
6:Bitwise
7:Conditional





### Concept Of Grouping ##

**Typeof**
**instanceOf**

*/


//Arithmetic


let a = 30
let b = 40


// console.log((a + b), (a - b),(a / b), (a * b),(b - a),(a ** b),(b % a) ) //output => 70 -10 0.75 1200 10 1.215766545905693e+59 10


let f_name = 'Mohamed'
let l_name = 'Hassan'

// console.log(f_name + ' ' + l_name)


let count = 7 
console.log(count++) // post increment value here is is just 7
console.log(count) // value is 8
console.log(++count) //pre increment value here 9



//assignment operations



let x = 10;
x += 5 //output = 15
x -= 2 //output = 13
x *= 2 //output = 26

console.log(x)


//Comparison operators

//loose operator of equal and not equail sign




console.log((4 == "4"),(4 != "4"))

//strict operator of equal and not equail sign


console.log((4 === "4"),(4 !== "4"))

/*
#RULES FOR STRICT EQUAL AND NOT EQAUL OPERATORS

a:if the operands are of different types the result is false
b:if both operands are null/undefined the result is true\
c:if one of the operands is NaN the result is false

*/

let obj1 = {name: 'ali', age: 22}
let obj2 = {name: 'ali', age: 22}

console.log((obj1.name && obj1.age) === (obj2.name && obj2.age ))


// LOGICAL OPERATORS

/*&& || ?? ! */ 

//&&
console.log(false && false) //false
console.log(true && false) //false
console.log(true && true) //true
console.log(false && true) //false


console.log('ali' && 'farah' )//farah

// ||

console.log(false ||  false) //false
console.log(true || false) //true
console.log(true || true) //true
console.log(false || true) //true

console.log('ali' || 'farah' ) //ali


// negate !

console.log(!true) //false


//Nullish Coalescing Operator ??
let a1 = null ?? 'waali' //waali
console.log(a1)

let a2 = 'cafimad' ?? 'undefined'  //cafimad

console.log(a2)



// Conditional ternary operator  ? :

let isMarried = false


console.log(isMarried ? 'yes' : 'no')

//Bitwise operators
console.log("**Bitwise Operators**")


//10 in decimal
//10 in bits rep. of 1, 0 = 2

// & | << >> ~ ^



// console.log(15 & 9)


//relatinal operators

//grouping 

console.log('**Grouping**')


//()

let p = 1;
let q = 2;
let r = 3

console.log(p + r * q)

console.log((p + r) * q)



//typeOf

console.log('**TypeOf**')

console.log(typeof "ahmed") //string

console.log(typeof false)  //boolean

console.log(typeof null) 





// instanceof

console.log('**instanceof**')
































