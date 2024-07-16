//=== Một số lưu ý khi sử dụng...rest làm defaut params ===

const person = {
    name: "Lydia",
    age: 21,
};
const changeAgeandName1 = (x = {...person }) => (x.name = 'Không có tham số person | Defaut parameters với ...Rest');
const changeAgeAndName2 = (x = {...person }) => {
    x.age += 4;
    x.name = "Có tham số person | Defaut parameters với ...Rest";
};

//TH1: giá trị của person không bị thay đổi. Vì ...Rest sẽ rải các phần tử của person vào tham số x
changeAgeandName1()
console.log(person)


//TH2: giá trị của person bị thay đổi. Vì tham số truyền vào chính là person. 
changeAgeAndName2(person)
console.log(person)