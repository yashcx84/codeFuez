import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Service from "./screens/Service";
import Navbar from "./components/Navbar";
import Error from "./screens/Error";
import Logout from "./screens/Logout";
import Welcome from "./screens/Welcome";
import Docs from "./screens/Docs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/services" element={<Service />} />
          <Route path="*" element={<Error />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
