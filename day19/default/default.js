console.log("Event Defaults")


document.getElementById("websiteLink").addEventListener("click", (e) => {
    e.preventDefault()
    console.log("default link behaviour prevented")
})


document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("Form submission Behaviour Prevented")
})
