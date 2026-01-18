console.log("Let's make our own events")


// Step 1: Create a Custome Event

//  const myEvent= new CustomEvent("userLoggedIn", {
//     detail: {
//         username : "Mohamed",
//         role : "admin"
//     }
//  });

// // Step 2: Listen to the Custome Event

// document.addEventListener("userLoggedIn", (e) => {
//     console.log(`User Login Detected : ${e.detail.username} , ${e.detail.role}`)
// })



// // Step #: Disparching the Custome Event

// document.dispatchEvent(myEvent)




function loginUser(username){
    
    const event = new CustomEvent("userLoggedIn", {
        detail : {username}
    })

    document.dispatchEvent(event)
};



document.addEventListener("userLoggedIn", (e) => {
    const user = e.detail.username

    document.getElementById("welcome").textContent = `Welcome, ${user} !`
})
