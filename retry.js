function MultiplicatorUnitFailure(message){
	this.message = message;
	this.stack = (new Error()).stack;
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype);
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure";

function primitiveMultiply(n){
	for(var i = 0; i < (n*2); i++){
		try{
			if(i%2 == 0)
				console.log(Math.random()*10)*(Math.random()*10);
			else
				throw new MultiplicatorUnitFailure("Invalid Numbers getting multiplied!");
		}
		catch(e){
			if(e instanceof MultiplicatorUnitFailure)
				console.log(e.message);
			else
				console.log(e);
		}
	}
}


primitiveMultiply(2);