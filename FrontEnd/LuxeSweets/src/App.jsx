import Login from "./Pages/UserLogin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/UserSignup/Signup";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
