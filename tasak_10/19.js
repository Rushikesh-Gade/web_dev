const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone",  price: 20000 }
];

function applyDiscount(products, percent) {
  return products.map(p => ({
    name: p.name,
    discountedPrice: p.price - (p.price * percent / 100)
  }));
}

console.log(applyDiscount(products, 10));
