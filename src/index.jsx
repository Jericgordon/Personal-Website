import React from 'react';
import { StrictMode} from 'react'; //TODO remove for prod
import { BrowserRouter, Routes, Route } from 'react-router';
import ReactDOM from 'react-dom/client';
// import { Toaster } from "react-hot-toast";
/* Specific page imports*/
import ATPage from "./pages/AppalachianTrailPage.jsx"
import HomePage from "./pages/HomePage.jsx";
import Projects from './pages/Projects.jsx';



ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      {/* <Toaster position="top-right" /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AT" element={<ATPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);