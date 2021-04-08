import { createStore } from "redux";
import TESTE from "../mocks/TESTE";

function reducerTree(state = TESTE, action) {
  switch (action.type) {
    case "SINTOMA_ADD":
      state.Sintomas.push(action.newS);
      return state.Sintomas;
    case "ATENDIMENTO_ADD":
      state.Atendimentos.push(action.newAt);
      return state.Atendimentos;
    case "ACIDENTE_ADD":
      state.Acidentes.push(action.newAc);
      return state.Acidentes;
    case "PTO_ADD":
      state.PontosAtendimento.push(action.newPT);
      return state.PontosAtendimento;
    default:
      return state;
  }
}

const store = createStore(reducerTree);
// store.dispatch({
//   type: "SINTOMA_ADD",
//   newS: {
//     data: "datetime",
//     nome: "cólica",
//     descricao: "durou a tarde toda"
//   }
// });

//console.log(store.getState());
export default store;
