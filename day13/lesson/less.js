"use strict";

console.log('lets continue!')



//this keyword

//thiskeyword || window object

console.log('this keyword at the global', this); //window


//rules of  binding

//aspect of Object
//aspect of function


//inside of object => implicit binding



const empl = {
    id: 12321,
    fName: 'guled',
    lName: 'jimale',

    returnThis: function() {
        return this;
    },
    getFullName: function(){
        return `${this.fName} ${this.lName}`
    }
}

console.log("Employee Id", empl.id)
console.log("this is the employee object", empl.returnThis(),  empl.getFullName())





const tom = {
    name: 'Tom',
    age: 7
}



const jerry = {
    name: "Jerry",
    age: 5
}


function greetMe(obj){
    obj.logMessage = function (){
        console.log(`${this.name} is ${this.age} years old`)
    }

    console.log(obj)
}

greetMe(jerry)

jerry.logMessage()


greetMe(tom)

tom.logMessage()






//inside function

function sayName(){
    console.log(`this is inside a function`, this)
}

sayName(); //window

function outer(a){
 

    return function inner(b){

           console.log('this is inside a function', this)
    }

  
}

const outerresulyt = outer(8)

console.log(outerresulyt(8))



//Inside Arrow Function


const getFood = () => this //windows

console.log(`the arrow function is defined in the global scope`,getFood())

// const func = () => {
//         return `${this.name} is ${this.color}`
//     }

const food = {
    name: 'mango',
    color: 'yellow',
    // getDesc:function(){
    //     console.log(`this ${this.name} is  ${this.color}`)
    // }


    getDesc: function(){
        return () => `${this.name} has ${this.color} color`
    }       
    
}

console.log(food)

const func = food.getDesc() 

console.log(func())


//explicit binding -apply, -apply , -bind





function greeting(){
    return `Hello ${this.name} belongs to ${this.address}`
}



const user = {
    name : 'Ali',
    address: 'all of you'
}

//the call method

console.log(greeting.call(user))




const likes = function (hobby1, hobby2, hobby3, hobby4, hobby5, hobby6){
   return `${this.name} likes ${hobby1}, ${hobby2}, ${hobby3},${hobby4}, ${hobby5} and ${hobby6} `
}



const person = {
    name: 'ahmed'
}

const showUs = likes.call(person, 'teaching', 'gaming')


console.log(showUs)


//apply method

const hobbies = ['sleeping', 'coding', 'gaming', 'playing','racing', 'running']

const showUs12 = likes.apply(person, hobbies)



console.log(showUs12)



//bind()



const newHobbies = function(hobby1, hobby2){
    return `${this.name} likes ${hobby1} and ${hobby2}`
}


const officer = {
    name : 'Bob'
}

// console.log(newHobbies.call(officer, 'arresting', 'Bribing'))

const newFn = newHobbies.bind(officer, 'arresting', 'Bribing')

console.log(newFn())




/**
 * for call you need to pass arguments each using comma to separate
 * for apply , you just combine arguments using array and paas the array as an argument
 * for binding , is same us call but changes to a function that can be executed later
 */


var Cartoon = function(name, animal)   {
    this.name = name;
    this.animal = animal;

    this.log = function(){
        console.log(`${this.name} is a ${this.animal}`)
    }
};



const tomCar = new Cartoon('Tom', 'cat')
const jerryCar = new Cartoon('Jerryy', 'rat')


console.log(jerryCar)
jerryCar.log()
















