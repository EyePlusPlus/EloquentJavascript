function range(start, end){
	var arr = [];
	for(var i=start; i<=end; i++)
		arr.push(i);
	return arr;
}

function stepRange(start, end, step){
	if(step == undefined) step = 1;
	var arr = [];
	if(start > end){
		for(var i=start; i>=end; i+=step)
			arr.push(i);
	}
	else{
		for(var i=start; i<=end; i+=step)
			arr.push(i);
	}
	return arr;
}

function sum(arr){
	var sum = 0;
	for(var i=0; i<arr.length; i++)
		sum += arr[i];
	return sum;
}

console.log(range(2,5)) //2, 3, 4, 5
console.log(range(5,2)) //[]
console.log(sum(range(1,10))) //55
console.log(stepRange(2,15,2)) //2, 4, 6, 8, 10, 12, 14
console.log(stepRange(5,2,-1)) //5, 4, 3, 2
