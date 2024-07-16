function deQuy() {
    deQuy();
}
deQuy();

// 1. Xác định điểm dừng
// 2. Logic handel => tạo ra điểm dừng
function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(3);

function loop(start, end, cb) {
    if (start < end) {
        cb(start);
        return loop(start + 1, end, cb);
    }
}

var array = ['Javascript', 'PHP', 'Ruby'];

loop(0, array.length - 1, function)