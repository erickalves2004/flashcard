import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import axios from "axios";

const Form = ({ edit, id }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [privacy, setPrivacy] = useState(false);

  const navigate = useNavigate();

  function getData() {
    axios
      .get(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`)
      .then(({ data }) => {
        setName(data.nome);
        setDesc(data.descricao);
        setPrivacy(data.publico);
      });
  }

  useEffect(() => {
    edit && getData();
  }, []);

  function enviar(e) {
    e.preventDefault();

    if (editar) {
      axios
        .put(`https://flashcard-api-mayck.herokuapp.com/api/colecoes/${id}`, {
          nome: name,
          descricao: desc,
          publico: privacy,
        })
        .finally(() => {
          navigate("/cursos");
        });
      return;
    }

    axios
      .post("https://flashcard-api-mayck.herokuapp.com/api/colecoes", {
        nome: name,
        descricao: desc,
        publico: privacy,
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
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="text"
        type="text"
      />
      <label>Descrição:</label>
      <textarea
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="text"
        style={{ resize: "none" }}
      />
      <label>Privacy</label>
      <div style={{ margin: "2rem 0 2rem 0", padding: "1rem" }}>
        <label style={{ fontWeight: "normal" }} htmlFor="publico">
          Público
        </label>
        <input
          onChange={() => setPrivacy(true)}
          id="publico"
          checked={privacy}
          className="radioButton"
          type="radio"
        />
        <label style={{ fontWeight: "normal" }} htmlFor="privado">
          Privacidade
        </label>
        <input
          onChange={() => setPrivacy(false)}
          id="privado"
          checked={!privacidade}
          className="radioButton"
          type="radio"
        />
      </div>
      <input
        className="sendButton cancel"
        type="button"
        value="Cancel"
        onClick={cancelar}
      />
      <input
        className="sendButton"
        type="submit"
        value={editar ? "Save" : "Add"}
      />
    </Container>
  );
};

export default Form;
