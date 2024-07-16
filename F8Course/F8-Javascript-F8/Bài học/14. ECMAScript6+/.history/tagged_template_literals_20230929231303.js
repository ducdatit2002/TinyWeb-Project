// Tổng hợp các cách của mọi người

function heightlight([...strings], ...values) { // Nếu tham số là ([...strings], ...values) tham số thứ nhất BẮT BUỘC phải để trong ngoặc vuông, tham số thứ 2 có hay không cx được

    console.log("first: ", first); // Học lập trình <-- Chuỗi
    console.log("strings: ", strings); // [' tại ', '!']
    console.log("values: ", values); // ['JS', 'F8']        

    return values.reduce(function(acc, curr) {
            return [...acc, `<span>${curr}</span>`, strings.shift()] // strings.shift() - xóa và trả ra phần tử thứ nhất của mảng strings
        }, [first]) // curr sẽ được duyệt từ đầu đến cuối trong mảng values
        .join(''); // acc có giá trị khởi tạo ban đầu là 'Học lập trình' và là 1 mảng 
    //     + Vì acc là 1 mảng nên ta phải dùng spread để phá ngoặc 

    /*  C2
        return values.reduce(
            (acc, curr) => {
                acc += `<span>${curr}</span>` + strings.shift();
                return acc;
            }
        , [first])
    */

    /*  C3 
        return values.reduce(
            (acc, curr) => `${acc}${curr}${strings.shift()}`
        , first);
    */

    // x = [ '1', '2', ['3', '4'], ['5', '6']];     console.log(x.join(''))     // chuỗi 123,45,6
}

var brand = 'F8';
var course = 'JS';
var html = heightlightHọc lập trình $ { course }
tại $ { brand }!; // Học lập trình 'JS' tại 'F8'! console.log(html);