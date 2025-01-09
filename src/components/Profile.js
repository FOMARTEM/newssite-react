import React, { useState, useEffect } from "react";
import { api } from "../Api";

const Profile = ({ user }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user && user.token) {
      api.getProfile(user.token).then((response) => {
        setFormData({ ...response.data, password: "" }); // Пароль оставляем пустым
      });
    }
  }, [user]);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (user && user.token) {
      api.updateProfile(formData, user.token).then((response) => {
        setMessage("Profile updated successfully!");
        setFormData({ ...response.data, password: "" });
      }).catch(() => setMessage("Error updating profile"));
    }
  };

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <form onSubmit={handleUpdate}>
      <h2>Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password (leave blank to keep current)"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Update Profile</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default Profile;
