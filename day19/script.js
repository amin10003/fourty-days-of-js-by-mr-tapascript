console.log("Day 19-JavaScript Events")


//Definition of an event => signal that shows something has happened in the browser

function handleClick(greeting){

console.log(`greet Me ${greeting}`)

}

const btn2 = document.getElementById('myBtn-2')
 btn2.style.backgroundColor = "blue"
 btn2.style.color = "white"
 btn2.addEventListener('click', () => {
     console.log("Do you see me Funtioning!")
 })


const count = document.getElementById('countBtn')

let counter = 0


const handleCounter =() => {
   console.log(counter)
   counter++
}


const greetMe = () => {
    console.log("Thank You !")
}

count.addEventListener("click",greetMe )
count.addEventListener("click",handleCounter )

count.removeEventListener('click', handleCounter)



//DOM Content Load

//will never run

document.onDOMContentLoaded = () => {
    console.log("DOM Content Loaded...")
}


//will run 

document.addEventListener("DOMContentLoaded",  () => {

    console.log("DOM Content Loaded...")

})


const searchInput = document.getElementById("search-id")

function handleChange(e) {


    console.log("Type:",e.type)
    console.log("Target:",e.target)
    console.log("Target Name :",e.target.name)
    console.log("Target Value :",e.target.value)
    console.log("Current  Target:",e.currentTarget)
    console.log(this)
}


searchInput.addEventListener("change", handleChange)


console.log("......................................................");





