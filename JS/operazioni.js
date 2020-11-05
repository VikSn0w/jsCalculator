var Result  = document.getElementById("Result");
var Result1 = document.getElementById("Result1");

var NUMBERS    = [];
var OPERATIONS = [];

window.onload = init;

function init()       { Result = document.getElementById("Result"); Result1 = document.getElementById("Result1");}
function addText(text){ Result.innerHTML += text; }
function consolePrintArray(array) {for(let i = 0; i < array.length; i++){console.log(array[i])};}

function resetArray(array, flag)
{
	if(flag == true)for(let i = 0; i < array.length; i++)array[i] = 0;
	else for(let i = 0; i < array.length; i++)array[i] = "";
}

function findNumber(sentence) 
{
	resetArray(NUMBERS);
	resetArray(OPERATIONS);

	let number = "";
	let k = 0;
	for (let i = 3, j = 0; i < sentence.length; i++) 
	{
		console.log(sentence[i]);
		switch (sentence[i])
		{
			default:
				number += sentence[i];
			break;

			case '+':
				if(sentence[i+1] == "+" || sentence[i+1] == "-" || sentence[i+1] == "/" || sentence[i+1] == "*")alert("Error! - Too many operators!");
				else if(i == sentence.length-1) alert("Error! - Missing number!");
				else
				{
					OPERATIONS[j] = sentence[i]; j++;
					NUMBERS[k]    = number; k++;
					number = "";
				}
			break;
			case '-':
				if(sentence[i+1] == "+" || sentence[i+1] == "-" || sentence[i+1] == "/" || sentence[i+1] == "*")alert("Error! - Too many operators!");
				else if(i == sentence.length-1) alert("Error! - Missing number!");
				else
				{
					OPERATIONS[j] = sentence[i]; j++;
					NUMBERS[k]    = number; k++;
					number = "";
				}
			break;
			case '/':
				if(sentence[i+1] == "+" || sentence[i+1] == "-" || sentence[i+1] == "/" || sentence[i+1] == "*")alert("Error! - Too many operators!");
				else if(i == sentence.length-1) alert("Error! - Missing number!");
				else
				{
					OPERATIONS[j] = sentence[i]; j++;
					NUMBERS[k]    = number; k++;
					number = "";
				}
			break;
			case '*':
				if(sentence[i+1] == "+" || sentence[i+1] == "-" || sentence[i+1] == "/" || sentence[i+1] == "*")alert("Error! - Too many operators!");
				else if(i == sentence.length-1) alert("Error! - Missing number!");
				else
				{
					OPERATIONS[j] = sentence[i]; j++;
					NUMBERS[k]    = number; k++;
					number = "";
				}
			break;
		}
	}
	NUMBERS[k] = number;

	let result = NUMBERS[0];

	for(let i = 0, j = 1; i < OPERATIONS.length; i++, j++)
	{
		switch (OPERATIONS[i])
		{
			case '+':
				result = Number(result)+ Number(NUMBERS[j]);
			break;

			case '-':
				result -= Number(NUMBERS[j]);
			break; 

			case '/':
				result /= Number(NUMBERS[j]);
			break;

			case '*':
				result *= Number(NUMBERS[j]);
			break;
		}
	}

	console.log("NUMBERS:")
	consolePrintArray(NUMBERS);
	console.log("OPERATIONS:")
	consolePrintArray(OPERATIONS);

	console.log(result);

	Result1.innerHTML = "R: "+result;
}

document.addEventListener('click', function(e)
{
	let target = e.target;
	if(target.tagName === "BUTTON")
	{
		let text = target.textContent;
		switch(text)
		{
			case 'C' : 
				var str = Result.innerHTML;
				if(str != "S: ") Result.innerHTML = str.substring(0, str.length - 1);
			break;
			case 'CE': 
				Result.innerHTML = "S: "; 
				resetArray(NUMBERS);
				resetArray(OPERATIONS);
				Result1.innerHTML = "R: ";
			break;
			case '<-': 
				var str = Result.innerHTML;
				findNumber(str);
			break;

			default: addText(text);
		}
	}
}, false);