// User Authentication
// Problem
// Simulate a login process:
// 1. Verify user credentials.
// 2. If successful, fetch user profile.
// 3. Display profile.
// Use nested callbacks.

function login(callback) {
setTimeout(() => {
console.log("User authenticated");
callback();
}, 1000);
}
function getProfile(callback) {
setTimeout(() => {
console.log("Profile fetched");
callback();
}, 1000);
}
login(() => {
getProfile(() => {
console.log("Displaying profile");
});
});