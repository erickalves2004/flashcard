import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import axios from "axios";

const Form = ({ editar, id }) => {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [privacidade, setPrivacidade] = useState(false);

  const navigate = useNavigate();

  function getData() {
    axios
      .get(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`)
      .then(({ data }) => {
        setNome(data.nome);
        setDescricao(data.descricao);
        setPrivacidade(data.publico);
      });
  }

  useEffect(() => {
    editar && getData();
  }, []);

  function enviar(e) {
    e.preventDefault();

    if (editar) {
      axios
        .put(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`, {
          nome,
          descricao,
          publico: privacidade,
        })
        .finally(() => {
          navigate("/cursos");
        });
      return;
    }

    axios
      .post("https://flashcard-api-mayck.herokuapp.com/api/colecoes", {
        nome,
        descricao,
        publico: privacidade,
      })
      .finally(() => {
        navigate("/cursos");
      });
  }

  function cancelar() {
    navigate("/cursos");
  }

  return (
    <Container onSubmit={enviar}>
      <label>Nome:</label>
      <input
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="text"
        type="text"
      />
      <label>Descrição:</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        className="text"
        style={{ resize: "none" }}
      />
      <label>Privacy</label>
      <div style={{ margin: "2rem 0 2rem 0", padding: "1rem" }}>
        <label style={{ fontWeight: "normal" }} htmlFor="publico">
          Público
        </label>
        <input
          onChange={() => setPrivacidade(true)}
          id="publico"
          checked={privacidade}
          className="radioButton"
          type="radio"
        />
        <label style={{ fontWeight: "normal" }} htmlFor="privado">
          Privacidade
        </label>
        <input
          onChange={() => setPrivacidade(false)}
          id="privado"
          checked={!privacidade}
          className="radioButton"
          type="radio"
        />
      </div>
      <div className="buttons">
        <input
          className="sendButton cancel"
          type="button"
          value="Cancel"
          onClick={cancelar}
        />
        <input
          className="sendButton"
          type="submit"
          value={editar ? "Salvar" : "Cadastrar"}
        />
      </div>
    </Container>
  );
};

export default Form;
