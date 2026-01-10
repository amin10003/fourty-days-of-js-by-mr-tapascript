console.log("Let's get started!")

const pTag = document.querySelector("p")
const buttonTag = document.querySelector("button")


// console.log(pTag)
// console.log(buttonTag)
let isChanged = true;

buttonTag.addEventListener('click', () => {
   if(isChanged){
     pTag.style.visibility = "hidden"
   }else {
     pTag.style.visibility = "visible"
   }

   isChanged = !isChanged
})