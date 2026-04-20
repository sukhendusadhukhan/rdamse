import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Speacker from "./pages/Speacker";
import Callforpaper from "./pages/Callforpaper";
import Submission from "./pages/Submission";
import Ragistration from "./pages/Ragistration";
import Commite from "./pages/Commite";
import Vanue from "./pages/Vanue";
import Footer from "./pages/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <div className="bg-[#fafafa] min-h-screen">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speacker />} />
        <Route path="/call-for-papers" element={<Callforpaper />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/registration" element={<Ragistration />} />
        <Route path="/committee" element={<Commite />} />
        <Route path="/venue" element={<Vanue />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
