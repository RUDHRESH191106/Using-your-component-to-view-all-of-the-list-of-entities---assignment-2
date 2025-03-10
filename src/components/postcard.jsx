/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px",
        boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
        maxWidth: "300px",
      }}
    >
      <img
        src={post.profilePic}
        alt="Profile"
        style={{ width: "50px", borderRadius: "50%" }}
      />
      <h3>{post.username}</h3>
      <p>{post.content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;