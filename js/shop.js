let merchandiseArr =
[
  {
    image: './images/shirt.jpg',
    product: 'T-shirt',
    description: 'Our Salmon Cookies t-shirts come in multiple sizes!',
    price: '$15.00',
  },
  {
    image: './images/cutter.jpg',
    product: 'Cookie Cutters',
    description: 'Salmon Cookies cookie cutters for you to cut your own salmon cookies!',
    price: '$10.00',
  },
  {
    image: './images/frosted-cookie.jpg',
    product: 'Cookie',
    description: 'Our classic Salmon Cookies that are sold at every location!',
    price: '$1.00',
  },
];

function renderMerch() {
  let merch = document.getElementById('merchandise');

  merchandiseArr.map(function(obj) {
    let div = document.createElement('div');
    div.setAttribute('class', 'shopItem');
    merch.appendChild(div);

    let img = document.createElement('img');
    img.setAttribute('src', obj.image);
    div.appendChild(img);

    let h3 = document.createElement('h3');
    h3.textContent = obj.product;
    div.appendChild(h3);

    let description = document.createElement('p');
    description.textContent = obj.description;
    div.appendChild(description);

    let price = document.createElement('p');
    price.setAttribute('class', 'price');
    price.textContent = obj.price;
    div.appendChild(price);
  });
}

renderMerch();
