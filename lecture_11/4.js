const users = [
    {name:"A", age:16},
    {name:"B", age:20},
    {name:"C", age:17},
    {name:"D", age:22}
]

const remove  = users.pop(user => user.age >= 18);
console.log(remove);

console.log(users);