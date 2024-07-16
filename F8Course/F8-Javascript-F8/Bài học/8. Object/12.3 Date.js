// Đối tượng date


var date = new Date();

console.log(typeof date)

// Cách khác

var date = Date();
console.log(date) 

// Năm và tháng

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(' ${day}/${month}/${year}');

//Từ khóa: javascript date object mozilla

//EX: Để vượt qua thử thách này, bạn hãy tạo hàm getNextYear, hàm này sẽ trả về năm kế tiếp. Ví dụ, năm nay là 2022, hàm sẽ trả về 2023 là kiểu số.

function getNextYear() {
  let date = new Date(); // Tạo đối tượng Date tại thời điểm gọi hàm
  return date.getFullYear() + 1;
}

const nextYear = getNextYear();
console.log(nextYear); // Sẽ hiển thị năm tiếp theo sau năm hiện tại
