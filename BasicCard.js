var inquirer = require("inquirer"); 
var UserSearch = require("./UserSearch.js"); 
var Questions = require("./questions.js"); 

var arr = [];  
var on = 0; 

var yes = 0;
var no = 0; 

//pushes guestions through UserSearch and into an array (arr)
for (var i = 0; i < Questions.length; i++) {
	var output = new UserSearch(Questions[i].text, Questions[i].cloze); 
	arr.push(output);
}

var askQuestions = function() {

	// if the game isn't over...
	if(on < arr.length) {

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

			var yes = ("Correct"); 
			var no = ("Incorrect"); 

			if( res === res2 ) {  
				yes++; 
				console.log("");
				console.log("Correct!"); 
				console.log("")
				console.log(arr[on].text); 
				console.log("--------------------------------------------------------------------------------")
			}

			else {  
				no++; 
				console.log("");
				console.log("Incorrect");
				console.log(""); 
				console.log("The correct answer was " + arr[on].cloze); 
				console.log(""); 
				console.log(arr[on].text); 
				console.log("--------------------------------------------------------------------------------")
			}

			on++;  

			askQuestions(); //recursion

		}); //end then function

	} //end if statement 

	//if the game is over... 
	else if (on === arr.length) {
		console.log("Game Over!");  
	} //end else statement

} //end askQuestions function 

//start screen
var start = function(){
	inquirer.prompt([

		{
			type: "confirm",
			message: "Do you want to play NFL Trivia?",
			name: "yes"
		}

	]).then(function(user) {
		if (user.yes) {
			console.log("")
			console.log(" NFL Trivia Game!" + "\n" +"\n Fill in the blank with the correct answer."); 
			console.log("")
			askQuestions();
		}
		else {
			console.log(""); 
			console.log(" Yeah...maybe next time..."); 
			console.log(""); 
		}
	})
}

start(); 

