/*
CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
- các cách tạo chuỗi
- nên dùng cách nào? Lí do?
- kiểm tra data type

2. Một số case sử dụng backslash
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết code
5. Template string ES6
*/

//Có 2 cách tạo chuỗi => nên dùng cách 1
var fullName = 'Duc Dat'; //Cách 1

var fullname = new  String('Duc Dat'); //Cách 2

//Xem cách dùng backslash

//Cách xem độ dài chuỗi
console.log(fullName.length)

//Nối 2 chuỗi

var firstName = 'Duc';
var lastName = 'Dat';

console.log('Toi la: ${firstName} ${lastName}')