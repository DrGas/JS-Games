/****************************
	
	Create a quiz based on the array "questions" ['question', correct answer].
	Each question must be presented using the prompt() method, allow user input and provide feedback using alert() - either "Correct!" or "Sorry. The correct answer is [correct number].)
	
	After the quiz is finished the overall result is published: "You got [number of correct answered questions] out of [questions in total] questions correct!"
	
	
	****************************/
var questions = [							 
		['How many moons does Earth have?', 1],					 
		['How many moons does Saturn have?', 31],
		['How many moons does Venus have?', 0]	
	];

function userInput() {
	'use strict'; 
	//counting array within array, so the first [] is which array in general it is and second [] is which thing within this array is SO [0,0] is //Earth and [0][1] is answer which is 1, 
	//then [1][0] is Saturn answer [1,1] = 31,
	//Venus [2][0] answer [2][1] = 0
	let number1 = parseInt(prompt(questions[0][0], '')); 
	let number2 = parseInt(prompt(questions[1][0], ''));
	let number3 = parseInt(prompt(questions[2][0], ''));
	//this outputs a sting! 
	let result = number1 + number2 + number3; //parsing string into int
	//the result into the output
	output.innerHTML = 'Your result is ' + result + '!';

}
userInput();

