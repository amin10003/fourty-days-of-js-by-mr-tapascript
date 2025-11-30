console.log('here we go 10th day of our journey')



/**
 * Types of scope.
 1.Global scope
 2.function scope
 3.Block scope
 4.module scope
 */


 //Global scope
 //variables declared outside of function or block scopes are in the global scope


 var name = 'mohamed'

 function greeting(){
    console.log('Hello', name)
 }

 greeting()

 console.log(name)

 {
    console.log('inside block',name)
 }


 //fnction scope
 // variables declared inside a function which are accessable only within that functoion



 function toDo(){
    var tesk = "learning js 40 days"
    console.log(tesk)
 }
 toDo()

//  console.log(task)


 //Block scope
 // variables declared let and const inside a a pair of {.....Block.....} cannot be accessed outside the block


 {
    var count = 20
    console.log(count)
 }

 console.log(count)


 // scope chain

//  let globalvar = 'I am a global variable'

//  function outer(){
//    let outervar = ' I am outer variable'


//    function inner(){
//    let innervar = ' I am inner variable'
   
//          console.log(innervar)
//          console.log(outervar)
//          console.log(globalvar)



//    }

//    inner()


   
//  }


//  outer()




 //Another similar problem


 var count = 10

 function outer(){
   var count = 20;


   function inner(){
      var count = 30

      console.log(count)
   }
   inner()
   console.log(count)
 }

 

 outer()
 console.log(count)



 //variable shadowing :-a situation that occurs when a variable in an inner scope has the same name of an outer scope
//it effectively hides the outer var within the inner var


 let mgs = 'I am doing well'

 console.log(mgs)

 function situation(){
   let mgs = 'i am not that good'

   console.log(mgs)
 }

 situation()
 console.log(mgs)


 