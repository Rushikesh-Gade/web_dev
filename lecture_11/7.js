const  employees = [
    {name:"A", salary:30000},
    {name:"B", salary:40000},
    {name:"C", salary:50000}
];
const totalSalary = employees.reduce(function(total, employee){
    return total + employee.salary;
}, 0);
console.log(totalSalary);
 
const tot= employees.reduce((total, employee) => total + employee.salary, 0);
console.log(tot);