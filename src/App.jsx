import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import ProjectDetail1 from "./components/projectDetails/ProjectDetail1";
import ProjectDetail2 from "./components/projectDetails/ProjectDetail2";
import ProjectDetail3 from "./components/projectDetails/ProjectDetail3";
import ProjectDetail4 from "./components/projectDetails/ProjectDetail4";
import ProjectDetail5 from "./components/projectDetails/ProjectDetail5";
import ProjectDetail6 from "./components/projectDetails/ProjectDetail6";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle function—your user clicks this
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  // Apply/remove 'dark' class
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-detail/1" element={<ProjectDetail1 />} />
            <Route path="/project-detail/2" element={<ProjectDetail2 />} />
            <Route path="/project-detail/3" element={<ProjectDetail3 />} />
            <Route path="/project-detail/4" element={<ProjectDetail4 />} />
            <Route path="/project-detail/5" element={<ProjectDetail5 />} />
            <Route path="/project-detail/6" element={<ProjectDetail6 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
