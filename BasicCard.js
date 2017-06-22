var inquirer = require("inquirer"); 
var UserSearch = require("./UserSearch.js"); 
var Questions = require("./questions.js"); 

var arr = [];  
var on = 0; 

for (var i = 0; i < Questions.length; i++) {
	var output = new UserSearch(Questions[i].text, Questions[i].cloze); 
	arr.push(output);
}

var askQuestions = function() {

	if(on === arr.length) {
		console.log("Game Over!"); 
	} //end if statement 

	else {
		inquirer.prompt([
		{
			type: "input",
			name: "answer", 
			message: arr[on].partial 
		}

		]).then(function(user){

			var str = user.answer;
			var res = str.toLowerCase(); 

			var str2 = arr[on].cloze
			var res2 = str2.toLowerCase(); 

			if( res === res2 ) {
				console.log("")
				console.log("Correct!"); 
				console.log("")
				console.log(arr[on].text); 
				console.log("--------------------------------------------------------------------------------")
			}

			else {
				console.log("")
				console.log("Incorrect");
				console.log(""); 
				console.log("The correct answer was " + arr[on].cloze); 
				console.log(""); 
				console.log(arr[on].text); 
				console.log("--------------------------------------------------------------------------------")
			}

			on++; 

			askQuestions(); 

		}); //end then function

	} //end else statement

} //end askQuestions function 

askQuestions(); 