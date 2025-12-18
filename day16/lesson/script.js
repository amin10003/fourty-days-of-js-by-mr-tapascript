console.log('Master JavaScript Debugging!')
// const butn =document.getElementById('btn')

// butn.addEventListener('click',() => {
//     const name = nameInput.value;
//     const wish = wishInput.value;

//     console.log(name, wish)
// })


const print = function(){
  

    const name = document.getElementById('m_name').value
    const wish = document.getElementById('m_wish').value

    const message = 'Hello ' 
                    + name 
                    + ', your wish "' 
                    + wish 
                    + '" may come true!';
                 

    logger(message);
    document.getElementById('output').innerHTML = `<span class="message">'  ${message}  '</span>`
}

const logger = function(text){
    console.log('**I am a logger Function**');
    console.log(text);
}

// print()
const btn = document.getElementById('btn');
btn.addEventListener('click', print);
