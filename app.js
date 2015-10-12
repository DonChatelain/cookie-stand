
var CookieStand = function(storeLocation,minCustHour,maxCustHour,avgCookiesCust) {
	this.storeLocation = storeLocation;
	this.minCustHour = minCustHour;
	this.maxCustHour = maxCustHour;
	this.avgCookiesCust = avgCookiesCust;
	this.hourlySales = [];
	this.totalSales = 0;
	this.hours = ['10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
};

CookieStand.prototype.randCustHour = function() {
	return Math.floor(Math.random() * (this.maxCustHour - this.minCustHour + 1)) + this.minCustHour;
}; //function to produce random customer turn out in one hour

CookieStand.prototype.makeTR = function() {
	var table = document.getElementById('table');
	var row = table.insertRow();
	row.insertCell().innerHTML = this.storeLocation;
	
	for (var i=0; i < this.hours.length; i++) {
		this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));
		this.totalSales += this.hourlySales[i];
		row.insertCell().innerHTML = this.hourlySales[i];
	} //Inserts data into rows
	row.insertCell().innerHTML = this.totalSales;

	var rows = document.getElementsByTagName('tr');
	for (var i = 0; i < rows.length; i++) {
		if (i % 2 === 0) {
			rows[i].className = 'even';
		} else {
			rows[i].className = 'odd';
		}
	} //sets class names to odd and even rows - for coloring
};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('South Center Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square',20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);
	
var createTable = function() {
	var table = document.getElementById('table');
	var rowHead = table.insertRow();
	rowHead.insertCell();
	//just inserts the blank top right cell
	for (var j = 0; j < 8; j++) {
		rowHead.insertCell().innerHTML = pikePlace.hours[j];
		//used pikePlace Hours as a one-time filler
	}
	rowHead.insertCell().innerHTML = "TOTAL";
}; //This function builds the first row header information

createTable();

pikePlace.makeTR();
seaTac.makeTR();
southCenter.makeTR();
bellevue.makeTR();
alki.makeTR();

var addStore = function() {
	var elLocation = document.getElementById('location-name').value;
	var elMinCustHour = parseInt(document.getElementById('min-cust-hour').value);
	var elMaxCustHour = parseInt(document.getElementById('max-cust-hour').value);
	var elAvgCookiesCust = parseInt(document.getElementById('avg-cookies-cust').value);

	var newStore = new CookieStand(elLocation,elMinCustHour,elMaxCustHour,elAvgCookiesCust);
	newStore.makeTR();

	document.getElementById('location-name').value = null;
	document.getElementById('min-cust-hour').value = null;
	document.getElementById('max-cust-hour').value = null;
	document.getElementById('avg-cookies-cust').value = null;	
	//sets form values back to blank after added to table
};

var button = document.getElementById('addButton');
button.addEventListener('click', addStore);



