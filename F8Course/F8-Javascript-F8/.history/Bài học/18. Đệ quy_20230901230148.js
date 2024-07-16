function deQuy() {
    deQuy();
}
deQuy();

// 1. Xác định điểm dừng
//
function countDown(num) {
    if (num > 0) {
        console.log(num);
        return countDown(num - 1);
    }
    return num;
}
countDown(3);