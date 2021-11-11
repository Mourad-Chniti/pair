function sum(number) {
	if (number === 0) {
		return 0
	}
	return number + sum(number-1)
}

function factorial(number) {
	if (number === 0) {
		return 1;
	}
	return number * factorial(number-1)

	}

	function repeatString(string, number) {
		if(number === 0) {
			return " ";
		}
        return string + repeatString(string, number -1) 
	}


function fibonacci(number) {
if (number === 1 ) {
	return 1;
} else if  (number ===0){
	return 0;
}
return fibonacci(number-2) + fibonacci(number - 1)
}




function multiplyBy10(firstNumber, secondNumber) {
  if (secondNumber === 0 ) {
    return 1;  
   }
    return firstNumber* multiplyBy10( 1, secondNumber-1)*10 ; 
}


//More Practice
// NOT DONE YET 
//1

function sumBetween(start, end) {
	if (end != 0) {
		return sumBetween(start + 1 , end-1) ;
	}  return start;

}

 //2
function add(number1, number2) {
   if (number2 === 0) {
   	return 0 ;
   } return inc(number1) + dec(number2) 

}  function inc(x) {
   return x + 1 

}  function dec(x) {
   return x - 1 

}  

//3
// NOT DONE YET
function addTogether (x,y) {
	if (y === 0) {
		return 0;
	} 
	function inc(x) { 
    return x + 1; 
 } 
    function dec(x) {
    return x - 1 
}  
}

//4
function isEven (number) {
	if (number === 0) {
  	return true ; 
  } 
    if (number === 1) {
	return false ;
}
 return isEven(number - 2) 
}

//5
function multiply(number1, number2) {
if (number2===0){
	return 0
}	
return number1 + multiply(number1,number2-1)			
}

 






