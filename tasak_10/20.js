const results = [
  { name: "John", marks: 80 },
  { name: "Emma", marks: 40 },
  { name: "Alex", marks: 70 }
];

const passed = results.filter(s => s.marks >= 50).map(s => s.name);

console.log("Passed Students:", passed);
