/*
Mảng trong Javascript - Array
1. Tạo mảng
- cách tạo
- sử dụng cách nào? tại sao?
- kiểm tra data type
2. Truy xuất mảng
- độ dài mảng
- lấy phần tử theo index
*/
//Cách truyền thống
var language = 'Javascript';
var language2 = 'PHP';
var language3 = 'Ruby';

//Cách ngắn gọn
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
];
console.log(languages)

//Cách khác
var language = new Array(
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
    null,
    underfined,
)
console.log(typeof array[1])

//Kiểm tra array
console.log(Array.isArray(new Array(1,2)))


//Truy xuất mảng
console.log(languages.length)
