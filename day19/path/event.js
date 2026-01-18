console.log("Event Bubbling, Capturing and Delegation !");

//In event bubbling, the event starts from the target element and bubbles up through its ancestors.

//the Flow is: child -> Parent -> Grandparent -> Document.


document.getElementById("grandparent").addEventListener("click", () => {

    console.log("Grandparent Clicked")

})


document.getElementById("parent").addEventListener("click", () => {

    console.log("Parent Clicked") 
})



document.getElementById("child").addEventListener("click", () => {

    console.log("Child Clicked") 
})



//Capturing


//In even Capturing: the event flows from outmost ancestor down to the target elemnt. it happens before the target handles the event


document.getElementById("grandparent").addEventListener("click", () => {

    console.log("Grandparent Clicked")

}, true)


document.getElementById("parent").addEventListener("click", () => {

    console.log("Parent Clicked")
    
}, true)



document.getElementById("child").addEventListener("click", () => {

    console.log("Child Clicked")
    
}, true)


//Event Delegation - it is a technique where you add a single even listener to a parent element
//  instead of indiviual event listeners to all its children



document.getElementById("itemList").addEventListener("click", (e) => {
    if(e.target.tagName === "LI") {
        console.log(`You clciked on ${e.target.textContent}`)
    }
})




//Event Stop Propagation

document.getElementById("father").addEventListener("click", (e) => {
    console.log("Parent Clicked")
})

document.getElementById("son").addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Child Clicked")
})



