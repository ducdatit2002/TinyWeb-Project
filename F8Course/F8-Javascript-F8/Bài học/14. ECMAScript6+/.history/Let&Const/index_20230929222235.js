/**
 * const (Hằng số): Là từ khóa để khai báo một hằng số, tức là một giá trị mà không thể thay đổi sau khi khởi tạo.Một lần khởi tạo giá trị, nó không thể được gán lại với giá trị khác.Chỉ truy cập trong phạm vi là một hàm(Phạm vi khối) nghĩa là phạm vi xác định trong cặp {}.

let: Là từ khóa để khai báo một biến có giá trị có thể thay đổi sau khi khởi tạo.Một biến được khai báo bằng từ khóa
let có thể được khởi tạo mà không cần phải gán giá trị ngay lập tức.Ví dụ: let a;

var: Là từ khóa để khai báo một biến có giá trị có thể gán lại sau khi khởi tạo.Tuy nhiên, biến được khai báo bằng từ khóa
var có phạm vi toàn cục(global scope) hoặc phạm vi hàm(function scope), và nó có thể được truy cập bên ngoài phạm vi đó.Nghĩa là: Khi khai báo
var, bạn có thể viết ở trên đầu của toàn bộ code của bạn để có thể truy cập và gán lại giá trị của nó ở bất cứ nơi đâu không giới hạn.Hoặc nếu khai báo trong phạm vi hàm thì nó chỉ có thể được truy cập trong phạm vi hàm thôi.Ra ngoài hàm sẽ báo lỗi.
/

const PI = 3.14;
const PI = 5.16 // Lỗi không thể gán giá trị cho hằng số const

let a = 5;
a = 10; // Giá trị a có thể được gán lại là 10;

function() {
    var a = 8;
    console.log(a); // a = 8
}
console.log(a); // Lỗi a không được định nghĩa vì đang truy cập bên ngoài phạm vi hàm