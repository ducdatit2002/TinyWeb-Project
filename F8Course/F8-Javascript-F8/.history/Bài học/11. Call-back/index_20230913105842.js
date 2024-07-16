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
Array.prototype.forEach2 = function (callback) {
    for (var index in this) {
        console.log('index: ' + index);
    }
};
var courses = ['Javascript', 'PHP', 'Ruby'];
//courses.length = 1000;
//console.log(courses);
courses.forEach2(function(course, index, array){
    console.log(course, index, array)
});


//Filter

Array.prototype.filter2 = function(callback) {
    var output = [];
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
             var result = callback(this[index],index,this);
             if (result) {
                output.push(this[index]);
             }
        }
    }
    return output;
};
var courses = [
    {
        name: 'JavaScript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];

var filterCourses = courses.filter2(function(course, index, array) {
    console.log(course, index, array);
    //return courses.coin > 700;
});
console.log(filterCourses);

//Some
Array.prototype.some2 = function(callback) {
    for (var index in this){
        if (this.hasOwnProperty(index)) {
            if (callback(this[index],index, this)) {
                return true;
            };
        }
    }
    return false;
}
var courses = [
  {
    name: "JavaScript",
    coin: 680,
    isFinish: true,
  },
  {
    name: "PHP",
    coin: 860,
    isFinish: false,
  },
  {
    name: "Ruby",
    coin: 980,
    isFinish: false,
  },
];
var result = courses.some2(function(course, index, array) {
    return courses.isFinish;
});
console.log(result);