var listCoursesBlock = document.querySelector('list-courses')

var coursesApi = 'http://localhost:3000/courses'

function start() {
    getCourses(function(courses) {
        ren
    });
}

start();

function getCourses(callback) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses() {

}