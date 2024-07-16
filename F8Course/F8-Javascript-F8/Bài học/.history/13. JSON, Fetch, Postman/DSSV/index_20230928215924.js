var courseAPI = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);

    handleCreateForm();

    handleUpdateForm();
}

start();

function getCourses(callback) {
    fetch(courseAPI)
        .then(response => {
            return response.json();
        })

        .then(callback)
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');

    var htmls = courses.map(course => {
        return `
            <li class="course-item-${course.id}">
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="deleteCourse(${course.id})">Xóa</button>
                <button onclick="handleUpdateForm(${course.id})">Sửa</button>
            </li>
        `;
    })

    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = { name, description};

        createCourses(formData, function() {
            getCourses(renderCourses);
        });
    }
}

function createCourses(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    
    fetch(courseAPI, options)
        .then(response => {
            return response.json();
        })

        .then(callback)
}

function deleteCourse(id, callback) {
    var options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    fetch(courseAPI + '/' + id, options)
        .then(response => {
            return response.json();
        })

        .then(function() {
            var courseItem = document.querySelector('.course-item-' + id);

            if(courseItem) {
                courseItem.remove();
            }
        })
}

function updateCourses(data, id, callback) {
    var options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };

    fetch(courseAPI + '/' + id, options)
        .then(response => {
            return response.json();
        })

        .then(callback)
}

function handleUpdateForm(id) {
    var copyName = document.querySelector('.course-item-' + id + ' h4').innerText;
    var copyDescription = document.querySelector('.course-item-' + id + ' p').innerText;

    document.querySelector('input[name="name"]').value = copyName;
    document.querySelector('input[name="description"]').value = copyDescription;

    var btn = document.querySelector('#create');
    btn.innerHTML = 'Save';

    btn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var updateData = { name, description };

        updateCourses(updateData, id, function() {
            getCourses(renderCourses);
        })
    }
}