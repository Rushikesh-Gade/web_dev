// Food Delivery Process
// Problem
// Simulate:
// 1. Order placed
// 2. Food prepared
// 3. Food delivered
// using callbacks.

function placeOrder(callback) {
setTimeout(() => {
console.log("Order placed");
callback();
}, 1000);
}
function prepareFood(callback) {
setTimeout(() => {
console.log("Food prepared");
callback();
}, 2000);
}
function deliverFood(callback) {
setTimeout(() => {
console.log("Food delivered");
callback();
}, 1000);
}
placeOrder(() => {
prepareFood(() => {
deliverFood(() => {
console.log("Enjoy your meal!");
});
});
});