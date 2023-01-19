import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainNavbar from "./components/shared/MainNavbar";
import Footer from "./components/shared/Footer";
import NoMatch from "./components/shared/NoMatch";

import FetchUser from "./components/Auth/FetchUser";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import Home from "./components/home/Home";
import Services from "./components/services/Services";

const App = () => (
  <>
    <MainNavbar />
    <FetchUser>
      <Routes>
        <Route path="/home" element={ <Home /> } />
        <Route path="/services" element={ <Services /> } />
        {/* <Route path="/about" element={} />
        <Route path="/contact" element={} /> */}
        <Route path="/*" element={ <NoMatch /> } />
        {/* USER PATHS */}
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </FetchUser>
    <Footer />
  </>
)

export default App;
