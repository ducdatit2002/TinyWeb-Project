// Callback?

//Là hàm function được truyền qua đối số
//Khi gọi hàm khác

//1. Là hàm
//2. Được truyền qua đối số
//3. Được gọi lại

//Phần 01
function myFunction(param) {
    if (typeof param === 'function') {
    param('Học lập trình');
    }
}
function myCallback(value) {
    console.log('Value: ' , value);
}
myFunction(myCallback);

//Phần 02
