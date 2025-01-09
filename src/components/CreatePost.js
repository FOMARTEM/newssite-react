import React, { useState } from "react";
import { api } from "../Api";

const CreatePost = ({ user }) => {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [message, setMessage] = useState("");

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (user && user.token) {
      api.createPost(formData, user.token).then((response) => {
        setMessage("Post created successfully!");
        setFormData({ title: "", body: "" }); // Очистить форму после создания
      }).catch(() => setMessage("Error creating post"));
    }
  };

  if (!user) {
    return <p>Please log in to create a post.</p>;
  }

  return (
    <form onSubmit={handleCreatePost}>
      <h2>Create Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <textarea
        placeholder="Body"
        value={formData.body}
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
      />
      <button type="submit">Create Post</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default CreatePost;
