var courseApi = 'http://localhost:3000/courses'
  
function start(){
    getCoursesByApi()
    handleCreateCourse()
    
}

start()

function getCoursesByApi(){
    fetch(courseApi)
        .then(function(response){
            return response.json()
        })
        .then(function(courses){
            renderCourses(courses)
        })
}

function renderCourses(courses){
    var elementListCourse = document.querySelector('#list-courses')
    var renderCourses = courses.map(function(course){
        return `
        <li class="list-course-${course.id}">
            <h4>${course.name}</h4>
            <p>${course.description}</p>
            <button onclick="handleDeleteCourse(${course.id})">Xóa</button>
            <button onclick="handleChangeCourse(${course.id})">Chỉnh sửa</button>
        </li>`
    })
    elementListCourse.innerHTML=renderCourses.join('')
}