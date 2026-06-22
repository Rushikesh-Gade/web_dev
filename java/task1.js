// Implement your own setTimeout using callbacks.
function mySetTimeout(callback, delay) {
  
  const start = Date.now();

  
  const interval = setInterval(() => {
    const now = Date.now();
    if (now - start >= delay) {
      clearInterval(interval); 
      callback();              
    }
  }, 1); 
}


mySetTimeout(() => {
  console.log("Hello after 2 seconds!");
}, 2000);
