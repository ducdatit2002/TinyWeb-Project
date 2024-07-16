/* 
Kiểu dữ liệu trong javascript

1. Dữ liệu nguyên thủy - primitive data
- number
- string
- boolean
- underfined
- null
- symbol 

2. Dữ liệu phức tạp - Complex data
- Function
- Object
*/

// Kiểu dữ liệu number:
var a = 1;
var b = 2;
var c = 1.5;

console.log(typeof fullName) 
// kiểu dữ liệu string:
var fullName = 'Son Dang'; 
console.log(fullName);

// Boolean
var isSuccess = true;

// Underfined (chỉ khai báo mà ko có giá trị nào)
var age;

//Null
var isNull = null; //thể hiện không có gì nothing

//Symbol
var id = Symbol('id'); //unique
var id = Symbol ('id'); //unique

//Function
var myFunction = function() {
    alert('Hi. Xin chao cac ban!');
}
//Object types
var myObject = {
     name: 'Son Dang',
     age: 18,
     address: 'Ha Noi',
     myFunction: function () {

     }
};

var myArray = [
    'Javascript',
    'PHP',
    'Ruby'
];
console.log(myArray)