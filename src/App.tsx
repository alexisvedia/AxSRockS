import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import { NavBarDemo } from "./components/ui/NavBarDemo";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Aurora from "./components/Aurora";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const AuroraBackground = () => {
  const location = useLocation();

  const getColorsByRoute = () => {
    switch (location.pathname) {
      case "/":
        return ["#3A29FF", "#FF94B4", "#FF3232"]; // Home - mantiene los colores originales
      case "/about":
        return ["#00C6FF", "#0072FF", "#7A00FF"]; // About - azules y violeta
      case "/project":
        return ["#FF4E50", "#FC913A", "#F9D423"]; // Projects - naranja y amarillo
      case "/resume":
        return ["#56ab2f", "#a8e063", "#00C6FF"]; // Resume - verdes y cyan
      default:
        return ["#3A29FF", "#FF94B4", "#FF3232"];
    }
  };

  return (
    <Aurora
      colorStops={getColorsByRoute()}
      blend={0.5}
      amplitude={1.0}
      speed={0.5}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -999,
      }}
    />
  );
};

const App: React.FC = () => {
  const [load, updateLoad] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <NavBarDemo />
        <ScrollToTop />
        <AuroraBackground />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
