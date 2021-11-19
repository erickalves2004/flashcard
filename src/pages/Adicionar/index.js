import Form from "../../components/Form";

const Adicionar = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: "3rem" }}>Cadastrar curso</h1>
      <Form />
    </div>
  );
};

export default Adicionar;
