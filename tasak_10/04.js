const employees = [
  { name: "A", salary: 50000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 60000 }
];

const salaries = employees.map(e => e.salary);
const totalSalary = salaries.reduce((sum, s) => sum + s, 0);

console.log("Salaries:", salaries);
console.log("Total Salary:", totalSalary);
