import React from "react";

const Header = ({ user, onLogout, setView }) => {
  return (
    <header>
      <h1>Новостной сайт</h1>
      <nav>
        {!user ? (
          <>
            <button onClick={() => setView("signup")}>Signup</button>
            <button onClick={() => setView("login")}>Login</button>
            <button onClick={() => setView("posts")}>Posts</button>
          </>
        ) : (
          <>
            <button onClick={() => setView("profile")}>Update Profile</button>
            <button onClick={onLogout}>Logout</button>
            <button onClick={() => setView("createPost")}>Create Post</button>
            <button onClick={() => setView("posts")}>Posts</button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
