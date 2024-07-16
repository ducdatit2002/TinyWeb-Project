/*Kiểu só trong Javascript
1. Tạo giá trị Number
- các cách tạo
- dùng cách nào? Tại sao?
- kiểm tra data type
2. Làm việc với number
- to string
- to fixed

*/
//Key work: Javascript number methods
//Cách 1
var age = 18;
var PI = 3.14;

//Cách 2 (tránh cách có sử dụng từ khóa new)
var otherNumber = new Number(9);

console.log(typeof otherNumber)

//Cách kiểm tra phép chia có hợp lệ, có ra NaN ko?
var result = 20 / 1;
console.log(isNaN(result)) 

//Làm việc với number 
//To String

console.log(age.toString())

//to Fixed
console.log(PI.toFixed())