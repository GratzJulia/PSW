import React from "react";
import "../estilos/style.css";
import mockSintoma from "../mocks/entS";
import mockAcidente from "../mocks/entAc";

function handleSubmit(event) {
  alert("Uma cadastro foi enviado: ");
  event.preventDefault();
}

function PrimaryForm(props) {
  let lista = [];

  switch (props.entidade) {
    case "Atendimento":
      break;
    case "Acidente":
      lista = mockAcidente;
      break;
    case "Ponto de Atendimento":
      break;
    case "Sintoma":
      lista = mockSintoma;
      break;
    default:
      break;
  }
  return (
    <form onSubmit={handleSubmit}>
      {lista.map(item => (
        <>
          {console.log(lista)}
          <label>{item}: *</label>
          <input type="text" className="form-control" />
        </>
      ))}
    </form>
  );
}

export default PrimaryForm;
