import React from "react";
import "../estilos/style.css";
import mocks from "../mock";
import Button from "../componentes/button";
import Formulario from "../componentes/formCad";

function cadastrar(selected) {
  console.log(selected);
}

function ConteudoC() {
  const Entidades = mocks;

  return (
    <div className="flexible">
      <select
        className="custom-select"
        onChange={e => cadastrar(e.target.value)}
        defaultValue={""}
      >
        {Entidades.map(ent => (
          <option value={ent} key={ent}>
            {ent}
          </option>
        ))}
      </select>
      <br /> <br />
      <Formulario entidade="Sintoma" />
      <Button type="button" id="btn_cad" name="Cadastrar" />
    </div>
  );
}

export default ConteudoC;

// <form>
//         <div className="form-group">
//           <div class="col-sm-10">
//             <label for="staticEmail">Data</label>
//             <input type="text" class="form-control" />
//           </div>
//         </div>
//         <div class="form-group">
//           <div class="col-sm-10">
//             <label>Nome</label>
//             <input type="text" class="form-control" />
//           </div>
//         </div>
//       </form>
