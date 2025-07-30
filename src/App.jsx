import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TravelGuide from "./pages/TravelGuide";
import Layout from "./layout/Layout";
import PackagesPage from "./pages/PackagesPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-us" element={<About />} />
          <Route path="tour-packages" element={<PackagesPage />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="travel-guide" element={<TravelGuide />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
