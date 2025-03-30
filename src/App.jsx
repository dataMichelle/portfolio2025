import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
=======
import ScrollToTop from "./components/ScrollToTop"; // Import the ScrollToTop component
import Navbar from "./components/Navbar";
import Home from "./components/Home";
>>>>>>> dev
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add ScrollToTop here */}
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar />
<<<<<<< HEAD

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:projectURL" element={<ProjectDetail />} />
        </Routes>
=======
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project/:projectURL" element={<ProjectDetail />} />
          </Routes>
        </main>
>>>>>>> dev
      </div>
    </Router>
  );
}

export default App;
