/* Làm  việc với array

//Keyword: Javascript array methods

1. To string
2. Join
3. Pop
4. Push 
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Spicing
*/

var languages = [
    'Duc Dat',
    'Thanh Nhan',
    'Minh Huy',
    'Viet Duc'
]
//Chuyển từ dạng array sang dạng string
console.log(languages.toString())

//Thay đổi dấu - khoảng cách ở giữa các phần tử 
console.log(languages.join(''))

//Xóa element cuối mảng và trả về phần tử đã xóa
console.log(languages.pop( ))

// Push: thêm 1 phần tử vào cuối cùng

//Shift: xóa đi phần tử đầu mảng và trả về phần tử đã xóa

//Unshift: thêm 1 or nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng

//Splicing: Dùng để xóa phần tử hoặc chèn phần tử 
languages.splice(1, 0, 'Dart')
//Số 1: thứ tự, số 0: quyết định có xóa phần tử nào koo

//Concat: dùng để hợp nhất 2 mảng

var languages = [
    'Duc Dat',
    'Ha Thao'
]
var languages2 = [
    'Thanh Nhan'
]
console.log(languages.concat(languages2))

//Slicing: dùng để cắt phần tử

console.log(languages.slice(0, 2))
//0: số bắt đầu ; 2: số phần tử