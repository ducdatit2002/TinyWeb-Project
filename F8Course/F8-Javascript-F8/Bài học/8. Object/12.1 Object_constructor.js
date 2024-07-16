// Object constructor

function User(firstName, lastName, avatar) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;

    this.getNam = function() {
        return '$(this.firstName) $(this.lastName'
    }
}

var author = new User('Sơn', 'Đặng', 'Avatar');
var user = new User('Vũ', 'Nguyễn', 'Avatar');

author.title = 'Chia sẻ dạo tại F8';
user.comment = 'Đức Đạt rất đẹp trai';

console.log(author.getName());
console.log(user.getName());

