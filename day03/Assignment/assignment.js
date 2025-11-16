// - [ ] Take three numbers and assign them to variables p, q, and r.
// - [ ] Now find the maximum of these three numbers using the comparison operators.


let p = 4;
let q = 6;
let r = 8;

let max;

function returnMaxNumber() {
if (p > q && p > r) {
    return max = p
} else if ( q > p && q > r) {
    return max = q
} else if (r > p && r > q ) {
    return max = r
}
}

result = returnMaxNumber()

console.log(`the maximum Number is ${result}`)



/*A tricky one for you

- [ ] Create a variable `count` and assign  a value, say, 5.
- [ ] Now use the Bitwise shift operator to make the number double.
- [ ] Print it on the console.
 */

let count = 5

let count2 = count << 1

console.log(count2)

