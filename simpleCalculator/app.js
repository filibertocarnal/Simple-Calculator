function addNumbers() {

	var number1 =
	parseInt(document.getElementById("number1").value);

	var number2 =
	parseInt(document.getElementById("number2").value);


	document.getElementById('postAddSolution').innerHTML = number1 + number2;

}

function subNumbers() {
	var number3 = 
	parseInt(document.getElementById("number3").value);

	var number4 =
	parseInt(document.getElementById("number4").value);

	document.getElementById('postSubSolution').innerHTML = number3 - number4;
}

function divNumbers() {
	var number5 =
	parseInt(document.getElementById("number5").value);

	var number6 =
	parseInt(document.getElementById("number6").value);

	document.getElementById('postDivSolution').innerHTML = number5 / number6;
}