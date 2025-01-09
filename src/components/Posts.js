import React, { useEffect, useState } from "react";
import { api } from "../Api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getPosts().then((response) => setPosts(response.data));
  }, []);

  return (
    <div>
      <h2>All Posts</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </article>
      ))}
    </div>
  );
};

export default Posts;
