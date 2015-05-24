function reverseArray(arr){
	var newArr = []
	for(var i=arr.length-1; i>=0; i--)
		newArr.push(arr[i]);
	return newArr;
}

function reverseArrayInPlace(arr){
	for(i=0;i<=Math.floor((arr.length)/2);i++){
		var temp = arr[i];
		arr[i] = arr[(arr.length-1)-i];
		arr[(arr.length-1)-i] = temp;
	}
	return arr;
}
orgArr = [1,2,3,4,5];
console.log(orgArr); //1,2,3,4,5
console.log(reverseArray(orgArr)); //5,4,3,2,1
console.log(orgArr); //1,2,3,4,5
console.log(reverseArrayInPlace(orgArr)); //5,4,3,2,1
console.log(orgArr); //5,4,3,2,1