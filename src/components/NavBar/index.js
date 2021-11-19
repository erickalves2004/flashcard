import { Container } from "./styles";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Container>
      <Link to="/">Home</Link>
      <Link to="/cursos">Cursos</Link>
    </Container>
  );
};

export default NavBar;
