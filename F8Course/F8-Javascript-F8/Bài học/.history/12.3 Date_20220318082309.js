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