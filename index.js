function iterativeLog(arr){
  var index = 0;
  arr.forEach(ele => {
    console.log(`${index}: ${ele}`);
    ++index;
  })
}

function square(n){
  console.log(n*n);
}

function iterate(callback){
  var arr = [2, 4, 6];
  arr.forEach(callback);
  return arr;
}
//iterate(square)

function doToArray(arr, callback){
  arr.forEach(callback);
}

