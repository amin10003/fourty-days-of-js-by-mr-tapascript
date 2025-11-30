// console.log('name is ', name);
const name = 'Ahmed';

console.log('name is ', name);

//Temporal Dead Zone

//TDDZ => an area where you cannot access a variable untill it is inialized

//RefrenceError


{
    /// => name variable's TDz starts here
    ///
    //
    // 
    // console.log(name)
    ///
    //
    ///
    //
    //
    let name = 'Ali' //  => name variable's TDz ends here
    //
    //
}


// has no error due to wasting
//wasting means memory creation in the execution phase be it in the global execution context or function execution context and initialization

chase()

function chase(){
    console.log('Tom chases Jerry')
    cought()
}

function cought(){
    console.log('Tom cought Jerry')
}


//


test()

var test = function(){
    console.log("i am  being tested")
}