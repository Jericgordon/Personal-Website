import React, { useContext,createContext,Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import ReactDOM from 'react-dom/client';

import HomePage from "./pages/HomePage.jsx";
import Projects from './pages/Projects.jsx';

const ATPage = React.lazy(() => import("./pages/AppalachianTrailPage.jsx"))
const BlogPost = React.lazy(() => import("./pages/BlogPost.jsx"))
const Hdg = React.lazy(() => import('./pages/Blogposts/Hdg.jsx'))
const Minecraft = React.lazy(() => import('./pages/Blogposts/Minecraft.jsx'))

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