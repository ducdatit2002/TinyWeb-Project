//Break and continue

//BREAK
for (var i = 0; i <10; i++) {
    console.log(i);
    if (i >= 5) {
        break;
    }
}
//CONTINUE
for (var i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;
    }
    console.log(i);
}