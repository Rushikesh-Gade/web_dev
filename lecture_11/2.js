const products =[{id:1, name:"lptop"}, {id:2, name:"mobile"}, {id:3, name:"tablet"}];
const q2=products.map(function(product){
    return product.name;
});
console.log(q2);