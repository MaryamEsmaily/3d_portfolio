import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import { Home, About, Projects, Contact } from "./pages/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
