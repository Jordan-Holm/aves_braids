import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/shared/MainNavbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Socials from "./components/socials/Socials";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/services" element={ <Services /> } />
      <Route path="/socials" element={ <Socials /> } />
    </Routes>
  </>
)

export default App;
