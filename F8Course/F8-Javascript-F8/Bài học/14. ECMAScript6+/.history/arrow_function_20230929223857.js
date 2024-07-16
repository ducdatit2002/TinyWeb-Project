const courses = {
    name: 'Thắng lại lập trình',
    getname: () => {
        return courses.name
    }
}

console.log(courses.getname())
    // Kết quả trả về là Thắng lại lập trình


const courses2 = {
    name: 'Thắng lại lập trình2',
    getname: () => {
        return this.name
    }
};

console.log(courses2.getname());