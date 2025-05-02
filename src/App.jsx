import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectsOverview from "./components/ProjectsOverview";
import ProjectDetail from "./components/ProjectDetail";
import { DarkModeProvider } from "../context/DarkModeContext";

function App() {
  return (
    <DarkModeProvider>
      <Router>
        <div className="min-h-screen bg-transparent">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<ProjectsOverview />} />
              <Route path="/project/:projectURL" element={<ProjectDetail />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </Router>
    </DarkModeProvider>
  );
}

export default App;
