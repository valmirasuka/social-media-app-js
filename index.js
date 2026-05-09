let database = [
  {
    username: "ken",
    password: "1234",
    email: "ken@gmail.com",
    isAdmin: true,
    login: function () {
      console.log("Welcome back, " + this.username + "!");
    }
  },
  {
    username: "ana",
    password: "abcd",
    email: "ana@gmail.com",
    isAdmin: false,
    login: function () {
      console.log("Welcome back, " + this.username + "!");
    }
  },
  {
    username: "leo",
    password: "pass",
    email: "leo@gmail.com",
    isAdmin: false,
    login: function () {
      console.log("Welcome back, " + this.username + "!");
    }
  }
];





let newsfeed = [
  {
    username: "ken",
    timeline: "Learning JavaScript today",
    likes: 10,
    comments: ["Great job"]
  },
  {
    username: "ana",
    timeline: "My first post",
    likes: 5,
    comments: ["Welcome"]
  },
  {
    username: "leo",
    timeline: "JavaScript is fun",
    likes: 8,
    comments: ["Cool"]
  }
];

// let option = prompt("Choose an option:\n1. Show all posts\n2. Show my posts\n3. Add post\n4. Like first post\n5. Check admin\n6. Comment on first post")

// 1) Login
// 2) Welcome Message
// 3) Show all posts
// 4) Show only my posts
// 5) Add a new post
// 6) Like the first post
// 7) Add a comment to the first post
// 8) Admin Check Function
// 9) Full Logic: let option = prompt(“Choose an option:\n1. Show all posts\n2. Show my posts\n3. Add post\n4. Like first post\n5. Check admin\n6. Comment on first post”)

let username = prompt("Username")
let password = prompt("Password")

let currentUser = null;

database.forEach(function (user) {
  if (user.username === username && user.password === password) {
    user.login()
    currentUser = user
    console.log("I AM THE LOGGED IN USER: ", user)
  }
})

console.log("CURRENT USER", currentUser)

let option = prompt("Choose an option:\n1. Show all posts\n2. Show my posts\n3. Add post\n4. Like first post\n5. Check admin\n6. Comment on first post")

switch (option) {
  case "1":
    console.log("ALL POSTS", newsfeed)
    break;

  case "2":
    newsfeed.forEach(function (post) {
      if (currentUser.username === post.username) {
        console.log("ONLY MY POSTS", post.timeline)
      }
    })
    break;

  case "3":
    let newPost = {
      username: "valmira",
      timeline: "JavaScript is fun",
      likes: 100,
      comments: ["Great"]
    }

    newsfeed.push(newPost)

    console.log("NEWSFEED AFTER ADDING A NEW POST: ", newsfeed)
    break;

  case "4":
    newsfeed[0].likes++

    console.log("NEWSFEED - LIKE THE FIRST POST: ", newsfeed)
    break;

  case "5":
    database.forEach(function (user) {
      if (user.username === username && user.password === password) {
        checkIfTheUserIsAdmin(user)
      }
    })

    function checkIfTheUserIsAdmin(user) {
      if (user.isAdmin) {
        console.log("Admin access granted");
      } else {
        console.log("Access denied");
      }
    }
    break;

  case "6":
    let newComment = "New Comment"

    newsfeed[0].comments.push(newComment)

    console.log("NEWSFEED AFTER ADDING A NEW COMMENT IN THE FIRST POST: ", newsfeed)
    break;
}