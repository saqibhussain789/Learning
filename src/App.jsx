import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Services from "./pages/services"; 
import Tutorials from "./pages/tutorials";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for Home */}
        <Route path="/" element={<Main />} />
        
        {/* Route for Services */}
        <Route path="/services" element={<Services />} />

        {/* Route for Tutorials */}
        <Route path="/tutorials" element={<Tutorials />} />

        {/* Route for About */}
        <Route path="/about" element={<About />} />

         {/* Route for Contact */}
         <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
