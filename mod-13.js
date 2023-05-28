// Array declare- When variable value is more than one-

var kidsAge = [10,5,8,9,4];
console.log(kidsAge[3]);

// by declareing a variable

var sumaAge = kidsAge[3];
console.log(sumaAge);

// chnage a value in array

// var kidsAge [1] = 15;
// console.log(kidsAge);
var position = kidsAge.indexOf(10);
console.log(position);
console.log(kidsAge);

// add at last position 
kidsAge.push(20);
console.log(kidsAge);

// remove from last position 
kidsAge.pop();
console.log(kidsAge);

// remove from first position 
kidsAge.shift();
console.log(kidsAge);

// add at first position 
kidsAge.unshift(20);
console.log(kidsAge);

// javascript slice

var part = kidsAge.slice(3);
console.log(part);

// while loop: run until a condition is fullfilled
var number = 0;
while (number<15){   
    console.log(number);
      number++;
   }
// for loop : 3 rules- declare variable, make a condition, i++;

for( var i =0; i<20; i++){
    console.log(i);

}

// for loop for identify value of an array

var arr = [20 , 25 , 26 , 30 , 35 ];
for(var i =0; i< arr.length; i++){
    var element = arr[i];
    console.log(element);
}

// switch : it is used for more than one condition . break is mendatory 

number =1000;
switch (number){
    case 1000:
    console.log('I am 1000');
    break;
    case 100:
    console.log('I am 100')
    break;
    case 50:
    case 40:

    console.log('I am 50 or 40')
    break;
    default:
    console.log('I dont know')


}





