const users = [
  { user: "A", action: "login"  },
  { user: "B", action: "logout" },
  { user: "C", action: "login"  }
];

const loginCount = users.filter(u => u.action === "login").length;

console.log("Login Count:", loginCount);
