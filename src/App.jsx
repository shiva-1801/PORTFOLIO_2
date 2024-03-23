import "./index.css"
import React from "react"
import { Route,BrowserRouter as Router,Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/contact/Contact"
function App() {
  
  return (
    
    <Router>
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
      
  )
}

export default App
