const display = document.getElementById('display')
const btns = document.getElementById('btns')
const numbers = document.querySelectorAll('.numbers')
const operators = document.querySelectorAll('.operator')
const BtnAc = document.getElementById('clear')
// const equal = documnet.getElementById('equal')

const equal = document.getElementById('equal');




// numbers.forEach(number =>
// {
// number.addEventListener('click', () => {
//     display.value += number.textContent;
    
//    });
// });


numbers.forEach(number => {
    number.addEventListener('click', () => {
        display.value += number.textContent;
    });
});


operators.forEach(op => {
    if (op.id !== 'eqaul'){
        op.addEventListener('click', () => {
            display.value += op.textContent;
        })
    }
})

equal.addEventListener('click', () => {
    display.value = eval(display.value)
})


BtnAc.addEventListener('click', () => {
    display.value = ""
})