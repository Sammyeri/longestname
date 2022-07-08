let name1 = prompt("Please give me a name.");
let name2 = prompt("Please give me another name.");
let name3 =prompt("Please give me a third name.");
let num1 = name1.length;
let num2 = name2.length;
let num3 = name3.length;

console.log(name1);
console.log(name2);
console.log(name3);
console.log(num1);
console.log(num2);
console.log(num3);

function longestName(number1, number2, number3){
    if (number1 >number2 && number1> number3){
        console.log(`${name1} has the longest name`);
    } else if(number2 > number1 && number2 > number3){
        console.log(`${name2} has the longest name`); 
    } else if(number3 > number1 && number3 >number2){
        console.log(`${name3} has the longest name`);
    }else if(number1==number2 && number1>number3){
        console.log(`${name1} and ${name2} tie for the longest name`);
    }else if(number2 == number3 && number2>number1){
        console.log(`${name2} and ${name3} tie for the longest name`);
    }else if(number1 == number3 && number1>number2){
        console.log(`${name1} and ${name3} tie for the longest name`);
    } else{
        console.log(`All three names, ${name1}, ${name2}, and ${name3}, are all the same length`);
    }
}

 longestName(num1, num2, num3);