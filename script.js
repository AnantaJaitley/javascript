// console.log('Hello world!');
// var name = 'Alex';
// console.log(name);
// var schoolTeam = 'basketball';
// var schoolNumber = 20;
// var isRegistered = true;
// console.log(isRegistered);
//  var job;
//  console.log(job);
//  job = 'student';
//  console.log(job);
//  console.log(name +' '+ schoolNumber);
//  var schoolName, hasCourse;
//  schoolName = "OAKAcademy";
//  hasCourse = true;
//  console.log(schoolName + ' has 35 courses.Does it have any course?' + hasCourse);
//  schoolNumber = 'twenty two';
//  console.log(schoolNumber);
//  schoolTeam = 'tennis';
//  console.log(schoolTeam);
//  alert(schoolTeam);
//  var age = prompt('How old is he?');
//  console.log('Alex is ' + age + 'years old.');

//  // conditional statement
//  var grade;
//  grade = 38;
//  if (grade < 40) {
//     console.log('You can not go to next class.');
//  }
//  else if (grade > 40 && grade < 45){
//     console.log('you can not go to next class but you can enter the exam');
//  }
//  else{
//     console.log('You can go to next class');
//  }
// // ternary Operator
// var grade = 80;
// grade < 45 ? console.log('You can not go to next class')  : console.log('You can go to next class')
// var result = grade < 45 ? 'Failure' : 'Success';
// console.log(result);
// if (grade < 45) {
//     result = 'Failure';
// }
// else{
// result = 'Success';
// }
// console.log(result);
// // switch statement
// var day;
// day = 'Monday'
// switch (day) {
//     case 'Saturday':
//         console.log('I like saturday');
//         break;
//     case 'Monday':
//         console.log('I like monday');
//         break;
//     case 'Friday':
//          console.log('I like friday');
//          break;
//     default: 
//     console.log('I do not know the day');
//     break;

// }


// var grade = 38;
// switch (true) {
//     case (grade < 40):
//         console.log('You can not go to next class.');
//         break;
//      case (grade > 40 && grade < 45):
//         console.log('you can not go to next class but you can enter the exam');
//         break;
//       default:
//         console.log('You can go to next class');
//         break;

// }

// while loop
// var number = 1;
// while (number < 11) {
//     console.log(number);
//     number++;
// }
// // infinite loop
// var number = 1;
// while (number < 11) {
//     console.log(number);
// }
// for loop
// for(var number = 1;number < 11;number++){
//     console.log(number);
// }
// // continue and break
// console.log('continue statemnt');
// for (var i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         continue;
//     }
//     console.log(i);
// }

// console.log('break statement');

// for (var i = 1; i <= 10; i++) {
//     if (i % 2 === 0){
//         console.log(i);
//         break;
//     }
// }

// /////////// Functions///////////////////
// function sayHello()
// {
//     console.log('Hello World');
// }
// sayHello();


// function doSomething(){
//     console.log('Hello world');
//     console.log('goodbye world');
//     console.log('How are you?');
// }
// doSomething();
// doSomething();
// doSomething();
// doSomething();


// /////////////// Function with arguments  /////////////
// function sayHi(name)
// {
//     console.log('Hi'+ ' ' + name);
// }
// sayHi('John');
// sayHi('Sara');


// function cube(number){
//     console.log(number*number*number);
// }
// cube(3);
// cube(27);

// function bmi(length, weight){
//     console.log(weight / (length + length));
// }
// bmi(1.80, 85);



// //////////// Function Return Keyword /////////////////////
// function cube(number){
//     return(number*number*number);
// }
// var num = cube(5);
// // console.log(cube(4));
// console.log(num);


// function cube(number){
//     if (number === 25) {
//         return;
//     }
//     return(number*number*number);
// }
// var num = cube(25);
// console.log('This is another console', num);


// function calculateAge(birthyear){
//   return 2020 - birthyear;
// }

// var age = calculateAge(1992);
// console.log('This is the age', age);


// function enterCafe(Age) {
//     if (Age < 18){
//         return 'You can not enter cafe'
//     }
//     return 'You can enter cafe';
// }
// var cafe = enterCafe(17);
// console.log(cafe);




////////////////// Function Declaration And Expression ///////////////
// function declaration
// function calculateAge(birthYear){
//     return 2020 - birthYear;
// }

// // function expression
// var calculate = function (birthYear) {
//     return 2020 - birthYear;
// }
// var age = calculateAge(2003);
// console.log(age);
// calculateAge = ' John'; // no more a function it is a string now.
// console.log(calculateAge);

// var age = calculateAge(2010); // now we can no longer use it as a function


// /////// Function Scope /////
// function sayName() {
//     var Name = 'Sheldon';
//     console.log(Name);
// }

// sayName() ;
// console.log(Name);

// var Name = 'Leonnard'
// console.log(Name);
// sayName();


// var Count = 18;
// console.log (Count);

// function writeCount(){
//     console.log(Count);
// }

// writeCount();


// function sayHi()
// {
//     var myWord = 'Hi there';
//     console.log(myWord);
//     sayBye();

//     function sayBye(){
//         console.log(myWord);
//     }
// }
// sayHi();



// var sentence = 'Hello world';
// function saySentence(){
//     var sentence = 'bye bye';
//     console.log(sentence);
// }

// saySentence();
// console.log(sentence);


// function writeNumber() {
//     var myx = 30;
//     console.log(myx);
// }

// function doSomething(){
//     console.log(myx);

// }
// writeNumber();
// doSomething();


////////// Array //////////

var student1 = 'Sheldon';
var student2 = 'Penny';
var student3 = 'Leonard';
var student4 ='Raj';


var students = ['Sheldon','Penny','Leonard','Penny','Raj'];

console.log(students[0])
console.log(students);


students[0] = 'Amy'; //editing an array
console.log(students);

students[4] = 'Howard'; // adding in array 
console.log(students);

students[7] = 'John'
console.log(students);


// var cats = [];
// var cats = new Array();

var commonData = ['John', 25 , true, null];
commonData = [1];
car = ['Mercedes','Audi','BMW','Volvo'];
var cars_length = car.length;
console.log(cars_length);

///////// Array Methods /////////
// push/pop
var students = ['Sheldon','Penny','Leonard','Penny','Raj'];
students[4]='Bernadette';

students.push('Barbie');
console.log(students);

var student_length = students.push('Amy');
console.log(student_length);

students.pop();
console.log(students);

var lastStudent = students.pop();
console.log(lastStudent);

// shift/unshift

var cats = ['cat1','cat2','cat3'];
cats.unshift('cat4');
console.log(cats);

cats.shift();
console.log(cats);

// indexOf
var students = ['Sheldon','Penny','Leonard','Penny','Raj'];
console.log(students.indexOf('Sheldon'));
console.log(students.indexOf('Horward'));

// slice

var friends = ['Rose','Rachel','Joey','Chandler'];
var closeFriends = friends.slice(1,3);
console.log(friends);
console.log(closeFriends);

//// array iteration /////

var books = ['Harry Potter','Hobbit','HUnger games', 'Little Prince'];
for (var i = 0; i < books.length; i++){
    console.log(books[i]);
}

books.forEach(function (books){
    console.log(books);
});
////////// object ////////
 
// var student1 = ['Sheldon',36,'calTech'];
// var student1 = [35,'MIT','Leonard'];
// student1[2];
// student2[1];/

// var student = new Object();
// student.school
var schoolName = 'school';
var student = {
    name: 'Sheldon',
    age: 36,
    school: 'calTech',  
};

// console.log(student['name']);
// console.log(student.school);
console.log(student[schoolName]);

// object update
var Leonard = {
    name: 'Leonard',
    school: 'calTech',
    age: 35
};
Leonard.age += 1;
console.log(Leonard.age);

Leonard['school'] = 'MIT';
console.log(Leonard['school']);

var student11 = {
    name: 'Amy',
    age: 25,
    friends: ['Howard','Bernadette','Raj'],
    bestFriend: {
        firstName: 'Penny',
        birthYear: 1988
    }
};
var bestFriendOfStudent11 = student11.bestFriend.firstName;
console.log(bestFriendOfStudent11);

var friend2 = student11.friends[1];
console.log(friend2);


/////////// how to add property to objects //////////
var colors = {};
 colors.orange = {code: 123};   
console.log(colors.orange.code);
colors.black = {code:[4,5,6]}
console.log(colors.black.code[2]);
////////// Complex structures /////////////////
var blogPosts = [
    {
        title: 'weather',
        content: 'it is rainy today',
        comments: [
            {
                name: 'John',
                lastName: 'Travolta'
            },
            {
                name: 'Frodo',
                lastName: 'Bagins'
            }

        ]
    },
    {
        title: 'weather',
        content: 'I do not like weather'
    }
];
console.log(blogPosts[0].title);
console.log(blogPosts[0].comments[1].name);

//////////// Object Methods /////////////

var Sheldon = {
    name: 'Sheldon',
    age: 35,
     hasGone: true,
    friends: ['Penny','Raj'],
say: function () {
        console.log('say hi Sheldon');
   }
 }
 Sheldon.say();
  var Leonard = {
     name: 'Leonard',
     say: function (){
         console.log('Say hi Leonard')
     }
 }
Leonard.say();

// function say(){
//     console.log('say hi Sheldon');
// }
// say();
// function say(){
//     console.log('say hi Leonard');
// }
// say();
/////////// this keyword//////////
console.log(this);

function addNumber (x, y){
    console.log(x + y);
    console.log(this);
}
 addNumber(10, 20);

 var Raj = {
    name: 'Raj',
    year: 1989,
    sayHi: function(){
        console.log(this);
        console.log('say hi ' + this.name);
        function someFunc(){
            console.log(this);
        }
        someFunc();
    }
 };
 Raj.sayHi();