
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
};

CookieStand.prototype.makeTR = function(rowNum) {
	var row = table.insertRow(rowNum);
	row.insertCell(0).innerHTML = this.storeLocation;

	//For LocationTable procedural generation
	// var locRow = locTable.insertRow(rowNum);
	// locRow.insertCell(0).innerHTML = this.storeLocation;
	// locRow.insertCell(1).innerHTML = "10am - 6pm";
	
	for (var i=0; i < this.hours.length; i++) {
		this.hourlySales[i] = (Math.floor(this.randCustHour() * this.avgCookiesCust));

		this.totalSales += this.hourlySales[i];

		row.insertCell(i + 1).innerHTML = this.hourlySales[i];
	}
	row.insertCell(9).innerHTML = this.totalSales;
};

var pikePlace = new CookieStand('Pike Place Market', 17, 88, 5.2);
var seaTac = new CookieStand('SeaTac Airport', 6, 44, 1.2);
var southCenter = new CookieStand('South Center Mall', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square',20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 3, 24, 2.6);

//for procedurally filling LocationTable
// var locTable = document.getElementById('locationTable');
// var locRowHead = locTable.insertRow(0);

var table = document.getElementById('table');
var rowHead = table.insertRow(0);
rowHead.insertCell(0);

for (var j = 0; j < 8; j++) {
	rowHead.insertCell(j + 1).innerHTML = pikePlace.hours[j];
}

rowHead.insertCell(9).innerHTML = "TOTAL";

pikePlace.makeTR(1);
seaTac.makeTR(2);
southCenter.makeTR(3);
bellevue.makeTR(4);
alki.makeTR(5);


