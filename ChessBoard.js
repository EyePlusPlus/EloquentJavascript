var size = 8;

var str = "";

for (var y = 0; y < size; y++) {  
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      str += " ";
    else
      str += "#";
  }
  str += "\n";
}

console.log(str);
