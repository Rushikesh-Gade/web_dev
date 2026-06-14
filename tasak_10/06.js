const posts = [
  { postId: 1, likes: 100 },
  { postId: 2, likes: 200 }
];

const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0);

console.log("Total Likes:", totalLikes);
