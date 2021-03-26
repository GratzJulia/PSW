import React from "react";
import { useSelector } from "react-redux";

export default function() {
  const sintomas = useSelector(state => state);

  return (
    <div className="flexible">
      {sintomas.map(sintoma => (
        <li className="list-group-item">
          {"[ " + sintoma.data + " ]" + " - " + sintoma.nome}:{" "}
          {sintoma.descricao}
        </li>
      ))}
    </div>
  );
}
