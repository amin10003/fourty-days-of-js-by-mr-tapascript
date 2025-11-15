// for (let i = 0; i < 50; i++){
//     console.log('day02')

// }


// variables are used to store data in js
// 'var' funtion-scope, can be redeclared (not recommended)
// 'let' block-scpoe, can be reassigned
// 'const' Block-scope, **cannot** be reassigned


let fruits = 'mango'

let vegetables = 'carrot'


fruits = vegetables  //output = carrot because all primitive values are passby values. initial value of vegetables is never ultered
// fruits = 'kiwi'


// console.log(fruits)

// console.log(vegetables)

let person = {
    name:'ahmed',
    age: 22
}

let person2 = {
    name: 'fatuma',
    age: 18
}



person = person2

console.log(person)


// console.log(person2)


//primitive and non-primitive data types