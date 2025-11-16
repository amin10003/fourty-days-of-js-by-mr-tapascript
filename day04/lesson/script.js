
/*
Mastering Control Flow in Javascript

*/

console.log('are we on the same page ')


/*
if
if else
switch
case
break
continue
*/



// function showAgeSchool(ageSchool){
//     if (ageSchool <= 5) {
//         return 'did not qualify due to underage'
//     } else if( ageSchool === 6) {
//         return 'the child is in baby class'
//     } else if (ageSchool >= 7 && ageSchool <= 10 ) {
//         return 'He is in Preprimary school'
//     }
//     else if (ageSchool == 10 && ageSchool < 14) {
//         return 'He is in alimentary school'
//     } else if (ageSchool >= 14 && ageSchool <= 18) {
//         return 'He is in secondary school'
//     }else if (ageSchool <= 19 && ageSchool >= 28) {
//         return 'out of schooling age'
//     } else return 'Ni mzee'
    


// }

// const result =showAgeSchool(19) //7, 8, 9, 16 wrong output

// console.log(result)

// let learningCodeIsFutureCareer = false


// if(learningCodeIsFutureCareer){
//     console.log('Roona rabi baa og')
// } else {
//     console.log('Ilaahey ha fududeeyo')
// }








// let students = ['ahmed', 'ali', 'moha', 'fatush', 'garad', 'aisha']

// let scores = ['A', 'B', 'C', 'D', 'E', 'F', 'Y']
// let grade = 45 ;


// function classGradingSystem(grade){
//     if (grade <= 10){
//         return `wara schoolka noogatag hANA Ceebeynin ${scores[6]}`
//     } else if (grade > 10 && grade <= 20){
//         return `muuuse hurdada  kakac waxa tahay cune ${scores[5]}`
//     } else if (grade > 20 && grade <= 30){
//         return `your garde is very low man ${scores[4]}`
//     } else if(grade > 30 && grade <= 40){
//         return ` Pull up your sockets ${scores[3]}`
//     } else if (grade > 40 && grade <= 50){
//         return `good , you can do better ${scores[2]}`
//     } else if(grade > 50 && grade <= 60){
//         return `Very good, almost to peak, don't get tired ${scores[1]}`
//     } else if(grade > 60 && grade <= 70){
//         return `Excellent joob, keep it up ${scores[0]}`
//     } return grade
// }

// console.log(classGradingSystem(grade))


//switch case



let position = 16 ;


switch(position) {
    case 1 : 
        console.log('print 1');
        break;
    case 2 : 
        console.log('print 2')
        break;
    case 3 :
        console.log('print 3')
        break;
    case 4 :
        console.log('print 4')
        break;
    case 5 :
        console.log('print 5')
        break;
    case 6 :
        console.log('print 6')
        break;
    case 7 :
        console.log('print 7')
        break;

    case 8 :
        console.log('print 8')
        break;

    default :
        console.log('enter an existing case')
}

let days = 3;

switch(days){
    case 1 :
        console.log('Monday')
        break;
     case 2 :
        console.log('Tuesday')
        break;
     case 3 :
        console.log('Wednesday')
        break;
     case 4 :
        console.log('Thursday')
        break;
     case 5 :
        console.log('Friday')
        break;
     case 6 :
        console.log('Saturday')
        break;
     case 7 :
        console.log('Sunday')
        break;
    default : 
        console.log('invalid day number')
}






let name = "Hanad"

switch(name) {
    case "Mohamed" :
        console.log('A confused frontend student')
        break;
    case "Hassan" :
        console.log('dead long time ago')
        break;
    case "Ali" :
        console.log('dead before even hassan')
        break;
    case "Elmi" :
        console.log('dead before the above mentioned names')
        break;
    case "Barni" :
        console.log('A blessed lady, the mother of Mohamed')
        break;
    case "Ayaan" :
        console.log('A young beautiful lady z, the sister of mohamed')
        break;
    case "Abdullahi" :
        console.log('First born of the family')
        break;
    default :
        console.log('late comers of the family')
}





































