const movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 6.0 }
];

const topMovies = movies.filter(m => m.rating > 8).map(m => m.title);

console.log("Highly Rated Movies:", topMovies);
