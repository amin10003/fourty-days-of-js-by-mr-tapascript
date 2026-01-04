console.log('Lets learn DOM')
console.log(document)

//Accessing the Dom
//=>ById 
let titleElem = document.getElementById('heading')
console.log(titleElem)
//=>ByClassName
let infoElem = document.getElementsByClassName('info')

console.log(infoElem)
console.log('...........................')
console.log(infoElem[0], infoElem[1] ),
console.log('...........................'),

[...infoElem].forEach((elemt)=>{
    console.log(elemt)
})


//BY Tag Name

let nameTag = document.getElementsByTagName("p")
console.log('...........................')

console.log(nameTag[1])



//selectors - Query Selector and Query Selector All

//Query Selector -QuerySelector()

let para = document.querySelector('p.info')
console.log('............',para)

//Query Selector All -QuerySelectorAll()  ==>returns Nodelist


let paras = document.querySelectorAll('p.info')


console.log('.................')

console.log('=>=>=>',paras)



console.log('.................')


let hone = document.querySelector('#heading')


console.log(hone)


// console.log('.................')
// ///miniProject : HighLighter App


function highLightText(){
    console.log("About To Highlight Text")

    let elements = document.querySelectorAll('p.info')
    elements.forEach((element) => {
        console.log(element.style.backgroundColor = 'red')
    })

}


function filterList(){
    let inputElem = document.getElementById('searchInput')

    const input = inputElem.value

   const items = document.querySelectorAll("ul#itemList li");
   

   items.forEach((item) => {
    item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none"
   })
}