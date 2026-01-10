console.log("DOM Traversing!!")





// document.body.style.display = "flex";
// document.body.style.flexDirection = "column";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.minHeight = "100vh"; // Changed from height
// document.body.style.margin = "0";

{
    //DOM Traversing
    const span = document.getElementById('text')

    // console.log("Parent Element:",span.parentElement.parentElement)
    // console.log("Parent Node:",span.parentNode.parentNode)

    //children and childNodes

    //children return HTMLCollection while childNode returns Node List

    //for children , you need to convert HTMLCollection to array to perform operation for node list you don't need

    //childNode returns all the nodes irrespective be element node , comment node, text node
    //children return only the Element
    
    const div = document.getElementById('main-id')
    // console.log("div children:",div.children)
    //  console.log("div childNode:",div.childNodes)



    //retreiving child

    console.log('first Element Child:',div.firstElementChild)

    console.log('last Element Child:',div.lastElementChild)

    //siblings

    const h1something = document.getElementById('somethingId')


    //next sibling and next Element Sibling

     console.log("next sibling:", h1something.nextSibling)
     console.log("next element sibling:", h1something.nextElementSibling)

     //previousSibling
     const pSomething = document.getElementById("somethingId-2")

     console.log("next sibling:", pSomething.previousSibling)
     console.log("next element sibling:", pSomething.previousElementSibling)    



}

//Manupulating styling


// document.body.style.display = "flex";
// document.body.style.flexDirection = "column";
// document.body.style.justifyContent = "center";
// document.body.style.alignItems = "center";
// document.body.style.height = "100vh";

{
    const pStyle = document.getElementById('p-id')
    pStyle.style.backgroundColor = 'yellow';
    const waali = document.createElement("span");
    waali.innerText = "i am mad";
    // document.body.main.appendChild(waali)
    const main = document.querySelector("main");
    main.appendChild(waali);
    waali.style.fontSize = "50px";
    waali.style.color = 'white';
    waali.style.backgroundColor = "#333";
    waali.style.display = 'flex';
    waali.style.flexDirection = "column";
    waali.style.textAlign = "center"
    waali.style.alignItems = 'center'
    waali.style.alignText = 'center';
    waali.style.width = 'fit-content'
    waali.style.height = 'fit-content'
    waali.style.borderRadius = '8px'
    waali.style.paddingTop = '8px';
    waali.style.paddingBottom = '8px';
    waali.style.paddingLeft = '5px';
    waali.style.paddingRight = '5px';
    waali.style.fontFamily = 'serif'
}

//manipulating styles using classes


{
    const classMain = document.getElementById('main-id');

    // console.log(classMain.className);

    // classMain.className = "secondar-class"


    //classLists


    // console.log(classMain.classList);

    // classMain.classList.add("test")
    // classMain.classList.remove("layout")
    // classMain.classList.replace("main-class", "secondary-class")
    //  console.log("is there Test class?",classMain.classList.contains("test"));


    // classMain.classList.toggle("test")
    // classMain.classList.toggle("test")
    

}


//Controlling Visibility

{
     const classMain = document.getElementById('main-id');

     classMain.style.display = "block"
    //  classMain.style.flexDirection = "column"
    classMain.style.visibility = "show";

    classMain.style.opacity = "1"

}