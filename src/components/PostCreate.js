import React, { useState } from "react";
import PostService from "../services/postService";

const PostCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newPost = { title, content };
      const response = await PostService.PostPost(newPost);
      console.log("Post created:", response);
    } catch (error) {
      console.error("There was an error creating the post!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostCreate;
