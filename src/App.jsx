// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'

import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import PostDetails from './pages/PostDetails'
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
// import Card from "./components/Card";

import "./App.css";

function App() {
  const [fontSize, setFontSize] = useState(16);

  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1>Welcome to Vite + React!</h1> */}
      <div className="app" style={{ "--app-font-size": `${fontSize}px` }}>
        <Navbar fontSize={fontSize} setFontSize={setFontSize} />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/posts/:id" element={<PostDetails />} />

          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
