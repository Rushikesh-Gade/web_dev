const marks = [45, 80, 60, 90, 30];

function getAverage(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

const passing = marks.filter(m => m > 50);

console.log("Passing Marks:", passing);
console.log("Average:", getAverage(passing));
