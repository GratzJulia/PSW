import React from "react";
import "../estilos/style.css";
import Button from "../componentes/button";
import Icone from "../componentes/icon";
function pesquisar(event) {
  console.log(event.target);
}

function ConteudoB() {
  return (
    <div className="flexible">
      <input
        id="search-box-form"
        className="search"
        placeholder="Ex.: 'hemorragia', 'queimadura', 'convulsão', ..."
      />
      <Button
        type="button"
        id="btn_pesquisar"
        name="Pesquisar"
        icon={<Icone className="glyphicon glyphicon-search" />}
        onClick={pesquisar}
      />
    </div>
  );
}

export default ConteudoB;
