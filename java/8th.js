// Promise Chaining
// Problem
// Perform:
// 1. Download
// 2. Compress
// 3. Upload
// using Promise chaining.

function download() {
return new Promise(resolve => {
setTimeout(() => {
console.log("Downloaded");
resolve();
}, 1000);
});
}
function compress() {
return new Promise(resolve => {
setTimeout(() => {
console.log("Compressed");
resolve();
}, 1000);
});
}
function upload() {
return new Promise(resolve => {
setTimeout(() => {
console.log("Uploaded");
resolve();
}, 1000);
});
}
download()
.then(() => compress())
.then(() => upload())
.then(() => console.log("All Tasks Completed"));