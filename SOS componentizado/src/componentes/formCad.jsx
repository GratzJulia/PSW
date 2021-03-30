import React from "react";
import "../estilos/style.css";
import mockSintoma from "../mocks/entS";
import mockAcidente from "../mocks/entAc";
import mockPtoAtd from "../mocks/entPA";
import mockAtd from "../mocks/entAt";

function handleSubmit(event) {
  alert("Uma cadastro foi enviado: ");
}

function PrimaryForm(props) {
  let lista = [];

  switch (props.entidade) {
    case "Atendimento":
      lista = mockAtd;
      break;
    case "Acidente":
      lista = mockAcidente;
      break;
    case "Ponto de Atendimento":
      lista = mockPtoAtd;
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