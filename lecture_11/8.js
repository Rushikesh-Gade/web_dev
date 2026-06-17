const students = [
    {name:"A", marks: 35},
    {name:"B", marks: 75},
    {name:"C", marks: 45},
    {name:"D", marks: 25},
];

const pass= students.filter(student => student.marks >= 40);
console.log(pass);
