/*
*
**
***
****
*****
*/

// let star = "*"


// for(i = 1; i >= star.length - 1; i ++){
//     for(j = 1; j >= star.length - 1; j++){
//         for(k = 1; k >= star.length - 1; k++){
//             for(c = 1; c >= star.length - 1; c++){
//                 console.log( ` let's see the satrs ${star}`)
//             }
//         }
//     }
// }

function pyramidStar(n){
 for(let i = 0; i <= n; i++){
    let row = "";
    for(let j = 0; j <= i; j++){
        if(i === j){
            row += "*"
            break
        }
        row += "*"
    }
    console.log(row)
 }
}

pyramidStar(10)