console.log('let continue!')


const mixedArray = [100, true, "help", {}]

//index- the position of an element in an array


const salad = ['carrot', 'mango', 'avacado', 'sabuul']



console.log(salad)

function Car(model){
    this.model = model
}

const bmw = new Car('BMW X1')

console.log(bmw)






const marrray = new Array(2)

console.log(marrray) //not an array but gives an empty array with length of two


// const element = array[index]

// console.log(waali[3])
// console.log(waali[0])
// console.log(waali[1])
// console.log(waali[4])



const waali = new Array('carrot', 'mango', 'avacado', 'sabuul', 'Onion')

console.log(waali)

console.log(salad === waali)

for (let i = 0; i < waali.length - 1; i++ )  {
    console.log(`Element at index ${i} is ${waali[i]}`)   
}

//push() -end

const ret = waali.push('beans')

console.log(waali)
console.log(ret)

//unshift - start

waali.unshift('banana')


console.log(waali)


//pop() -removes end also changes the array 

waali.pop()


console.log(waali)

//shift() -removes at the beginning

waali.shift()
console.log(waali)

 const waaliCopy = waali.slice() //--copying the array

 console.log(waaliCopy)


 console.log(waali == waaliCopy)

 let checkUp = Array.isArray(['carrot', 'mango', 'avacado', 'sabuul', 'Onion'])

 console.log(checkUp)

 //Destructuring

 const waali2 = new Array('carrot', 'mango', 'avacado', 'sabuul', 'Onion','banana', 'pinapple')


//  const carrot = waali2[0]
//  const mango = waali2[1]
//   const banana = waali2[5]

//   console.log(carrot, banana, mango)

const [carrot1, mango1, avacado] = waaliCopy

console.log(carrot1 , mango1, avacado)

const [tomato, mashroom = 'mash2'] = ['tom1']

console.log(mashroom)
console.log(tomato)


const [tomatpp, , carrot] = ['too', 'koo', 'carro']

console.log(tomatpp)
console.log(carrot)


//Nested


// [1, 2, [3,4,[5,6,6,['q']]]]


let fruits = ["mango", "banana","orange", "pineapple",["watermelon", "papaya"]];


const veg = fruits[4]
const banana = fruits[1]

let [,,,,[,papaya]] = ["mango", "banana","orange", "pineapple",["watermelon", "papaya"]];

//rest parameter $ spread operator

//...

// const [] = []

//for the rest parameter ... appear on the left side of the destructuring syntax
//for the spread parameter ... apper on the right side of the destructuring syntax


let [student1, student2, ...rest] = ['mohamed', 'ali', 'husein', 'geedi', 'farah'] //rest


console.log(...rest)


const num = [1,2,3,4]
const num2 = [...num]  //spread

console.log(num2)


//use case


// let  app = ['apple']
// let pine = ['pineapple']


// let ['pineapple', 'app'] = [app, pine]

//swapping

let first = [1]
let second = [2];

[ first, second] = [second, first]

console.log(first)
console.log(second)

//merging arrays => use of spread


const herbivours = ['cow', 'camel', 'goat', 'ram']
const carnivours = ['lion', 'tigger', 'cat']

const animals = [...herbivours, ...carnivours]


console.log(animals)


//length property

const arr1 = ['somalia', 'kenya', 'djibouti']

const arr2 = new Array(7)

console.log(arr1.length)

console.log(arr2.length)

//2 ** 32 - 1  limit of an array to hold elements [2³² − 1 = 4,294,967,295]

arr1.length = 2

arr2.length = 5


console.log(arr1.length)


console.log(arr2.length)








//-[] array methods

//concat() method - merrges one or more arrays then returns the merged array --immutable

const f = [4,3,2,1,0]
const s = [0,1,2,3,4]


const joinedArr = f.concat(s)
console.log(joinedArr)


//array.cooncat(ar1,ar2,ar3,ar4)
//join method - joins all the elements of array using separator and ultimately returns a string


const emotions = ['sad', 'pleasure', 'agony', 'happiness']


const joinedElement = emotions.join('-')

console.log(joinedElement)

// [].join() //returns '' empty string


//fill() method - it mutes the original array

const color = ['blue', 'green', 'yellow', 'black']

// color.fill('pink')
color.fill('pink', 2)

console.log(color)


//includes() method - the presence of an element in an array

const f_name = ['muse', 'akshay', 'cabtooy']

console.log(f_name.includes('muse'))


//indexOf() method - used when needed to identify the index of an element in an array
//returns the first occurrence of the element in the array


const countries = ['Usa', 'Uk', 'Somalia', 'kenya', 'Uk']

console.log(countries.indexOf('Usa'))



//lastIndexOf() method - helps to find the element in the last idex of an array


console.log(countries.lastIndexOf('Uk'))


//reverse() method - reverses the position of the element in the array


console.log(countries.reverse()) //mutes the original array

//sort method - sorts the array elements

//the default sort converts each element in the array to string and then sort , it is also ascending sort order

console.log(countries.sort())

const artists = [
    'John',
    'Lenordo',
    'Ana',
    'Barent', 
    'Charles',
    'Simio'
]
// artists.toUpperCase()

artists.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1
})
console.log(artists)

let ages = [12, 14, 54, 26, 94, 83, 19, 47, 93, 500]




console.log(ages.sort((a, b) => a - b))




//splice --deleting, adding and modifying elements in an array


// splice(start, deleteCount, item, itme1, item2)

//start - position to be started
//deleteCount --number of items to be removed
//[items] -- intended items to be added
//splice always returns the arrays containing the deleted item
//splice is for replacement

const animals1 = ['tom', 'jerry', 'dog', 'cat']
console.log(animals1)
animals1.splice(0,1, 'Tom')
console.log(animals1)


animals1.splice(3,0, 'Zack')

console.log(animals1)

//slice => copy an array or part of it
//splice => mutates the array to remove/replace/add elements

//splice mutates array but slice does not

//at() => helps to retreive elemnts from both ends

const junkFood = ['sambuse', 'hamburger', 'jacket', 'chips', 'chicken', 'pizza', 'juic', 'fish']





console.log(junkFood.at(0))
console.log(junkFood.at(5))
console.log(junkFood.at(-1))
console.log(junkFood.at(-3))
console.log(junkFood.at(-9))


//copyWithIn => is basically copy part of an array to another location within the array

//copyWithin(target, start, end) 


const array6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

array6.copyWithin(11, 2, 7)


console.log(array6)

const array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]


array2.copyWithin(5,7)


console.log(array2)



//flat() 

{

    const arr1 = [0,1,2,3,[6,5,4]]
    
    console.log(arr1.flat())

    const arr2 = [0,1,2,3,[6,5,4, [9,8,7,[12,11,10]]]]
    // console.log(arr2.flat(4))
    console.log(arr2.flat(Infinity))
}


//groupBy

const employees = [

    {f_name: 'Ahmed', dept: 'HR', salary: 5000},
    {f_name: 'Farah', dept: 'Sales', salary: 10000},
    {f_name: 'Gedi', dept: 'HR', salary: 4000},
    {f_name: 'Ali', dept: 'Engineering', salary: 6000},
    {f_name: 'Mohamed', dept: 'CEO', salary: 100000},
    {f_name: 'Ahmed', dept: 'Engineering', salary: 9000},
    {f_name: 'Fatush', dept: 'HR', salary: 4000},
    {f_name: 'Guled', dept: 'HR', salary: 4500},
    {f_name: 'Ibrahim', dept: 'Engineering', salary: 7000},
    {f_name: 'Maria', dept: 'Sales', salary: 8000}

]


//  const groupingByDept = Object.groupBy(employees, ({dept}) =>{
//     return dept
// })

// console.log(groupingByDept)


//  const = Object.groupBy(employees, ({salary}) =>{
//    return salary
// })

// console.log(groupingBySalry)

const employeeswithmoreEarning = Object.groupBy(employees, ({salary}) =>{
     if(salary >= 5000){
        return `Earning More than 5000`
    } else{
         return `Earning less than 5000`
    }
   
})

console.log(employeeswithmoreEarning)



//IMMUTABILITY

//toReverse()

const items = [4,3,2,1] //1,2,3,4

console.log(items.toReversed())


console.log(items)



//toSorted

 
const months = ['March','Janauary','April','July', 'June']
// console.log(months.toSorted((a,b ) => a.localeCompare(b)) )


 const sortedMonths = months.toSorted()

console.log(sortedMonths)


console.log(months)

//tosplice()

const days = ['Sat','Sun','Mon','Tue']

const days2 = days.toSpliced(0,0,'Thu')

console.log(days2)
console.log(days)

//with()


const nums = [1,2,3,4,5,6]

// nums[2] = 6
console.log(nums.with(2,6))

console.log(nums)

nums[-2] = 7


console.log(nums.with(-3,5))


console.log(nums)
//Static Method

//Array Like
const arr_like = {0: 'I', 1: 'am', 2: 'array', 3: 'like', length: 4}

console.log(arr_like)
console.log(arr_like[3])
console.log(arr_like.length)

console.log(Array.isArray(arr_like))

function checkArgs(){
    console.log(arguments)
    const args = [...arguments]
    console.log(args)
    args.forEach((x) => {
        console.log(x)
    })
}

checkArgs(4,86, 76,75,45)

//array.from => converts array_like to an array

console.log("HTML Collection as Array Like", document.getElementsByTagName('li')
)

const collectOfArray_Like = Array.from(document.getElementsByTagName('li')
)


collectOfArray_Like.forEach((y) => console.log(y))

console.log(collectOfArray_Like)


//fromAsynch()

const collectionPromise = Array.fromAsync(document.getElementsByTagName('li')
)
console.log("Converted Array", collectionPromise)

collectionPromise.then((value)=> console.log(value))


// const rett = Array.fromAsync({
//     0: Promise.resolve("Mohamed"),
//     1: Promise.resolve("Google"),
//     2: Promise.resolve("Apple"),
//     length: 3
// })

const ret1 = Array.fromAsync({
    0: Promise.resolve("Mohamed"),
    1: Promise.resolve("Google"),
    2: Promise.resolve("Apple"),
    length: 3
}).then((value) => console.log(value))


console.log(ret1)

//of()
const a = new Array(2,3,4,5)
const b = [56,7,8]


const c = Array.of(2, true, 'test', {f_name: "Ahmed"}, [1,2,3,4]);


console.log(c)



//filter() => 


    const customers = [
  { 
    id: 1,
    f_name: "Mohamed",
    l_name: 'hasan',
    email: "mohamed@example.com",
    country: "Kenya",
    gender: "Male",
    expenses: 5250,
    purchases:['shoes', 'book', 'headphones'],
    age:36,
    gender: 'Male',
    isMarried: true
     },
  { 
    id: 2,
    f_name: "Farah",
    l_name: 'moo',
    email: "farah@example.com",
    country: "USA",
    gender: "Male",
    expenses: 4450,
    purchases:['water bottle', 'backpack', 'biscuits'],
    age:28,
    gender: 'Male',
    isMarried: true
  },
  { 
    id: 3,
    f_name: "Ali",
    l_name: 'geedi',
    email: "ali@example.com",
    country: "UK",
    gender: "Male",
    expenses: 1300,
    purchases:['phone charger', 'notebook', 't-shirt'],
    age:24,
    gender: 'Male',
    isMarried: false
    },
  { 
    id: 4,
    f_name: "Aisha",
    l_name: 'jamac',
    email: "aisha@example.com",
    country: "Canada",
    gender: "Female",
    expenses:720,
    purchases:['book', 'biscuits', 'pen'],
    age:25,
    isMarried: false 
    },
  { 
    id: 5,
    f_name: "Gedi",
    l_name: 'afrax',
    email: "gedi@example.com",
    country: "Australia",
    gender: "Male",
    expenses: 3180,
    purchases:['shoes', 'backpack', 'headphones', 'notebook'],
    age:37,
    gender: 'Male',
    isMarried: true 
       
 },
  { 
 id: 6,
 f_name: "Hassan",
 l_name: 'suleiman',
 email: "hassan@example.com",
 country: "Germany",
 gender: "Male",
 expenses:2000,
 purchases:['pen', 'notebook', 'water bottle'],
 age:49,
 gender: 'Male',
  isMarried:false
 },
  {
    id: 7,
    f_name: "Fatima",
    l_name: 'mohamed',
    email: "fatima@example.com",
    country: "India",
    gender: "Female",
    expenses: 550,
    purchases:['headphones', 'phone charger', 't-shirt'],
    age:34,
    gender: 'Female',
    isMarried: false 
    },
  {
    id: 8,
    f_name: "Samira",
    l_name: 'jaajum',
    email: "samira@example.com",
    country: "France",
    expenses: 4220,
    purchases: ['biscuits', 'water bottle', 'notebook'],
    age:70,
    gender: 'Female',
    isMarried: true
  },
  {
     id: 9,
     f_name: "Ahmed",
     l_name: 'ali',
     email: "ahmed@example.com",
     country: "Egypt",
     gender: "Male",
     expenses: 900,
     purchases:  ['book', 'pen', 'notebook'],
     age:85,
       gender: 'Male',
    isMarried: false
  },
  { 
    id: 10,
    f_name: "Zahra",
    l_name: 'ahmed',
    email: "zahra@example.com",
    country: "Nigeria",
    gender: "Female",
    expenses: 3500,
    purchases: ['shoes', 't-shirt', 'backpack','book'],
    age:17,
    gender: 'Female',
    isMarried: true
 }
];

console.log(customers);


//filter() => get senior citizena

// const seniorCitizens = customers.filter((element, index,array) => {

// })  filter takes a test  function


const seniorCitizens = customers.filter((customer) => {
return customer.age >= 50
})

console.log(seniorCitizens)

const nonSeniorCitizens = customers.filter((customer) => {
    return customer.age <= 50
})

console.log(nonSeniorCitizens)

//map() -> takes transformation


// const  newArray = array((currentValue, index, arra) =>{})

  const fullNmaeOfCus = customers.map((customer) =>{
    let title = "";
    if (customer.gender === 'Male'){
      title = 'Mr'
    } else if(customer.gender === 'Female' && customer.isMarried === true){
      title = "Mrs";
    } else{
      title = "Miss"
    }

    customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`
    
    return customer
  })


console.log(fullNmaeOfCus)

const makingFirstLettersCapital = customers.map((customer) => {
  customer.l_name = customer.l_name[0].toUpperCase() + customer.l_name.slice(1)
  return customer ;

})

console.log(makingFirstLettersCapital)

//reduce() Method

//AVERAGE AGE OF CUSTOMERS WHO PURCHASED BOOK


// arr.reduce(
//   reducer(
//     accumulator,
//     currentValue,
//     index,
//   ),
//    InitialValue
// )


 

const rusult =function reduce(a,b,c,array){
//Do something with accumulator and current 
//Get a result
//return the result
}

const arr = [1,2,3,4,5,6,78,9,10,100,150,200,250,300]

const rusult2 = arr.reduce((a,b)=> {
  return a + b
},0)

console.log(rusult2)

let count = 0

const total = customers.reduce((a,b)=> {
  if(b.purchases.includes('book')){
    a = a + b.age
    count += 1
  }

  return a
},0)

console.log('Customer average age Purchased Book', Math.floor(total/count))

let num1 = [100, 56,20]


const sub = num1.reduce((c,d) => {
  return c - d
})


console.log('use of reduce in subtraction',sub)


//reduceRight()

let num5 = [100, 56,20]


const sub2 = num5.reduceRight((c,d) => {
  return c - d
})


console.log('use of reduce in subtraction with the use of Reduce right',sub2)


//some() - Do we have a young customer whose age is less than 20

// arr.some((element, index, arr) => {
//   //Do something
// })


//alway returns either true of false


 const youngerCustomers = customers.some((customer) =>{
  return customer.age < 20
})

console.log(youngerCustomers)

//every() every customer isMarried

// arr.every((a,b,c) => {
//   //Do something Here..
// })

const checkingMarried = customers.every((customer) => {
  return customer.isMarried
})

console.log(checkingMarried)


//find() - find the youngest Customer

const FoundYoungCustpmer = customers.find((customer) => {
  return customer.age < 19
})

console.log(FoundYoungCustpmer)

//findIndex()

//findLast() == same method as findIndex 
const FoundYoungCustpmerIndex = customers.findIndex((customer) => {
  return customer.age < 19
})

console.log(FoundYoungCustpmerIndex)

//Chaining array methods

//Use Case: get the total amount spend by married customers


//Reduce()
//map()
//filter()

//find() all married customer

const totalAmountSpentBymarriedCustomer = customers.filter((customer) => {
  return customer.isMarried === true
}).map((customer) => {
  return customer.expenses
}).reduce((a,b) => {
  return a + b
},0)

console.log(`Total amount spent by married Customers = ${totalAmountSpentBymarriedCustomer}`)

//ForEcach
const rra = [12,13,,14,15,16,17,18,19,10]

let sum = 0;

rra.forEach((element) => {

  sum += element
  // console.log(element)
})


 console.log(sum)

 //enteries

 const rra1 = [12,13,11,14,15,16,17,18,19,10]


 const rraItra = rra.entries()

//  console.log(rraItra.next().value)
//  console.log(rraItra.next().value)


 for(const [index,element] of rraItra) {
  console.log(index + ':' +element)
 }


 //values()

 const arr22 = rra1.values()
//  console.log(arr22)

for(const element of arr22){
  console.log(element)
}


//flatMap()

 const rra2 = [12,13,11,14,15,16,17,18,19,10]


 const twoPower =rra2.map(x => x ** 2)

 const twoPower2 =rra2.map(x => [x ** 2])

 const twoPower1 =rra2.flatMap(x => x ** 2)

 console.log(twoPower)
 console.log('complex array',twoPower2)
  console.log(twoPower1)


  const twoPower3 =rra2.flatMap(x => [[x ** 2]])

  console.log(twoPower3)

