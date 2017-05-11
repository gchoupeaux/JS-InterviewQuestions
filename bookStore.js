const bookStore = [
	{title: 'joja ski', available: true},
	{title: 'jojor ski', available: false},
	{title: 'jojo ski', available: false}
	];

bookStore.getBookIndex = function(title){
	for (var i=0; i<this.length; i++){
		if (this[i].title === title){
			return i;
		}		
	}
	return -1;
};

bookStore.checkAvailability = function(index){
	return this[index].available;
};

bookStore.toogleAvilability = function(index){
	if (this[index].available === true){
		this[index].available = false;	
	}
	else {
		this[index].available = true;		
	}
};

bookStore.checkOutTitle = function(title){
	var bookIndex;
	bookIndex = this.getBookIndex(title);
	if (bookIndex != -1){
		if (this.checkAvailability(bookIndex) === true){
			bookStore.toogleAvilability(bookIndex);	
			return this[bookIndex];	
		}	else {
			return ('book not available');	
		}
	} else {
		return ('book not part of the bookstore');
	}
};

bookStore.checkInTitle = function(title){
	var bookIndex;
	bookIndex = this.getBookIndex(title);
	if (bookIndex != -1){
		if (this.checkAvailability(bookIndex) === false){
			bookStore.toogleAvilability(bookIndex);	
			return this[bookIndex];	
		}	else {
			return ('book allready in');	
		}
	} else {
		return ('book not part of the bookstore');
	}
};

function assertCheckOutTitle(actual, expected, testName){
	if (actual === expected){
		console.log('passed');
	}	else {
		console.log(`FAILED [${testName}] actual value "${actual}", expected value "${expected}"`);	
	}
}

function assertCheckInTitle(actual, expected, testName){
		if (actual === expected){
		console.log('passed');
	}	else {
		console.log(`FAILED [${testName}] actual value "${actual}", expected value "${expected}"`);	
	}	
}


var actual = bookStore.checkOutTitle('joja ski');
var expected = [{title: 'joja ski', available: false}];
var testName = 'Check out book existing and available';
assertCheckOutTitle(actual, expected, testName);

actual = bookStore.checkInTitle('joja ski');
expected = [{title: 'joja ski', available: true}];
var testName = 'Check in book existing and out of library';
assertCheckInTitle(actual, expected, testName);
