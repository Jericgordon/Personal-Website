import React from 'react';
import { StrictMode} from 'react'; //TODO remove for prod
import { HashRouter, Routes, Route } from 'react-router';
import ReactDOM from 'react-dom/client';
import ATPage from "./pages/AppalachianTrailPage.jsx"
import HomePage from "./pages/HomePage.jsx";
import Projects from './pages/Projects.jsx';
import BlogPost from "./pages/BlogPost.jsx";
import Hdg from './pages/Blogposts/Hdg.jsx';
import Minecraft from './pages/Blogposts/Minecraft.jsx';


ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    {/* <StrictMode> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AT" element={<ATPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog/:id"  element={<BlogPost />} />
        <Route path="/blog/hdg"  element={<Hdg />} />
        <Route path="/blog/minecraft"  element={<Minecraft />} />
      </Routes>
    {/* </StrictMode> */}
  </HashRouter>
);