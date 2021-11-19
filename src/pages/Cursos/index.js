import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Curso from "../../components/Curso";

import { Container } from "./styles";
import axios from "axios";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  function pegarCursos() {
    axios
      .get("https://flashcard-api-mayck.herokuapp.com/api/colecoes/")
      .then(({ data }) => {
        setCursos(data);
      });
  }

  useEffect(() => {
    pegarCursos();
  }, []);

  return (
    <Container>
      <h1 className="title">Cursos</h1>
      <Link className="add" to="/adicionar">
        + Cadastrar
      </Link>
      <div className="cursos">
        {cursos.map((c) => {
          return (
            <Curso
              key={c.colecaoId}
              id={c.colecaoId}
              nome={c.nome}
              descricao={c.descricao}
              privacidade={c.publico}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default Cursos;
