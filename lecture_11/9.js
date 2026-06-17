const marks = [ 80,90, 70, 60];
const average = marks.reduce((a, c) => a + c, 0) / marks.length;
console.log(average);