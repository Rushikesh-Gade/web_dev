const students = [
  { name: "John", marks: [80, 90, 85] },
  { name: "Emma", marks: [95, 92, 98] }
];

function getAverages(students) {
  return students.map(s => ({
    name: s.name,
    average: s.marks.reduce((a, b) => a + b, 0) / s.marks.length
  }));
}

console.log(getAverages(students));