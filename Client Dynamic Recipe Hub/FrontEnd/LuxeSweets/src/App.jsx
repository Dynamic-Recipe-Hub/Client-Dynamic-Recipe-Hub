import "./App.css";
import Login from "./Pages/UserLogin/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/UserSignup/Signup";
import ContactUs from "./Pages/ContactUs";
import Catalogrecipes from "./Pages/catalogrecipes";
import Catalogdishes from "./Pages/catalogdishes";
import Recipesdetail from "./Pages/recipesdetail";
import DishDetail from "./Pages/dishdetails";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <>
     <GoogleOAuthProvider
        clientId={
          "411660852235-gqds17af2oqbq127uck7c6g5o4g8tvmg.apps.googleusercontent.com"
        }
      >
      <BrowserRouter>
        <Catalogdishes />
        <Catalogrecipes />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Catalogrecipes" element={<Catalogrecipes />} />
          <Route path="/Recipesdetail" element={<Recipesdetail />} />
          <Route path="/Catalogdishes" element={<Catalogdishes />} />
          <Route path="/DishDetail" element={<DishDetail />} />
        </Routes>
      </BrowserRouter>
</GoogleOAuthProvider>

    </>
  );
}

export default App;
