function logFive(seq){
	for(var i=0; i<5; i++){
		if(!seq.next())
			break;
		console.log(seq.current());
	}
}

function ArraySeq(arr){
	this.pos = -1;
	this.array = arr;
}

ArraySeq.prototype.next = function(){
	if(this.pos >= this.array.length - 1)
		return false;
	this.pos++;
	return true;
};

ArraySeq.prototype.current = function(){
	return this.array[this.pos];
};

function RangeSeq(from, to){
	this.pos = from - 1;
	this.to = to;
}
RangeSeq.prototype.next = function(){
	if(this.pos >= this.to)
		return false;
	this.pos++;
	return true;
}
RangeSeq.prototype.current = function(){
	return this.pos;
}
logFive(new ArraySeq([1,2,3,4]));
console.log("\n");
logFive(new RangeSeq(100,200));