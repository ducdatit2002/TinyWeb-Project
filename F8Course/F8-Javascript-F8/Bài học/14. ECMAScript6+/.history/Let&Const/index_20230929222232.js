/**/

const PI = 3.14;
const PI = 5.16 // Lỗi không thể gán giá trị cho hằng số const

let a = 5;
a = 10; // Giá trị a có thể được gán lại là 10;

function() {
    var a = 8;
    console.log(a); // a = 8
}
console.log(a); // Lỗi a không được định nghĩa vì đang truy cập bên ngoài phạm vi hàm