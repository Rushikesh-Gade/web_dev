const students = [
    {
        name: 'Utkarsh',
        marks:[80, 90, 85]
    },
    {
        name: 'Yukta',
        marks: [95, 92, 98]
    },
    {
        name: 'Navneet',
        marks: [60, 70, 65]
    }
];

const averageMarks = students.map(student => {
    const average = student.marks.reduce((sum, mark) => sum + mark, 0)/ student.marks.length;
    return {average };
});
console.log(averageMarks);