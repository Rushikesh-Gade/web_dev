// Downloading a File
// Problem
// Create a function downloadFile(url, callback) that:
// ● Prints "Starting download...".
// ● Waits for 2 seconds.
// ● Prints "Download completed".
// ● Calls the callback function.

function downloadFile(url, callback) {
console.log("Starting download...");
setTimeout(() => {
console.log("Download completed");
callback();
}, 2000);
}
downloadFile("file.pdf", () => {
console.log("Opening file...");
});