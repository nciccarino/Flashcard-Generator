var UserSearch = function(text, cloze) {
	this.text = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, "..."); 
};

module.exports = UserSearch; 