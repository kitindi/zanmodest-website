import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Packages from "./components/Packages";
import Contact from "./pages/Contact";
import TravelGuide from "./pages/TravelGuide";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/travel-guide" element={<TravelGuide />} />
      </Routes>
    </div>
  );
}

export default App;
