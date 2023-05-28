var penPrice1=12;
var penPrice2=15;
var result= penPrice1+penPrice2;
console.log(result);
//string variable
var myPoem= "I love bangladesh";

console.log(myPoem.toUpperCase());
console.log(myPoem.indexOf('will'))
console.log(myPoem.split(' '));


//fragtion+floating number

var number1=20;
var number2='25.5';
console.log(number1+number2);
var name='soma';
console.log(number1+name);

//parseFloat and parseInt

number2=parseFloat(number2);
console.log(number1+number2);
number2=parseInt(number2);
console.log(number1+number2);

 

number2=+number2;
console.log(number1+number2);
//parseFloat professional

// convert number to string
number1 = '' + number1
console.log(number1+number2);
console.log(typeof number1);


// after fragtion how much decimal need

var no1 = .2;
var no2 = .10;
var total =no1 + no2;
console.log(no1+no2);
// to fix it

var total = total.toFixed(1);
console.log(total);

// plus,minus, multiply, division in js

var eggPrice = 10;
var banana =20;
var total = eggPrice + banana;
console.log(total);

var total = banana-eggPrice  ;
console.log(total);

var total = banana*eggPrice  ;
console.log(total);

var total = banana/eggPrice  ;
console.log(total);

// for remining valu 
var total = banana % eggPrice  ;
console.log(total);

// for increase value with variable

eggPrice = eggPrice + 1;
console.log(eggPrice);

eggPrice++;
console.log(eggPrice);

eggPrice--;
console.log(eggPrice);

// string + number 

var price1 = 25;
var name = 'alu'

var total = price1+name;
console.log(total);

var total = price1 + ' ' + name;
console.log(total);

// make round fragtion value

var number1 = -5;
var absoluteNumber = Math.abs(-5)
console.log(absoluteNumber);


// make round according to rules of avobe .5 is 1 
var number2 = 5.4545;
var result = Math.round(5.4545);
console.log(result);

// make round to upper 
var result = Math.ceil(5.4545);
console.log(result);

// make round to lower
var result = Math.floor(5.4545);
console.log(result);

// If want random number
var number3 = 15.00;
var result = Math.random(15);
console.log(result);

// for lotery 
var number = Math.random()*100;
var result = Math.round(number);
console.log(result);

// if ...if else

var age = 18 ;
if(age>18){
    console.log("You can Vote");
}
else{
    console.log("You can't Vote");
}
if(age>=18){
    console.log("You can Vote");
}
else{
    console.log("You can't Vote");
}
if(age !=18){
    console.log("You can Vote");
}
else{
    console.log("You can't Vote");
}
var passed = true;
var age1 = 18;
if( passed ==true && age1>15 ){
    console.log("You will promote class 9");
}
else{
    console.log("you will not promote");
}

// to know a time 
var date = new Date ('1994-1-5');
console.log(date);













