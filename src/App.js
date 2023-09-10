import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Project from "./components/project/Project";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
