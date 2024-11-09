import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostList from "./components/PostList";
import PostCreate from "./components/PostCreate";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Blog</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<PostCreate />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
