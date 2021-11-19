import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Adicionar from "./pages/Adicionar";
import Editar from "./pages/Editar";

import NavBar from "./components/NavBar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route name="Home" path="/" element={<Home />} />
        <Route name="Cursos" path="/cursos" element={<Cursos />} />
        <Route name="Adicionar" path="/adicionar" element={<Adicionar />} />
        <Route name="Editar" path="/editar/:id" element={<Editar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
