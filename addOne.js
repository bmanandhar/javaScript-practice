/*
Function that works with an array as a car
odometerby adding 1 to the last integer,
all elements of array are between 0 and 9.
[1,2,3] --> [1,2,4],
[9,8,7] --> [9,8,8],
[6,5,9] --> [6,6,0],
[3,9,9] --> [4,0,0] and
[9,9,9] --> [1,0,0,0]
*/

function addOne(array){
  var carry = 1;
  //iteration reverse way
  for (var i = array.length - 1; i >= 0; i--){
    var total = array[i] + carry;
    if (total % 10 == 0){
      array[i] = 0;
    }
    else {
      carry = 0;
      array[i] = total % 10;
    };
  };
//if carry is still 1 after final iteration
  if (carry == 1){
    array = [1].concat(array);
  };
  return array
};

console.log(addOne([1,2,3]));//=[1,2,4]
console.log(addOne([9,8,7]));//=[9,8,8]
console.log(addOne([6,5,9]));//=[6,6,0]
console.log(addOne([3,9,9]));//=[4,0,0]
console.log(addOne([9,9,9]));//[1,0,0,0]
