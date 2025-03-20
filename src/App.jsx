import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Nav from "./pages/nav";
import Foot from "./pages/foot";
import Mathematics from "./pages/Mathematics";
import English from "./pages/English";
import Science from "./pages/Science";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />}>
          <Route path="mathematics" element={<Mathematics />} />
          <Route path="english" element={<English />} />
          <Route path="science" element={<Science/>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Foot />
    </>
  );
}

export default App;
