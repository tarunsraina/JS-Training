

//  Greatest number among three

let num1 = 4
let num2 = 6
let num3 = 3

let largest;
let smallest;

if(num1>=num2 && num1>=num3){
    largest = num1
}else if(num2>=num1 && num2>=num3){
    largest = num2
}else{
    largest = num3
}



if(num1<=num2 && num1<=num3){
    smallest = num1
}else if(num2<=num1 && num2<=num3){
    smallest = num2
}else{
    smallest = num3
}

console.log("largest number among "+num1+","+num2+" and "+num3+" is "+largest)

console.log("smallest number among "+num1+","+num2+" and "+num3+" is "+smallest)