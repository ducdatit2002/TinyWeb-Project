// Làm việc với chuỗi

var myString = 'Hoc cung Duc Dat Duc Dat Duc Dat ne!';
//Key words: Javascript string methods

//1. Length
console.log(myString.length)
//2. Find index
console.log(myString.indexOf('Dat'))

console.log(myString.lastIndexOf('Dat'))

console.log(myString.search('Dat'))

//3. Cut string
console.log(myString.slice(4,6 ))
//4. Replace
console.log(myString.replace('JS', "JavaScript"))
//5. Convert to upper case
console.log(myString.toUpperCase())
//6. Convert to lower case
console.log(myString.toLowerCase())
//7. Trim
console.log(myString.trim())
//8. Split //Cắt thành phần tử của mảng
var languages = 'Javascript, PHP, Ruby';

console.log(languages.split(', ')) 
//9. Get a character by index
const myString2 = 'Thanh Nhàn'
console.log(myString2.charAt(0))

//Cách khác
console.log(myString2[10])