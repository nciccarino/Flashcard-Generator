
var inquirer = require("inquirer"); 
var UserSearch = require("./UserSearch.js"); 
var Questions = require("./questions.js");  

var argv = process.argv[3];  

// UserSearch.prototype.printInfo = function() {
// 	console.log(this.message + "\nYour answer: " + this.argv + "\nCorrect Answer: " + this.name);
// }

for (var i = 0; i < Questions.length; i++) {

	var output = new UserSearch(Questions[i].text, Questions[i].cloze); 

}

	inquirer.prompt([
		{
			type: "input",
			name: "answer", 
			message: output.partial 
		}

	]).then(function(user){
		if(user.answer === output.cloze) {
			console.log("Correct!"); 
			console.log(output.text); 
		}

		else {
			console.log("")
			console.log("Incorrect");
			console.log(""); 
			console.log("The correct answer was " + output.cloze); 
			console.log(""); 
			console.log(output.text); 
			console.log("--------------------------------------------------------------------------------")

		}

		//var newInput = new UserSearch(user.message , user.argv, user.name);

		//newInput.printInfo(); 

	}); //end then function

