import { Routes, Route } from "react-router-dom";

import MainNavbar from "./components/shared/MainNavbar";
import Home from "./components/home/Home";
import Services from "./components/services/Services";

const App = () => (
  <>
    <MainNavbar />
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/services" element={ <Services /> } />
    </Routes>
  </>
)

export default App;
