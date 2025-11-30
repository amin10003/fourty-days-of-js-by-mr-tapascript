console.log('OBJACT INTRODUCTION')


/**
 * OBAJCT INTRO
 * OBJACT PROPERTIES
 * NESTED OBJACTS
 * OBJACT CREATIONAL PATTERNS
 * OBJACT REFRENCES
 * OBJACT STATIC METHOD
 * OBJACT DESTURING
 * OPPTIONAL CHAINING
 //PROTOTYPE
 //OOP
 */


 //Objacts are key value pair, or keyed collection

 //objact literal syntax {} , most commonly used to create objacts
 //{} empty objact

 let user = {
    name: 'Ahmed',
    age: 22,
    isMarried: false,
    'is Ceo': false
 }


 console.log(user.name, user.isMarried)

 user.isSchooling = true

 console.log(user.isSchooling)

 console.log(user)
console.log(user['is Ceo']) 


user['movie lover'] = true


console.log(user['movie lover'])


user.age = 98

console.log(user.age)


//delete user['is Ceo']

console.log(user)


// console.log(user)

const somKey = 'age';

console.log(user[somKey])

//dynamically objact created


// let car = prompt("Which is yoour favourite car?")

// let favCars = {
//     [car]: 6
// }

// console.log(favCars)




//constructor function

function Car(name, model, industory){
    this.name = name
    this.model = model
    this.industory = industory
}


let review = new Car('Swift', '200 series', 'Tayota')
let jeep = new Car('Japan','xtw', 'Tokyo')
console.log(review, jeep)



const person = new Object()

person.name = 'Ahmedy'
person.age = 54
person.hasCar = true


console.log(person)




//factory

function createUser(name, age, degree){
    return {
        name,
        age,
        degree,
        greet(){
            console.log(this.name)
        }
    }
}

const user1 = createUser('Mohmed', 25, true, )
user1.greet()
console.log(user1)




let profile = {
    name: 'Moahmed',
    company: 'Google',
    message: function(){
        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city: 'Nairobi',
        pin: 74636,
        state:'Nairobi',
        country: 'Kenya',
        msg: function(){
            console.log(`welcome to ${this.country}`)
        }
    },
    salary: 10000
}

console.log(profile.salary)
// if(!profile.salary){
//     console.log('No such property')
// }

//for...in

for (key in profile){
    console.log(key)
    console.log(profile[key])
}

console.log(Object.keys(profile))

console.log("salary" in profile) // check the existence of a certain property

console.log(profile.address.country)

profile.address.msg()


//obhect refrence

const fruit = {
    name: 'pineapple',

} //XF54


const oneMorefruit = {
    name: 'pineapple',
    
} // YB95



console.log(fruit === oneMorefruit)


//static methd

const target = {
    p:1, u:2
}

const source = {
    a:3, b:5
}



const returnedObj = Object.assign(target,source)

console.log(returnedObj)

const obj = {name: 'Mohamed'}

const obj2 = Object.assign({},obj)  //shallow copying


console.log(obj2)


console.log(obj === obj2)




const obj3 = {
    a:1,
    b: {
        c:2
    }
}


const obj4 = Object.assign({}, obj3)
console.log(obj4)

obj4.b.c = 3

console.log(obj3.b.c)

console.log(obj4.b.c)



const obj5 = structuredClone(obj3) //deepClone


console.log(obj5)

obj5.a = 500
obj5.b.c = 90

console.log(obj3.b.c)
console.log(obj5.b.c)



//Enteries

const myObj = {
    name: "Mohamed",
    age: 24
}



const myArray = Object.entries(myObj)

console.log(myArray)


const entries = new Map([
    ['foo', 'bar'],
    ['baz', 54]
])

const myObjK = Object.fromEntries(entries)

console.log(myObjK)










//Freez => creates immutability - unchangable

const employ = {
    salary: 10000
}

Object.freeze(employ)




employ.salary = 2752

console.log(employ)


console.log(Object.isFrozen(employ))


//seal allows only modification but behaves the same way of freeze

const dept = {
    name: 'Finance'
}

Object.seal(dept)



console.log(dept)


console.log(Object.hasOwn(dept, 'name'))












console.log("Obj Destructuring")


const student = {
    name : 'Mohamed',
    age: 18,
    subjects: ['Math', 'English', 'Science', 'ITC'],
    parents:
{
    mother : 'Barni hassan',
    father : 'Hassan Ali',
    email : 'mohamedparents@gmail.com'
 
},
address : {
    street: 'strt12243',
    city : 'Nairobi',
    country : 'Kenya',
    zip : 74563
}

}

// const name = student.name
// const city = student.address.city
// console.log(`${name}, ${city}`)



// const { //name,
//      age,
//       address: {city, country},
//        meals = {lunch} = {breakfast: 'uji', lunch: 'rice', supper: 'Githarey'}} = student


// console.log(`${name}, ${age}, ${city}, ${country}, ${lunch}`)
// console.log(student)
// const {subjects, numbOfsubjject = subjects.length} = student

// console.log(subjects, numbOfsubjject)


console.log("**ALaises**")
const {name: standard} = student


console.log(standard)



//Nested obj destructuring

const {address: {zip}} = student



console.log(zip)




//destructuring function parametres

function sendEmail({parents: {email}}){
    console.log(`Sent an email to the parent${email}`)
}

sendEmail(student)








const getStudent = () => {

    return {
        'name' :'ali',
        'std' : 3,
        'subjects' : ['math', 'physics', 'Computer', 'Geo'],
        parents: {
            father : 'Guled',
            mother : 'canbara',
            email : 'anmbara@gamil.come'
        },
        address : {
            city : 'Mogadisho',
            country : 'Somalia',
            district : 'Hodan',
            postCode : '231PX'
        }
    }


}


const anotherStudent = getStudent()

// const name = anotherStudent.name
// const subjects = anotherStudent.subjects


// console.log(name, subjects)


const {name, subjects} = anotherStudent
console.log(name, subjects)


const arrayOfStudents = [
    {
        name : "farah",
        age: 23
    },
    {
        name : 'maryam',
        age : 21
    },
    {
        name: "Ahmed",
        age : 24
    }, 
    {
        name : "fatush",
        age : 17
    }
]


for ( let {name, age} of arrayOfStudents) {
    console.log(name, age)
}







//Optional chaining => 

console.log('**Optional Chaining**')

const employees = {
    salary : {
        bonus : 600
    }
}


// console.log(employees.departments.name)  //Error

const name1 = employees.department?.name1

console.log(name1)















































