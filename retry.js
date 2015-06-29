function MultiplicatorUnitFailure(message){
	this.message = message;
	this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(a,b){
	if(Math.random() < 0.5)
		return a*b;
	else
		throw new MultiplicatorUnitFailure("Invalid numbers getting multiplied!");
}

try{
	console.log(primitiveMultiply(Math.floor(Math.random()*10), Math.floor(Math.random()*10)));
}
catch(e){
	if(e instanceof MultiplicatorUnitFailure)
		console.log(e.message);
	else
		console.log(e);
}
