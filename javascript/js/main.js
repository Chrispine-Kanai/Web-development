// // OUTPUT
// // alert('Hello World!');
// console.log('Hello World!');

// //  Variable Declaration
// // var (global), let, const (let and const have a block scope)


// // Concatenation
// const name = 'Chrispine';
// const age = 30
// console.log('My name is ' + name + '. I am ' + age + ' old.')

// // TEMPLATE STRING
// console.log(`My name is ${name}. I am ${age} old.`);


// // ARRAYS
// //pop - remove last element
// //shift() - remove first element
// // push() - append to array end
// // unshift() - append to array start 
// const number = new Array(1,2,3,4,5,6);

// const things = new Array('1',2,3,true,'5',6);

// things.unshift('Grapes');
// things.pop();

// console.log(Array.isArray(things))
// console.log(number);
// console.log(things);


// // Javascript data types
// //Numbers, strings, Arrays, Objects
// // let = 6;
// // let name = "Chrispine";
// let cars = ['VW', 'Land Rover', 'Toyota', 'Volvo'];
// let obj = {'VW':"Golf", 'Landrover':'Velar', 'Toyota':'Wish'};

// let studentName1 = 'John Smith';
// let studentName2 = 'James Bond';
// let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// // document.getElementById('demo').innerHTML = studentName1 + '<br />' + studentName2;
// // document.getElementById('demo').innerHTML = alpha.length;

// // document.write(obj.VW);

// //Generates random number between 1 and 0
// // document.getElementById('demo').innerHTML = Math.random();
// // Math.min MAth.max, Math.round()
// // Math.ceil - Round upwards
// // Math.floor - round downwards\

// // Arrays
// var fruits = ['Apple', 'Mangoe', 'Grapes', 'Oranges', 'Lemons'];



// // delete fruits[0];

// // splice an array
// fruits.splice(2,0, 'Cherry', 'Watermelon');

// // sort() - sort alphabetically ascending
// // sort() - sort alphabetically ascending

// let comb = fruits.concat(cars);




// // conditional statements
// let score = -45;

// if (score >= 0 && score < 50) {
//     document.write('F');
// } else if(score > 50 && score < 70) {
//     document.write('E');
    
// } else if(score > 70 && score < 80) {
//     document.write('C');
    
// } else if(score > 80 && score < 90) {
//     document.write('B');
    
// } else if(score > 90 && score < 100) {
//     document.write('A');
    
// } else {
//     document.write("Invalid score");
    
// }
// document.getElementById('demo').innerHTML = comb; // join('separator') can also work

// Com

const person = {
    firstName: "John",
    lastname: "Doe",
    age: 37,
    hobbies: ['music', 'golf', 'movies'],
    address: {
        street: '50 Main St',
        city: 'Nairobi',
        state: 'Kenya'
    }
}

console.log(person.hobbies[2]);

const {firstName, lastname, address: {city}} = person;

console.log(city);
