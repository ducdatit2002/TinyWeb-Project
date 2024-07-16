Quỳnh Nguyễn
// 1. Var / Let, Const: Scope, Hosting 
// 2. Const / Var, Let: Assignment

//SCOPE -- chỉ có var được truy cập ở ngoài
// Code block: if else, loop, {}, ...
{
    var x1 = 'var'
    const x2 = 'const'
    let x3 = 'let' {
        {
            console.log(x1) //ok
            console.log(x2) //ok
            console.log(x3) //ok
        };
    };
};
/*
console.log(x1) //ok
console.log(x2) //error
console.log(x3) //error
*/

//HOSTING(đưa lên trên) -- chỉ có var được hỗ trợ hosting
a = 1
var a
console.log(a)

// ASSIGNMENT -- chỉ có const không thể gán lại lần 2


/*
Code thuần: Var
Babel: const, let
- const khi định nghĩa biến & không gán lại biến đó
- let khi gán lại giá trị cho biến
*/