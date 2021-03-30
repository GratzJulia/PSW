import React, { useState } from "react";
import "../estilos/style.css";
import mocks from "../mock";
import Button from "../componentes/button";
import Formulario from "../componentes/formCad";

function ConteudoC() {
  const Entidades = mocks;
  const [formulario, setFormulario] = useState(<></>); //HOOK

  return (
    <div className="flexible">
      <select
        className="custom-select"
        onChange={e => setFormulario(<Formulario entidade={e.target.value} />)}
        defaultValue={""}
      >
        {Entidades.map(ent => (
          <option value={ent} key={ent}>
            {ent}
          </option>
        ))}
      </select>
      <br /> <br />
      {formulario}
      <Button
        type="button"
        id="btn_cad"
        name="Cadastrar"
        onClick={() => console.log("cadastrar.")}
      />
    </div>
  );
}

export default ConteudoC;
