
/*
Take the sides of a triangle as input and write a program to determine the triangle type.
 Change the inputs everytime manually to see if the output changes correctly.

*/


let a = 7;
let b = 7;
let c = 7;


function identifyTypeOfTriangle(a, b, c){
    if(a === b && b === c ){
        return 'equalateral triangle'
    } else if (a === b || b === c || a === c){
        return 'Scalene triangle'
    } else  {
        return 'Isoscele triangle'
    }
}

let showResult = identifyTypeOfTriangle(a, b, c)


console.log(showResult)