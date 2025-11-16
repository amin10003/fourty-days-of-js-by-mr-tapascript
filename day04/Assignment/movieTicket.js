/*
Children (<18 years): $3
- Adults (18 - 60 years): $10
- Seniors (60+ years): $8
*/


let age = 78;
let ticket = [3, 10, 8]

function movieTicket(age){
    if(age < 18){
        return `ticket $${ticket[0]}`
    }else if (age >= 18 && age < 60){
        return `ticket $${ticket[1]}`
    }else if(age >= 60){
        return `ticket $${ticket[2]}`
    }else {
        return `please enter your age`
    };
};


let ticketFee = movieTicket(age)

console.log(ticketFee)