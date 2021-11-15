let btn = document.getElementsByClassName('btn');
let container = document.getElementById('container');
child = container.children;
let cart = document.getElementById('cart-container');
let cartItems = cart.children || [];

const itemsArr = [
  {
    name: 'Iodex',
    imgSrc: './img/iodex.jpg',
    quantity: 50,
    price: 50,
  },
  {
    name: 'Iodex',
    imgSrc: './img/iodex.jpg',
    quantity: 50,
    price: 50,
  },
  {
    name: 'Iodex',
    imgSrc: './img/iodex.jpg',
    quantity: 50,
    price: 50,
  },
  {
    name: 'Iodex',
    imgSrc: './img/iodex.jpg',
    quantity: 50,
    price: 50,
  },
  {
    name: 'Iodex',
    imgSrc: './img/iodex.jpg',
    quantity: 50,
    price: 50,
  },
];
function listItems() {
  var htmlElements = '';
  for (var i = 0; i < itemArr.length; i++) {
    const item = itemsArr[i];
    htmlElements += '<div class="box"></div>';
  }
  var container = document.getElementById('container');
  container.innerHTML = htmlElements;
}
function selector() {
  for (let i = 0; i < child.length; i++) {
    debugger;
    btn[i].onclick = function () {
      itemArr.push(child[i]);
      console.log(i);
      console.log(itemArr);
      createCart();
      transferToCArt();
    };
  }
}
console.log(child);
function createCart() {
  const itemDiv = document.createElement('div');
  cart.appendChild(itemDiv);

  console.log(itemDiv);
}
// function transferToCArt() {
//   for (let j = 0; j < btn.length; j++) {
//     let k = j;
//     cartItems[j].innerHTML = itemArr[k].innerHTML;
//   }
// }
function transferToCArt() {
  for (let j = 0; j < btn.length; j++) {
    let k = j;
    if (cartItems[j].innerHTML != itemArr[k].innerHTML) {
      cartItems[j].innerHTML = itemArr[k].innerHTML;
      cartItems[j].children[4].innerHTML = 'delete';
      cartItems[j].children[4].parentElement.style.color = 'green';
      cartItems[j].children[4].style.color = 'white';
      cartItems[j].children[4].style.backgroundColor = 'red';
      // cartItems[j].children[4].parentElement.style.backgroundColor = 'red';
      cartItems[j].children[4].addEventListener('click', function () {
        cartItems[j].remove();
      });
    } else {
    }
  }
}

// let container = btn.parentElement;
// console.log(container);

// let newItem = function (itemName, quantity, price) {
//   this.itemName = itemName;
//   this.quantity = quantity;
//   console.log(itemName);
// };
