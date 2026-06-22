// Download File using Promise
// Problem
// Convert the download callback example into Promise.Download File using Promise
// Problem
// Convert the download callback example into Promise.

function downloadFile() {
return new Promise((resolve) => {
console.log("Starting download...");
setTimeout(() => {
resolve("Download completed");
}, 2000);
});
}
downloadFile()
.then(result => {
console.log(result);
});