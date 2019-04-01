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
  {
    image: './images/pants.jpg',
    product: 'Pants',
    description: 'Our Salmon Cookie pants comes in one whole color!',
    price: '$75.00',
  },
  {
    image: './images/jacket.jpg',
    product: 'jacket',
    description: 'Our Salmon Cookie jackets will keep you warm!',
    price: '$65.00',
  },
  {
    image: './images/watch.jpg',
    product: 'Watch',
    description: 'Tell the time using our Salmon Cookie watch!',
    price: '$1500.00',
  },
  {
    image: './images/socks-male.jpg',
    product: 'Socks - male',
    description: 'Walk around with comfort and style in our Salmon Cookie socks for men!',
    price: '$15.00',
  },
  {
    image: './images/socks-female.jpg',
    product: 'Socks - female',
    description: 'Walk around with comfort and style in our Salmon Cookie socks for women!',
    price: '$15.00',
  },
  {
    image: './images/poster.jpg',
    product: 'Poster',
    description: 'Swag out your bedroom with our new line of posters!',
    price: '$20.00',
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
