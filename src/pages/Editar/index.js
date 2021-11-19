import Form from "../../components/Form";
import { useParams } from "react-router";

const Editar = () => {
  const { id } = useParams();

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 style={{ margin: "3rem" }}>Editar curso</h1>
      <Form editar id={id} />
    </div>
  );
};

export default Editar;
