console.log('lets continue! 14th day')

/**
 * 1.Different types of error in js.
 * 2.try....catch syntax and flow.
 * 3.Real world use cases of try...catch.
 * 4.Throwing Error.
 * 5.Rethrowing Error.
 * 6.The try..catch..finally.
 * 7.Creating Custom Error.
 * 8.Self assignment Operators
 */


 //Parsing Error - 
 //Runtime Error -


 //What is Exception in JS ?
 //Ans: are runtime errors that disrupt program execution
 

 //example

//  console.log(x) refrence Error

let obj = null

// console.log(obj.name) typeError
// console.log(x) syntaxerror


// let arr =  new Array(-1)  //rangeError

//decodeURIComponent("%"); URIError

//eval("var a = ;") //EvalError


//try..catch


try {
    //code or logic
} catch {
    //handler error
}


/**
 * 1. Code inside try gets Executed.
 * 2.If no error in the try block, the catch block is ignored and will be not executed.
 * 3.If there is an error in the try block, the execution of the try block will be suspended and the control 
 * will move to the catch block . In the catch block you can find the error type and do the needful.
 */

try {
    console.log("execution starts here!")
    bgbg

     console.log("execution ends here!")
} catch(err) {
    console.error(" an error has occurred!",err)

    console.log(err.message)
    console.log(err.stack)
    console.log(err.name)
}


//Real world use cases.



function divideNumbers(a, b){
    try{
        if(b === 0) {
            const err = new Error('division by zero is not allowed') 
            throw err
        }

        const result = a/b;
        console.log(`the result is ${result}`)

    } catch (error) {
        console.error('Got a math error !', error.message)
    }
}


divideNumbers(8, 0)


const person = {
    name : 'Amina',
    address: {
        street: '123strt',
        city: 'Nairobi'
    }
}


function getPostalCode(user){
    try{
        console.log(user.address.country.postalCode)
    } catch(error){
        console.error('erros execxessing property', error.message)
    }
}


getPostalCode(person)








function validateAge(age){
    try{
        if(isNaN(age)){
            throw new Error(`Invalid Input: Age must be a number. Your input is ${age}`)
        }
        console.log(`User's age is : ${age}`)
    } catch(error){
console.error('Validaton error:', error.message)
    }
}


validateAge('ALi')



//rethrow


const validateForm = (formData) => {
    try{
        if(!formData.username) throw new Error('Username is mandatory ');
        if(!formData.email.includes('@gmail.com')) throw new Error('Invalid email Format')

            console.log(formData)
    } catch(error){
        console.error("Validation error caught!", error.message)
        throw error //rethrow
    }
}


try{
    validateForm({username: 'Ahmed', email: 'badEmali@gmail'})
}catch (error) {
    console.log("Showing error for user creation", error.message)
}

//try-catch-finally

// try{

// }catch(error){

// } finally{

// }



function processInformation(information){
    try{
        console.log("process Information..")
        if(!information) throw new Error('NO IFNORMATION IS AVAILABLE')
            console.log("Information processed")
    }catch(error){
        console.error('Error:', error.message)
    } finally{
        console.log('CleanUp: Closing database connection')
    }
}

processInformation()


//Custom Error


function ValidationError(message){
    this.name = "ValidationError";
    this.message = message;
    rhis.stack = new Error().stack

}



ValidationError.prototype = Object.create(Error.prototype)

function validationCitizen(age){
    if(age < 60) {
        throw new ValidationError('You are not a senior citizen')
    } else{
        return ("You are a senior citizen")

    }
    
    
}

try{
    const message = validationCitizen(98)
    console.log(message)
}catch (error) {
    console.error(`${error.name}: ${error.message}`)
}




//self Assigment operator ?=


