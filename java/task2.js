// Create a login → profile → posts flow using callbacks.
function login(username, password, callback) {
  console.log("Logging in...");
  setTimeout(() => {
    if (username === "user" && password === "1234") {
      console.log("Login successful!");
      callback(null, { userId: 1, username: "user" });
    } else {
      callback("Invalid credentials", null);
    }
  }, 1000);
}


function getProfile(user, callback) {
  console.log("Fetching profile...");
  setTimeout(() => {
    const profile = { userId: user.userId, name: "John Doe", age: 25 };
    console.log("Profile fetched!");
    callback(null, profile);
  }, 1000);
}


function getPosts(profile, callback) {
  console.log("Fetching posts...");
  setTimeout(() => {
    const posts = [
      { id: 1, title: "My first post", content: "Hello world!" },
      { id: 2, title: "Another post", content: "Callbacks are fun!" }
    ];
    console.log("Posts fetched!");
    callback(null, posts);
  }, 1000);
}


login("user", "1234", (err, user) => {
  if (err) return console.error("Login error:", err);

  getProfile(user, (err, profile) => {
    if (err) return console.error("Profile error:", err);

    getPosts(profile, (err, posts) => {
      if (err) return console.error("Posts error:", err);

      console.log("Final Result:");
      console.log("User:", user);
      console.log("Profile:", profile);
      console.log("Posts:", posts);
    });
  });
});
