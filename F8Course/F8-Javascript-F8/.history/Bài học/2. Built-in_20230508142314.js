/* <!-- Giới thiệu một số hàm built-in
1. Alert
2. Console 
3. Confirm
4. Prompt
5. Set timeout
6. Set interval
 -->
*/
console.log ('Day la 1 dong log')

confirm('Xac nhan ban du tuoi!'); //để xác nhận

prompt('Xac nhan ban du tuoi!'); //có thể nhập vào hộp thoại

setTimeout(function () { 
    alert('Thong bao')
}, 1000);
//Chạy một lần sau khoảng thời gian

setInterval(function () { 
    console.log ('Day la 1 dong log')
}, 1000);
//Chạy định kì sau khoảng thời gian