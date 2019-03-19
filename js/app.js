'use strict';

const StoreData = function(maxCust, minCust, avgCookies) {
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.avgCookies = avgCookies;
};

StoreData.prototype.calculateCookiesPerHour = function() {
  this.cookiesPerHour = [];
  for (let i = 0; i < 16; i++) {
    this.cookiesPerHour.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  }
};

StoreData.prototype.calculateTotalCookies = function() {
  this.totalCookies = 0;

  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    this.totalCookies += this.cookiesPerHour[i];
  }
};

let firstAndPike = new StoreData(Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let seaTacAirport = new StoreData(Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let seattleCenter = new StoreData(Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let capitolHill = new StoreData(Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
let alki = new StoreData(Math.floor(Math.random() * (100 - 50) + 50), Math.floor(Math.random() * (50 - 0) + 0), Math.floor(Math.random() * (100 - 0) + 0));
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


function createDataTable() {
  const hoursArr = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  const locationsArr = [['First and Pike', firstAndPike], ['SeaTac Airport', seaTacAirport], ['Seattle Center', seattleCenter], ['Capitol Hill', capitolHill], ['Alki', alki]];
  let totalTotal = 0;
  let section = document.getElementById('salesTable');

  let table = document.createElement('table');
  section.appendChild(table);

  let tr = document.createElement('tr');
  table.appendChild(tr);

  let emptySpace = document.createElement('th');
  tr.appendChild(emptySpace);

  // Create top row filled with hours open
  for (let i = 0; i < hoursArr.length; i++) {
    let th = document.createElement('th');
    th.textContent = hoursArr[i];
    tr.appendChild(th);
  }

  let dailyLocationTotal = document.createElement('th');
  dailyLocationTotal.textContent = 'Daily Location Total';
  tr.appendChild(dailyLocationTotal);

  //Creates location rows and fills with number values
  for (let i = 0; i < locationsArr.length; i++) {
    let tableSection = document.createElement('tr');
    table.appendChild(tableSection);

    let th = document.createElement('th');
    th.textContent = locationsArr[i][0];
    tableSection.appendChild(th);

    for (let j = 0; j < hoursArr.length; j++) {
      let td = document.createElement('td');
      td.textContent = locationsArr[i][1].cookiesPerHour[j];
      tableSection.appendChild(td);
    }

    let total = document.createElement('td');
    total.textContent = locationsArr[i][1].totalCookies;
    totalTotal += locationsArr[i][1].totalCookies;
    tableSection.appendChild(total);
  }

  // Starts creating final total row that calculates each hours total
  let totalRow = document.createElement('tr');
  table.appendChild(totalRow);

  let totals = document.createElement('th');
  totals.textContent = 'TOTALS';
  totalRow.appendChild(totals);

  for (let y = 0; y < hoursArr.length; y++) {
    let int = 0;
    let totalData = document.createElement('td');

    for (let z = 0; z < locationsArr.length; z++) {
      int += locationsArr[z][1].cookiesPerHour[y] * 1;
    }

    totalData.textContent += int;
    totalRow.appendChild(totalData);
  }

  let finalTotal = document.createElement('td');
  finalTotal.textContent = totalTotal;
  totalRow.appendChild(finalTotal);
}

createDataTable();
