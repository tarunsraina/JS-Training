

let num1 = 5
let num2 = 8

let operation = "+"
// use "+" or "-" or "/" or "*"

switch(operation){
    case "+" : console.log(num1+num2)
                break;

    case "-" : console.log(num1-num2)
                break;

    case "/" : console.log(num1/num2)
                break;

    case "*" : console.log(num1*num2)
                break;

    default : console.log("INVALID!!!")
}