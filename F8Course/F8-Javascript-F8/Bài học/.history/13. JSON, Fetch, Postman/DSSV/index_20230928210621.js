

var coursesApi = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourses);
}

start();

function getCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('list-courses')
    var html = courses.map(function(course) {
        return `
        `
    });
}