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
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'PHP',
        coin: 400
    },
    {
        id: 5,
        name: 'ReactJS',
        coin: 500
    }
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

