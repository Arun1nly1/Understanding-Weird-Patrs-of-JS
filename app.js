// var person = new Object();
// var city = {};
// person["firstname"] = "Arun";
// person["lastname"] = "Chap";

// firstnameproperty = "firstname";

// console.log(person);
// console.log(person.firstname);
// console.log(city);

// var Rajeev = 
// {firstname :"Rajeev", 
// lastname:"Chapagain",
// address : {
//     city:"Missouri",
//     street : "Cypress dr"
// }
// };

// function  greet(person){
//     console.log("hi"+ person.firstname + "you are from"+person.address.city)
// };

// greet(Rajeev);

// greet({firstname:"Salon",address: {city:"Heisenburg"}});

// var name = "Arun";
// var name = "Rajeev";
// console.log(name);

// JSON

// var movies = {name:"DDLJ", genre:"Romantic"};
// console.log(JSON.stringify(movies));
// var moviesdata = JSON.parse('{"name":"DDLJ","genre":"Romance"}');
// console.log(moviesdata);

// First Class Function

// function greet(){
//     console.log("hi");
// };
// greet();
// greet.language  = "english";
// var x = greet;

// console.log(x.language);
// console.log(greet);

// Function statement and expression
// Anonymous function means function without name
// var anonymous = function(){
//     console.log('Hi');
// };
// anonymous();


// Arguments and Spread

// function greet(fname,lname,language){
//     language = language || 'english';

//     if (arguments.length === 0){
//         console.log("Missing parameters");
//         return;
//     }

//     console.log(fname + lname + 'speaks' + language);

// };

// greet();
// greet('Arun');
// greet('Arun','Chapagain');
// greet('Arun',"Chapagain",'Portugese');


// Immediately invoked function expressions(IIFE)
//example 1
// var gretting = function (name){
//     console.log("Hello" + ' '+ name);

// }('Arun');

// //example 2

// (function(name){
//     console.log("hello" + ' '+ name);
// }('John'));



// closures(function inside function) 
// extraordinarily important
// Closure is  a feature of JS

// function greet(whattosay){
//     return function(name){
//         console.log(whattosay + ' '+ name);

//     }
// };
// // greet('Hi')('Salon');

// var sayhi = greet('Hi');
// sayhi('Raj');

// Closure part 2
// Another example

// function buildFunction(){
//     var arr = [];

//     for(var i = 0; i<3;i++){
//         arr.push(
//             function(j){
//                 console.log(j)
//             }(i)
//         );
//     }
//     return arr;
// }

// var fs = buildFunction();
// fs[0]();
// fs[1]();
// fs[2]();


// Function factories

// function makegreeting(language){
//     return function(firstname,lastname){
//         if(language === 'en'){
//             console.log("hello" + firstname + lastname)

//         }
//         if(language === 'es'){
//             console.log("hola" + firstname + lastname)

//         }

        
//     }
// }

// var eng = makegreeting("en");
// var esp = makegreeting("es");

// eng("Arun", "Chapagain");
// esp("Umesh", "Yadav");


// Callbacks and Closure

// function sayhilater(){
//     var greeting = "namaste!";

//     setTimeout(function(){
//         console.log(greeting);
//     },3000);
// }

// sayhilater();



// Callback funtion

// function tellMeWhenDone(callback){
//     var a = 1000; //some work
//     var b = 2000; //some work

//     callback();
// }

// tellMeWhenDone(function(){
//     console.log("I am done");
// })


// tellMeWhenDone(function(){
//     alert("I am done");
// })


// Call(), Apply(), Bind()

// var person = {
//     firstname : "John",
//     lastname : "Doe",
//     getfullname : function(){
//         var fullname = this.firstname + " " + this. lastname;
//         return fullname;
//     }
// }

// bind() : creates copy of the function
// call(): just executes the function and can add parameters to it
// apply(); same as call() but requires array of parameters
// function currying ====>>> creates the copy of the function with some preset parameter

// function multiply(a,b){
//     return a * b;

// }

// var multiplyByTwo = multiply.bind(this,2);

// console.log(multiplyByTwo(4));

// var multiplyByThree = multiply.bind(this,3);
// console.log(multiplyByThree(9));


// Functional Programming

// This example is iterative type
// var arr1 = [1,2,3];
// console.log(arr1);

// var arr2 = [];
// for (var i=0; i< arr1.length; i++){
//     arr2.push(arr1[i]*2);
// }

// console.log(arr2);

// Functional programming same code

// function mapeachitem(arr,fn){
//     var newArr = [];
//     for(var i = 0; i<arr.length; i++){
//         newArr.push(fn(arr[i]));
//     }
//     return newArr;
// }

// console.log(mapeachitem([1,2,3],function (item){
//     return item *2;
// }))


// underscore.js and lodash.com includes certain function list which can be directly used 
// such as filter map etc...

// Object oriented and Prototypal Inheritance in javascript
// Inheritance ===>>> one object gets access to the methods and properties of other objects
// .__proto__ ===> Dont use this in real life but see it as it inherts

// Reflection and Extends
// _.extend (john,jane,jim)===> inherits properies of jane and jim to john 

// Function constructors===> A normal function that is used to construct objects
// 'this' variable points a new empty object and that object is returned from funcion automatically

// function Person(){
//     this.firstname = "Sushil",
//     this.lastname = "Khadka"

// }

// var sushil = new Person();
// console.log(sushil);

// new sets this keyword into a brand new empty object

//  .prototype can also be used....

// Moment.js to work with dates..very good site.. highly recommended
//  Iterating properties on array is not safe...go tradtional iteration 

// Object.create and pure prototypal inheritance

// var person = {
//     firstname : "Default",
//     lastname : "Default",
//     greet : function(){
//         return 'Hi'+ ' ' + this.firstname;
//     }
// }
 
// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = "KC";
// console.log(john);

// Polyfill ===> It is the code that adds the feature which the engine may lack.

// ODDS and ENDS
// typeof and instanceof are some useful examples
// "use strict"; is used for strict version of js