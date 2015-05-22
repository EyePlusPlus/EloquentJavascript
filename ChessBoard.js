var str = '';
var size = 8;
var swap = true;
for(var i = 1; i <= (size * size); i++){
	str += (swap)? " " : "#";
	if(i%size == 0){
		if(size%2 == 0)
			swap = !swap;
		str += "\n";
	}
	swap = !swap;
}
console.log(str);