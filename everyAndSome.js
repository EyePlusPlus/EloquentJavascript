function every(arr, predicate){
  var result = true;
  arr.forEach(function(ele){
    if(!predicate(ele)) result = false;
  });
  return result;
}

function some(arr, predicate){
  var result = false;
  arr.forEach(function(ele){
    if(predicate(ele)) result = true;
  });
  return result;
}


var arr = [1,2,3,4,5,6,7,10];

console.log(every(arr, function(a){
  return (a > 7);
})); //false
console.log(some(arr, function(a){
  return (a > 7);
})); //true
console.log(every(arr, function(a){
  return (a < 11);
})); //true
console.log(some(arr, function(a){
  return (a > 11);
}));//false