import React, { useEffect, useState } from "react";
import { api } from "../Api";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getPosts().then((response) => setPosts(response.data));
  }, []);

  return (
    <div class="center-text">
      <h2>Посты:</h2>
      {posts.map((post) => (
        <article key={post.id}>
          <div>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <p>Пост создан: {post.createdate}, пользователем №{post.userid}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Posts;
