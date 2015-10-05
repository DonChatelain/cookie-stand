
var pikePlace = {
	location: 'Pike Place Market',
	minCustHour: 17,
	maxCustHour: 88,
	avgCookiesCust: 5.2,
	hourlySales: [],
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},   //random number generator will produce how many customers per hour
	makeUL: function(id) {
		var total = 0;
		for (var i = 0; i < 8; i++) {
			this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));
			var item = document.createElement("li");
			total += this.hourlySales[i];
			item.appendChild(document.createTextNode(this.hours[i] + ": " + this.hourlySales[i] + " cookies"));
			document.getElementById(id).appendChild(item);
		}
		var itemTotal = document.createElement("li");
		itemTotal.appendChild(document.createTextNode("Total: " + total + " cookies"));
		document.getElementById(id).appendChild(itemTotal);
	}
};

var seaTac = {
	location: 'SeaTac Airport',
	minCustHour: 6,
	maxCustHour: 44,
	avgCookiesCust: 1.2,
	hourlySales: [],
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},   //random number generator will produce how many customers per hour
	makeUL: function(id) {
		var total = 0;
		for (var i = 0; i < 8; i++) {
			this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));
			var item = document.createElement("li");
			total += this.hourlySales[i];
			item.appendChild(document.createTextNode(this.hours[i] + ": " + this.hourlySales[i] + " cookies"));
			document.getElementById(id).appendChild(item);
		}
		var itemTotal = document.createElement("li");
		itemTotal.appendChild(document.createTextNode("Total: " + total + " cookies"));
		document.getElementById(id).appendChild(itemTotal);
	}
};

var southCenter = {
	location: 'South Center Mall',
	minCustHour: 11,
	maxCustHour: 38,
	avgCookiesCust: 1.9,
	hourlySales: [],
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},   //random number generator will produce how many customers per hour
	makeUL: function(id) {
		var total = 0;
		for (var i = 0; i < 8; i++) {
			this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));
			var item = document.createElement("li");
			total += this.hourlySales[i];
			item.appendChild(document.createTextNode(this.hours[i] + ": " + this.hourlySales[i] + " cookies"));
			document.getElementById(id).appendChild(item);
		}
		var itemTotal = document.createElement("li");
		itemTotal.appendChild(document.createTextNode("Total: " + total + " cookies"));
		document.getElementById(id).appendChild(itemTotal);
	}
};

var bellevue = {
	location: 'Bellevue Square',
	minCustHour: 20,
	maxCustHour: 48,
	avgCookiesCust: 3.3,
	hourlySales: [],
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},   //random number generator will produce how many customers per hour
	makeUL: function(id) {
		var total = 0;
		for (var i = 0; i < 8; i++) {
			this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));
			var item = document.createElement("li");
			total += this.hourlySales[i];
			item.appendChild(document.createTextNode(this.hours[i] + ": " + this.hourlySales[i] + " cookies"));
			document.getElementById(id).appendChild(item);
		}
		var itemTotal = document.createElement("li");
		itemTotal.appendChild(document.createTextNode("Total: " + total + " cookies"));
		document.getElementById(id).appendChild(itemTotal);
	}
};

var alki = {
	location: 'Alki',
	minCustHour: 3,
	maxCustHour: 24,
	avgCookiesCust: 2.6,
	hourlySales: [],
	hours: ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'],
	randCustHour: function() {
		return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
	},   //random number generator will produce how many customers per hour
	makeUL: function(id) {
		var total = 0;
		for (var i = 0; i < 8; i++) {
			this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));
			var item = document.createElement("li");
			total += this.hourlySales[i];
			item.appendChild(document.createTextNode(this.hours[i] + ": " + this.hourlySales[i] + " cookies"));
			document.getElementById(id).appendChild(item);
		}
		var itemTotal = document.createElement("li");
		itemTotal.appendChild(document.createTextNode("Total: " + total + " cookies"));
		document.getElementById(id).appendChild(itemTotal);
	}
};


pikePlace.makeUL('pike-list');
seaTac.makeUL('seatac-list');
southCenter.makeUL('southcenter-list');
bellevue.makeUL('bellevue-list');
alki.makeUL('alki-list');

document.getElementById('pike').textContent = pikePlace.location;
document.getElementById('seatac').textContent = seaTac.location;
document.getElementById('southcenter').textContent = southCenter.location;
document.getElementById('bellevue').textContent = bellevue.location;
document.getElementById('alki').textContent = alki.location;





//--------------------------------------------------------------

// var CookieStand = function(location,minCustHour,maxCustHour,avgCookiesCust) {
// 	this.location = location;
// 	this.minCustHour = minCustHour;
// 	this.maxCustHour = maxCustHour;
// 	this.avgCookiesCust = avgCookiesCust;
// 	this.hourlySales = [];
// };

// CookieStand.prototype.randCustHour = function() {
// 	return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
// };

// CookieStand.prototype.avgCookiesHour = function() {
// 	for (var i=0; i < 8; i++) {
// 		this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));
// 	}
// };

// var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
// var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
// var southCenter = new CookieStand('South Center Mall', 11, 38, 1.9);
// var bellevue = new CookieStand('Bellevue Square',20, 48, 3.3);
// var alki = new CookieStand('Alki', 3, 24, 2.6);

// pikePlace.avgCookiesHour();
// console.log(pikePlace.hourlySales);
// seaTac.avgCookiesHour();
// console.log(seaTac.hourlySales);