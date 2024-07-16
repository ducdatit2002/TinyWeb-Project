/**
 Array methods:
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
 */
var courses = [
  {
    id: 1,
    name: "Javascript",
    coin: 250,
  },
  {
    id: 2,
    name: "HTML, CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "Ruby",
    coin: 0,
  },
  {
    id: 4,
    name: "PHP",
    coin: 400,
  },
  {
    id: 5,
    name: "ReactJS",
    coin: 500,
  },
  {
    id: 6,
    name: "Ruby",
    coin: 2000,
  },
];
courses.forEach(function(course, index) {
    console.log(index, courses);
});

var isFree = courses.every(function(course, index) {
    return course.coin === 0;
});
console.log(isFree);

var isFree = courses.some(function (course, index) {
  return course.coin === 0;
});
console.log(isFree);

var course = courses.find(function (course, index) {
  return course.name === 'Ruby';
});
console.log(course);

var listCourse = courses.filter(function (course, index) {
  return course.name === "Ruby";
});
console.log(listCourse);

function courseHandler(course, index){
    //console.log(course);
    return {
        id: course.id,
        name: `Khoá học: ${course.name}`,
        coin: course.coin,
        coinText: `Giá: ${course.coin}`,
        index: index,
        originArray: course,
    }
}
function courseHandler(course, index) {
    return course.name;
}
var newCourses = courses.map(courseHandler);
console.log(newCourses);

//Hàm reduce
var totalCoin = 0; //Biến lưu trữ
for (var course of courses) { //Lặp qua các phần tử
  totalCoin += course.coin; //Thực hiên việc lưu trữ
}
console.log(totalCoin);

//Dùng hàm reduce

var totalCoin2 =  courses.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue.coin;
}, 0);

console.log(totalCoin2);

var totalCoin = courses.reduce(function(total, course) {
  return total + course.coin;
}, 0); //initial value

console.log(totalCoin);

var numbers = [100, 200, 220, 200, 480];
var totalCoin = numbers.reduce(function(total, number) {
  return total + number;
}, 0); //initial value
console.log(totalCoin);


// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem) {
  return flatOutput.concat(depthItem);
}, []);
console.log(flatArray);

//Lấy ra các khoá học đưa vào 1 mảng mới
var topics = [
  {
    topic: "Front-end",
    courses: [
      {
        id: 1,
        title: "HTML, CSS"
      },
      {
        id: 2,
        title: "Javascript"
      }
    ]
  },
  {
    topic: "Back-end",
    courses: [
      {
        id: 1, 
        title: "PHP"
      },
      {
        id: 2,
        title: "NodeJS"
      }
    ]
  },
];
var newCourses = topics.reduce(function () {

}, []);