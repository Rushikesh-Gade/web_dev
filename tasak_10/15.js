const cart = [
  { item: "Book", price: 200 },
  { item: "Pen",  price: 20  },
  { item: "Bag",  price: 500 }
];

const total = cart.reduce((sum, c) => sum + c.price, 0);

console.log("Total Cart Value:", total);
