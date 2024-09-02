import "./App.css";
import Login from "./Pages/UserLogin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/UserSignup/Signup";
import ContactUs from "./Pages/ContactUs";
import Catalogrecipes from "./Pages/catalogrecipes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Catalogrecipes" element={<Catalogrecipes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
