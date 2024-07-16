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
        output.push(result);
    }
    return output;
};

var courses = ['Javascript', 'PHP', 'Ruby'];

var htmls = courses.map2(function(course) {
    return `<h2>${courses}</h2>`;
});
console.log(htmls.join(''));

//Empty elements for array
var courses = new Array(10, 12);
courses.push('14');
courses.length = 10;

for (var index in courses) {
    console.log(courses[index]);
}

//For each

var courses = ['Javascript', 'PHP', 'Ruby'];
//courses.length = 1000;
//console.log(courses);
courses.forEach(function(course, index, array){
    console.log(course, index, array)
});
