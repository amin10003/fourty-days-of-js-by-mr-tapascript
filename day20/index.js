console.log("Day 20 - DOM: Advanced Tips")

//Efficient DOM traversal

// const parent = document.querySelector(".card")

// const first_Child = parent.firstElementChild


// const next = first_Child.nextElementSibling

// const lastChild = parent.lastElementchild

// const parentOfElement = first_Child.parentElement



//Template and Cloning

const template = document.getElementById("card-template")

const clone = template.content.cloneNode(true)

clone.querySelector(".title").textContent = "Template and Cloning";

clone.querySelector('.desc').textContent = "Hope You Are Learning Something New !"

document.body.appendChild(clone)



//document Fragment And Range

// - Not part of the main DOM tree untill you insert inside it 
// - Acts like temp container
// - Great for building chunks of DOM before adding them



const fragment = document.createDocumentFragment()


for(let i = 1; i <= 3; i++){
    const li = document.createElement('li')

    li.textContent = `Item ${i}`

    fragment.appendChild(li);
}


document.getElementById("list").appendChild(fragment)

// Range 

const p = document.getElementById("para");

const range = document.createRange()


range.setStart(p.firstChild, 6) // After 'Hello '

range.setEnd(p.childNodes[2], 4)

const content = range.cloneContents()

document.body.appendChild(content)

console.log(content)



// Shadow DOM => MDN tutorials

//used to create web components

// document.querySelector('.card').innetHTML

//Shadow host

const shadowHost = document.querySelector("#box")

const shdow = shadowHost.attachShadow({mode: "open"})

shdow.innerHTML = `<style> p {color: red } </style><p>Hellow Shadow !</p>`;



//Advace Classs Manipulation


const btn = document.querySelector('.btn');

btn.classList.add('active')
btn.classList.remove('diabled')
btn.classList.toggle('visible')

btn.classList.replace('error', 'succes')



//Handling Large-Scale DOM Updates


function addItem(count){
    
    const frag = document.createDocumentFragment();

    for (let i = 0; i < count; i++){
        const div = document.createElement('div');
        div.textContent = `Item ${i}`;
        frag.appendChild(div)
    }

    document.body.appendChild(frag)
}


addItem(10)


//Mutation Observer

// const observer = new MutationObserver(callback);

// observer.observe(targetNode, config)


const targetNode = document.getElementById("watchMe")

 const observer = new MutationObserver((mutationList, observer) => {
    for (const mutation of mutationList) {
        console.log(`Type of Mutation: ${mutation.type}`)

        if(mutation.type === 'childList') {
            console.log('a child Node was either added or removed' )
        }   if(mutation.type === 'attributes') {
            console.log(`Attributes ${mutation.attributeName} was changed. ` )
        }  if (mutation.type === 'characterData') {
            console.log(`Text Content Changed to : ${mutation.target.data}. ` )
        }
    }
 });


 const config = {
    subtree: true,
    characterData: true,
    childList: true,
    attributes: true
 }

 observer.observe(targetNode,config)


 function changeDOM() {
    targetNode.textContent = "GoodBye",
    targetNode.setAttribute("data-status", "changed")
 }


