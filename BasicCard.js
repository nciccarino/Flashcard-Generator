
var inquirer = require("inquirer"); 
var UserSearch = require("./UserSearch.js"); 
var Questions = require("./questions.js"); 

var arr = [];  
var on = 0; 

// arr.prototype.printInfo = function() {
// 	console.log(this.message + this.name);
// }

for (var i = 0; i < Questions.length; i++) {
	var output = new UserSearch(Questions[i].text, Questions[i].cloze); 
	arr.push(output);
}

var askQuestions = function() {

	if(on < arr.length) {

			inquirer.prompt([
			{
				type: "input",
				name: "answer", 
				message: arr[on].partial 
			}

		]).then(function(user){

			if(user.answer === arr[on].cloze) {
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

	}

}

askQuestions(); 


//-----------------------------------------------------------------------------------------------------------
// for (var i = 0; i < Questions.length; i++) {
// 	done(); 
// }

//console.log(arr); 

// function done() {

// 		inquirer.prompt([
// 			{
// 				type: "input",
// 				name: "answer", 
// 				message: arr[on].partial 
// 			}

// 		]).then(function(user){

// 			if(user.answer === arr[on].cloze) {
// 				console.log("")
// 				console.log("Correct!"); 
// 				console.log("")
// 				console.log(arr[on].text); 
// 				console.log("--------------------------------------------------------------------------------");
// 				on++;
// 			}

// 			else {
// 				console.log("")
// 				console.log("Incorrect");
// 				console.log(""); 
// 				console.log("The correct answer was " + arr[on].cloze); 
// 				console.log(""); 
// 				console.log(arr[on].text); 
// 				console.log("--------------------------------------------------------------------------------");
// 				on++;
// 			};
// }; 

//-----------------------------try later-----------------------------------------------------------------
// for (var i = 0; i < Questions.length; i++) {
// 	output();
// }

// function output(arr){
// 	var arr = [new UserSearch(Questions[i].text, Questions[i].cloze)]; 
// 	//console.log(arr[0]);  
// 	var on = 0; 

// 	inquirer.prompt([
// 		{
// 			type: "input",
// 			name: "answer", 
// 			message: arr[on].partial 
// 		}

// 	]).then(function(user){
// 		if(user.answer === output.cloze) {
// 			console.log("")
// 			console.log("Correct!"); 
// 			console.log("")
// 			console.log(output.text); 
// 			console.log("--------------------------------------------------------------------------------")
// 		}

// 		else {
// 			console.log("")
// 			console.log("Incorrect");
// 			console.log(""); 
// 			console.log("The correct answer was " + output.cloze); 
// 			console.log(""); 
// 			console.log(output.text); 
// 			console.log("--------------------------------------------------------------------------------")

// 		}

// 		// var newInput = new UserSearch(user.message , user.name, user.output.cloze);

// 		// newInput.printInfo(); 

// 	}); //end then function

// }//end function 