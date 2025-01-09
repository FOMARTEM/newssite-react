import React, { useState } from "react";
import { api } from "../Api";

const Signup = ({ setView }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleSignup = (e) => {
    e.preventDefault();
    api.signup(formData).then(() => setView("login"));
  };

  return (
    <form onSubmit={handleSignup}>
      <h2>Signup</h2>
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
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
