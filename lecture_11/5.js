const words= ["hello", "world", "javascript"];
const totallength = words.reduce(function(total, word){
    return total + word.length;
}, 0);
console.log(totallength);