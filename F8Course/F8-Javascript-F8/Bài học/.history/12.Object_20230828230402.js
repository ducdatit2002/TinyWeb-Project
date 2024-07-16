// Object trong Javascript

var myInfo = {
    name: 'Duc Dat',
    age: 20,
    address: 'TPHCM, VN'
}
myInfo.email = 'ducdatit2002@gmail.com';
//Cách khác
myInfo.["my-email"] = 'ducdatit2002@gmail.com';
console.log(myInfo);

//lấy ra 1 info thôi

console.log(myInfo.email);
//cách khác
console.log(myInfo['address']);

//Cách xóa key value
deleta myInfo.age;

 