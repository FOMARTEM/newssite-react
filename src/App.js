import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import CreatePost from "./components/CreatePost";

const App = () => {
  const [user, setUser] = useState(null);
  const [view, setView] = useState("posts");

  const logout = () => {
    setUser(null);
    setView("posts");
  };

  return (
    <div>
      <Header user={user} onLogout={logout} setView={setView} />
      <main>
        {view === "signup" && <Signup setView={setView} />}
        {view === "login" && <Login setUser={setUser} setView={setView} />}
        {view === "profile" && <Profile user={user} />}
        {view === "createPost" && <CreatePost user={user} />}
        {view === "posts" && <Posts />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
