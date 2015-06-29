function isEven(number){
	if(number == 0)
		return "Even";
	else if(number == 1)
		return "Odd";
	else
		return isEven(number-2);
}