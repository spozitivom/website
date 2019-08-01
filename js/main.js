'use script';

var fact = 1;
for(i = 1; i < 10; i++) {
 fact = fact*i;
 document.write(i + "! = " + fact + "<br>");
}

var namber = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(person["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp']

console.log(arr[0])
// alert('Hello World!');


/* let answer = confirm("Are you here?");

console.log(answer); */

/* let answer = prompt("Есть ли Вам 18 лет?", "Да");

console.log(typeof(arr)); */


var calculateCistance = function(time, speedOfFirstCyclist, speedOfSecondCyclist) {
    var distanceOfFirstCyclist = 
    speedOfFirstCyclist * time;
    
    var distanceOfSecondCyclist = 
    speedOfSecondCyclist * time;
    
    var totalDistance = distanceOfFirstCyclist + distanceOfSecondCyclist;
    
    return totalDistance;

};

var firstDistance = (calculateCistance(3, 15, 15));

console.log(firstDistance);


