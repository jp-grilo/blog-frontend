import React, { useState } from "react";
import PostService from "../services/postService";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const data = await PostService.getPosts();
      setPosts(data);
    } catch (error) {
      console.error("There was an error fetching the posts!", error);
    }
  };

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={fetchPosts}>Fetch Posts</button>
      {posts.length === 0 ? (
        <p>Sem posts</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
