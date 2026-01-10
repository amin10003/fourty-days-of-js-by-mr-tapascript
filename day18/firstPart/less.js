console.log('lets start')
// let input = window.prompt('high world')

// const reslt = document.getElementById('result')

// const letSee = reslt.innerHTML = input
// console.log(letSee)

//Creating Element

 const pElem = document.createElement("p")
 pElem.innerText = "Helo , this is text added dynamically"
 document.body.appendChild(pElem)

console.log(pElem)


//Inserting Element

const span = document.createElement("span")

span.innerText = "I am a span"

// const pElem2 = document.querySelector("p")

// document.body.insertBefore(span, pElem2)

span.style.backgroundColor = 'yellow'

const hElem2 = document.querySelector("h1")

document.body.insertBefore(span, hElem2)

console.log(hElem2.nextElementSibling)


// document.body.insertBefore(span, null)



{
    const pElem = document.querySelector("p")
    pElem.innerHTML = "<u>well done</u> Let try again"
}


//textContent

{
    const divElem =document.querySelector("div h3")
   // console.log("INNERHRML", divElem.innerHTML)
    console.log("INNERTEXTNT:", divElem.innerText)
    console.log("TEXTCONTeNT", divElem.textContent)
    
}


//Removing/Replacing Elements in the DOM


{
    const list = document.getElementById("myList")
    const myFirstItem = list.children[0]
    list.removeChild(myFirstItem)
    // console.log(list.children)
    //list.remove()
    // list.innerHTML = ""
    const pElem = document.createElement("p")
    pElem.innerText = "Helo , this text added dynamically"
    list.replaceChildren(pElem)
     const remDiv = document.getElementById('removeMe').remove()
}

//Read, Write and Replace Attributes

{
   const imageElem = document.querySelector("img")
   console.log(imageElem.getAttribute("alt"))
   imageElem.setAttribute("alt", "sawirkeyga")
   console.log(imageElem.getAttribute("alt"))
   imageElem.removeAttribute("width")
   console.log(imageElem.hasAttribute("src"))
}





