'use strict';

// ------------------------------------------------------------------------------------
//
// Creates table header, body, and footer rows
//
// ------------------------------------------------------------------------------------
function createDataTable() {
  const hoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

  let section = document.getElementById('salesTable');

  let table = document.createElement('table');
  table.setAttribute('id', 'table');
  section.appendChild(table);

  let thead = document.createElement('thead');
  table.appendChild(thead);

  let body = document.createElement('tbody');
  body.setAttribute('id', 'tableBody');
  table.appendChild(body);

  let tr = document.createElement('tr');
  thead.appendChild(tr);

  let emptySpace = document.createElement('th');
  tr.appendChild(emptySpace);

  // Loop through hoursArr to create headers in thead
  for (let i = 0; i < hoursArr.length; i++) {
    let th = document.createElement('th');
    th.textContent = hoursArr[i];
    tr.appendChild(th);
  }

  let dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = 'Daily Location Total';
  tr.appendChild(dailyLocationTotal);

  let footer = document.createElement('tfoot');
  table.appendChild(footer);

  let footerRow = document.createElement('tr');
  footerRow.setAttribute('id', 'footerRow');
  footer.appendChild(footerRow);

  let footerHead = document.createElement('th');
  footerHead.textContent = 'Hourly Totals';
  footerRow.appendChild(footerHead);
}

// ------------------------------------------------------------------------------------
//
// Populates individual location table rows with cookies per hour and location totals
//
// ------------------------------------------------------------------------------------
let createData = function() {
  let totalSales = 0;

  let table = document.getElementById('tableBody');

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let th = document.createElement('th');
  th.textContent = this.name;
  tr.appendChild(th);

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.cookiesPerHour[i];
    totalSales += this.cookiesPerHour[i];
    tr.appendChild(td);
  }

  let totals = document.createElement('td');
  totals.textContent = totalSales;
  tr.appendChild(totals);
};

// ------------------------------------------------------------------------------------
// Locations array for reference
// constructor function for object creation
// function calls
// ------------------------------------------------------------------------------------
const Locations = ['firstAndPike', 'seaTacAirport', 'seattleCenter', 'capitolHill', 'alki'];

const StoreData = function(name, maxCust, minCust, avgCookies) {
  this.name = name;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookies = avgCookies;
};

StoreData.prototype.calculateCookiesPerHour = function() {
  this.cookiesPerHour = [];
  for (let i = 0; i < 15; i++) {
    this.cookiesPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  }
};

StoreData.prototype.calculateTotalCookies = function() {
  this.totalCookies = 0;

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
  }
};

StoreData.prototype.render = createData;

let firstAndPike = new StoreData('First and Pike', Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let seaTacAirport = new StoreData('Sea Tac Airport', Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let seattleCenter = new StoreData('Seattle Center', Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let capitolHill = new StoreData('Capitol Hill', Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let alki = new StoreData('Alki', Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
firstAndPike.calculateCookiesPerHour();
firstAndPike.calculateTotalCookies();
seaTacAirport.calculateCookiesPerHour();
seaTacAirport.calculateTotalCookies();
seattleCenter.calculateCookiesPerHour();
seattleCenter.calculateTotalCookies();
capitolHill.calculateCookiesPerHour();
capitolHill.calculateTotalCookies();
alki.calculateCookiesPerHour();
alki.calculateTotalCookies();

createDataTable();
firstAndPike.render();
seaTacAirport.render();
seattleCenter.render();
capitolHill.render();
alki.render();
