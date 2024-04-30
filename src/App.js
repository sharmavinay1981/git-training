import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Aboutus from "./Components/Aboutus";
import Services from "./Components/Services";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contactus" element={<Contact />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="services" element={<Services />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
