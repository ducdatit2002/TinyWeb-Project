//Do-while loop
var i = 0;
var isSucceeded = false;
do {
  i++;
  console.log('Nạp thẻ lần' + i);
  //Thành công
  if (true) {
    isSucceeded = true;
  }
} while (!isSucceeded && i <= 3);
