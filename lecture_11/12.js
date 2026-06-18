const products=[
    {name:"laptop", category:"electronics"},
    {name:"phone", category:"electronics"},
    {name:"shirt", category:"clothing"},
];
const electronicsProducts = products.filter(product => product.category === "electronics").map(product => product.name);
console.log(electronicsProducts);