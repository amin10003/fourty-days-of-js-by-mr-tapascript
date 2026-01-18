console.log("Frequent Asked Questions")


const faq = document.querySelector(".faq")


faq.addEventListener("click", (e) => {


   if(e.target.classList.contains("question")) {

    e.stopPropagation()

     const currentItem = e.target.parentElement;

    const currentAnswer = currentItem.querySelector(".answer");


    currentAnswer.classList.toggle("show")

   }

})


document.addEventListener("click", () => {


    const allTheAnswers = document.querySelectorAll(".answer.show")

    allTheAnswers.forEach((ans) => ans.classList.remove("show"))
})


