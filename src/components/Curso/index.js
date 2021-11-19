import { useNavigate } from "react-router-dom";
import { Container } from "./styles";

import axios from "axios";

const Curso = ({ id, nome, descricao, privacidade }) => {
  const navigate = useNavigate();

  function editar() {
    navigate(`/editar/${id}`);
  }

  function deletar() {
    axios
      .delete(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`)
      .finally(() => {
        window.location.reload();
      });
  }

  return (
    <Container>
      <h1>{nome}</h1>
      <p>{descricao}</p>
      <div className="buttons">
        <button onClick={editar}>Editar</button>
        <button onClick={deletar}>Deletar</button>
      </div>
      <bold>{privacidade ? "Público" : "Privado"}</bold>
    </Container>
  );
};

export default Curso;
