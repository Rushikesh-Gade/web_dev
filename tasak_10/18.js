const users = [
  { name: "John", age: 25 },
  { name: "Emma", age: 16 },
  { name: "Alex", age: 20 }
];

const adults = users.filter(u => u.age >= 18).map(u => u.name);

console.log("Adults:", adults);
