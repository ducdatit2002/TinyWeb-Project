

var coursesApi = 'http://localhost:3000/courses'

function start() {
    getCourses(renderCourses);
    handelCreateForm();
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
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.author}</p>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handelCreateForm() {
    var createBtn = document.querySelector('
}