const repos = [
  { repo: "A", stars: 100 },
  { repo: "B", stars: 200 }
];

const totalStars = repos.reduce((sum, r) => sum + r.stars, 0);

console.log("Total Stars:", totalStars);
