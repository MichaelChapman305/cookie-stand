const firstAndPike = {
  name: 'First and Pike',
  maxCust: Math.floor(Math.random() * (100 - 50) + 50),
  minCust: Math.floor(Math.random() * (50 - 0) + 0),
  avgCookie: Math.floor(Math.random() * (100 - 0) + 0),
};

const seaTacAirport = {
  name: 'Sea Tac Airport',
  maxCust: Math.floor(Math.random() * (100 - 50) + 50),
  minCust: Math.floor(Math.random() * (50 - 0) + 0),
  avgCookie: Math.floor(Math.random() * (100 - 0) + 0),
};

const seattleCenter = {
  name: 'Seattle Center',
  maxCust: Math.floor(Math.random() * (100 - 50) + 50),
  minCust: Math.floor(Math.random() * (50 - 0) + 0),
  avgCookie: Math.floor(Math.random() * (100 - 0) + 0),
};

const capitolHill = {
  name: 'Capitol Hill',
  maxCust: Math.floor(Math.random() * (100 - 50) + 50),
  minCust: Math.floor(Math.random() * (50 - 0) + 0),
  avgCookie: Math.floor(Math.random() * (100 - 0) + 0),
};

const alki = {
  name: 'Alki',
  maxCust: Math.floor(Math.random() * (100 - 50) + 50),
  minCust: Math.floor(Math.random() * (50 - 0) + 0),
  avgCookie: Math.floor(Math.random() * (100 - 0) + 0),
};

/* Calculates and creates cookiesPerHour array which stores hourly cookie sales inside
of an array which the placed inside of each individual obj */
function calculateCookiePerHour(obj) {
  obj.cookiesPerHour = [];

  for (let i = 0; i < 16; i++) {
    obj.cookiesPerHour.push(Math.floor(Math.random() * (obj.maxCust - obj.minCust) + obj.minCust));
  }

  calculateTotal(obj);
}

function calculateTotal(obj) {
  let totalCookies = 0;
  
  for (let i = 0; i < obj.cookiesPerHour.length; i++) {
    totalCookies += obj.cookiesPerHour[i];
  }

  obj.totalCookies = totalCookies;
}

// Creates HTML elements and places them on the DOM to accurately represent object data
function addLists(obj) {
  let pm = false;
  let time = 6;
  let section = document.getElementById('salesLists');

  let h3 = document.createElement('h3');
  h3.textContent = obj.name;
  section.appendChild(h3);

  let ul = document.createElement('ul');
  section.appendChild(ul);

  for (let i = 1; i < obj.cookiesPerHour.length; i++) {
    let li = document.createElement('li');
  
    if (time === 12) {
      li.textContent = `${time}pm: ${obj.cookiesPerHour[i]} cookies`;
      pm = !pm;
      time = 1;
    } else if (pm === false) {
      li.textContent = `${time}am: ${obj.cookiesPerHour[i]} cookies`;
      time++;
    } else {
      li.textContent = `${time}pm: ${obj.cookiesPerHour[i]} cookies`;
      time++;
    }

    ul.appendChild(li);
  }

  let totalCookies = document.createElement('li');
  totalCookies.textContent = `Total: ${obj.totalCookies}`;
  ul.appendChild(totalCookies);
}

calculateCookiePerHour(firstAndPike);
calculateCookiePerHour(seaTacAirport);
calculateCookiePerHour(seattleCenter);
calculateCookiePerHour(capitolHill);
calculateCookiePerHour(alki);
addLists(firstAndPike);
addLists(seaTacAirport);
addLists(seattleCenter);
addLists(capitolHill);
addLists(alki);
