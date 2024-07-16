//Object prototype - basic

// 1. Prototype là gì?
// 2. Sử dụng khi nào?

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getNam = function() {
        return '$(this.firstName) $(this.lastName'
    }
}
User.prototype.className = 'F8'; 
User.prototype.getClassName = function() {
    return this.className;
}

var user = new User('Sơn', 'Đặng', 'Avatar');
var user2 = new User('Vũ', 'Nguyễn', 'Avatar');

console.log(user.className);
console.log(user2);

