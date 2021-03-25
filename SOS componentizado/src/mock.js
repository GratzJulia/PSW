const Constantes = [
  {
    Entidades: [
      "",
      "Acidente",
      "Atendimento",
      "Ponto de Atendimento",
      "Sintoma"
    ]
  },
  {
    Acidente: {
      data: "agora",
      descricao: "TESTE",
      estado: "RJ",
      cidade: "rio de janeiro",
      bairro: "tijuca"
    }
  },
  {
    PontoAtendimento: {
      nome: "",
      estado: "",
      cidade: "",
      bairro: "",
      endereco: ""
    }
  },
  {
    Sintoma: {
      data: "",
      nome: "",
      descricao: { nome: "", valor: "" },
      subdescricao: { nome: "", valor: "" }
    }
  },
  {
    Atendimento: {
      data: "",
      ptoAtend: "",
      sintomas: [],
      profissionais: []
    }
  }
];
export default Constantes;
