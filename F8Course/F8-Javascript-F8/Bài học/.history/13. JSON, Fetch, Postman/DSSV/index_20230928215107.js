var courseApi = "http://localhost:3000/courses";
var coursesBlock = document.querySelector(".ul-block");

var nameIp = document.querySelector("#input-name");
var descIp = document.querySelector("#input-desc");
var createBtn = document.querySelector("#create");
var updateBtn = document.querySelector("#update");

function start() {
  getCourses(renderCourses);

  handleCreateCourses();
}

start();

function getCourses(callback) {
  fetch(courseApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourses(data, callback) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch(courseApi, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function updateCourse(data, callback) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  fetch(courseApi + "/" + data.id, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function handleDeleteCourse(id) {
  const options = {
    method: "DELETE"
  };
  fetch(courseApi + "/" + id, options)
    .then(function (response) {
      return response.json();
    })
    .then(function () {
      const courseItem = document.querySelector(".course-item-" + id);
      if (courseItem) {
        courseItem.remove();
      }
    });
}

function renderCourses(courses) {
  var htmls = courses.map(function (course) {
    return `<li class="course-item-${course.id}">
            <h2 class="course-name-${course.id}">${course.name}</h2>
            <p class="course-desc-${course.id}">${course.description}</p>
            <button onclick="handleEditCourses(${course.id})">Edit</button>
            <button onclick="handleDeleteCourse(${course.id})">Delete</button>
        </li>`;
  });

  coursesBlock.innerHTML = html.join('');
}

function handleCreateCourses() {
  createBtn.onclick = function () {
    const name = nameIp.value;
    const description = descIp.value;
    const formData = {
      name: name,
      description: description
    };

    if (formData.name && formData.description !== "") {
      createCourses(formData, function () {
        getCourses(renderCourses);
        clear();
      });
    }
  };
}

function handleEditCourses(id) {
  const courseName = document.querySelector(".course-name-" + id).textContent;
  const courseDesc = document.querySelector(".course-desc-" + id).textContent;
  createBtn.style.display = "none";
  updateBtn.style.display = "inline-block";

  nameIp.value = courseName;
  descIp.value = courseDesc;
  updateBtn.onclick = function () {
    const formData = {
      id: id,
      name: nameIp.value,
      description: descIp.value
    };
    updateCourse(formData, function () {
      getCourses(renderCourses);
      updateBtn.style.display = "none";
      createBtn.style.display = "inline-block";
      clear();
    });
  };
}

function clear() {
  nameIp.value = "";
  descIp.value = "";
}
