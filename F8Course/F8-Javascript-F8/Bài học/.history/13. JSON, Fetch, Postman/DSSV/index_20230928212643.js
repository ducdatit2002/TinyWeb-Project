

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

function createCourse(data) {
    var options = {
        method = 'POST',
        body: 
    }
    fetch(coursesApi, options)
}
function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}

function handelCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        name = document.querySelector('input[name = "name"]').value;
        description = document.querySelector('input[name = "description"]').value;
        
    }
}