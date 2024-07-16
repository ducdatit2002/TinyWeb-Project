// Toán tử ++ --
// Prefix (Tiền tố) và Postfix (Hậu tố)

var a = 6;

// Tiền tố (Prefix)
// Việc 1: +1 cho a; a = a +1 => a = 7
// Việc 2: Trả về a sau khi được + 1
var output = ++a;
console.log('output: ', output); //=> trả về a = 7


// Hậu tốt (Postfix)
// Việc 1: 'a copy', 'a copy' = 6
// Việc 2: trừ 1 của a, a = a - 1 => a = 5
// Việc 3: trả về 'a copy'

var output = a--;
console.log('output: ', output); //=> trả về a = 6
console.log('a= ', a); //=> trả về a = 7 



//Ví dụ khó:
var number = 6;
var output = number++ + --number;

// giá trị là 6 + 6

console.log('output: ', output);

//Ví dụ khó hơn:
var number = 6;
var output = ++number * 2 - number-- * 2;

// giá trị là 7 * 2 - 7 * 2 = 0

console.log('output: ', output);