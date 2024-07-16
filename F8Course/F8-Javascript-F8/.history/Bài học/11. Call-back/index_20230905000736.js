// Callback?

//Là hàm function được truyền qua đối số
//Khi gọi hàm khác

//1. Là hàm
//2. Được truyền qua đối số
//3. Được gọi lại (trong hàm nhận đối số)


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
Array.prototype.map2 = function (callback) {
    var output = [], arrayLength = this.length;

    for (var i = 0; i < arrayLength; i++) {
        var result = callback(this[i], i);
    }
};

var courses = ['Javascript', 'PHP', 'Ruby'];

courses.map2(function(course, index) {
    console.log(index, courses);
});