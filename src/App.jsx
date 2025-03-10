// eslint-disable-next-line no-unused-vars
import React from "react";
import PostCard from "./components/postcard";

const posts = [
  {
    id: 1,
    username: "John Doe",
    profilePic: "https://via.placeholder.com/50",
    content: "This is my first post!",
  },
  {
    id: 2,
    username: "Jane Smith",
    profilePic: "https://via.placeholder.com/50",
    content: "Hello everyone!",
  },
];

const App = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;