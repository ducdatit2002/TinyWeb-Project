var courseApi = 'http://localhost:3000/course';

function start() { getCourses(renderCourses);

handleCreateForm();
} Sao mình ra request method là GET nhỉ

start();

// Functions function getCourses(callback) { fetch(courseApi) .then(function(response) { return response.json(); }) .then(callback); }

function renderCourses(courses) { var listCorsesBlock = document.querySelector('#list-courses'); var htmls = courses.map(function(course) { return             <li>                 <h4>${course.name}</h4>                 <p>${course.description}</p>             </li>         }); listCorsesBlock.innerHTML = htmls.join("") }

function createCourse(data, callback) { var options = { method: 'POST', body: JSON.stringify(data) }; fetch(courseApi, options) .then(function(response) { response.json(); }) .then(callback); }

function handleCreateForm() { var createBtn = document.querySelector('#create');

createBtn.onclick = function() {
    var name = document.querySelector('input[name = "name"]').value;
    var description = document.querySelector('input[name = "description"]').value;
    var formData = {
        name: name,
        desription: description
    };

    createCourse(formData);
}
}