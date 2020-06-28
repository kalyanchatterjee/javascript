// Ref: https://www.youtube.com/watch?v=PoRJizFvM7s
const posts = [
  {
    title: "This is first post",
    body: "This is the body of the first post"
  },
  {
    title: "This is second post",
    body: "This is the body of the second post"
  }
];

const getPosts = () => {
  setTimeout(() => {
    let strPosts = "";
    posts.map(post => {
      strPosts += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = strPosts;
  }, 1000);
};

const createPost = (postTitle, postBody, callback) => {
  setTimeout(() => {
    posts.push({
      title: postTitle,
      body: postBody
    });
    callback();
  }, 1000);
};

createPost(
  "This is third post",
  "This is the body of the third post",
  getPosts
);
