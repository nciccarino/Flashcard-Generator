
var inquirer = require("inquirer"); 
var UserSearch = require("./UserSearch.js"); 
var Questions = require("./questions.js");  

var argv = process.argv[3];  

UserSearch.prototype.printInfo = function() {
	console.log(this.message + "\nYour answer: " + this.argv + "\nCorrect Answer: " + this.name);
}

for (var i = 0; i < questions.length; i++) {

	//find a way to loop through questions using UserSearch 

	inquirer.prompt([
		{
			type: "password",
			name: //UserSearch.cloze, 
			message: //UserSearch.partial 
		}

	]).then(function(user){
		if(user.cloze === cloze) {
			console.log("Correct!"); 
			console.log(text); 
		}

		else {
			console.log("Incorrect");
			console.log("The correct answer was " + cloze); 
			console.log(text); 

		}

		//var newInput = new UserSearch(user.message , user.argv, user.name);

		//newInput.printInfo(); 

	}); //end then function
}
