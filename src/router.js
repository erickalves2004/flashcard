import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";

import NavBar from "./components/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route name="Home" path="/" element={<Home />} />
        <Route name="Cursos" path="/cursos" element={<Cursos />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
