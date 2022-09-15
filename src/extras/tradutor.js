const tradutor = (tipo) => {
  if (tipo === "bug") {
    tipo = "inseto";
    return tipo;
  }
  if (tipo === "grass") {
    tipo = "planta";
    return tipo;
  }
  if (tipo === "poison") {
    tipo = "venenoso";
    return tipo;
  }
  if (tipo === "fire") {
    tipo = "fogo";
    return tipo;
  }
  if (tipo === "flying") {
    tipo = "voador";
    return tipo;
  }
  if (tipo === "electric") {
    tipo = "elétrico";
    return tipo;
  }
  if (tipo === "ground") {
    tipo = "terra";
    return tipo;
  }
  if (tipo === "water") {
    tipo = "água";
    return tipo;
  }
  if (tipo === "fairy") {
    tipo = "fada";
    return tipo;
  }
  if (tipo === "fighting") {
    tipo = "lutador";
    return tipo;
  }
  if (tipo === "psychic") {
    tipo = "psíquico";
    return tipo;
  }
  if (tipo === "rock") {
    tipo = "pedra";
    return tipo;
  }
  if (tipo === "ice") {
    tipo = "gelo";
    return tipo;
  }
  if (tipo === "steel") {
    tipo = "metal";
    return tipo;
  }
  if (tipo === "ghost") {
    tipo = "fantasma";
    return tipo;
  }
  if (tipo === "dragon") {
    tipo = "dragão";
    return tipo;
  }
  if (tipo === "dark") {
    tipo = "noturno";
    return tipo;
  }
  else return tipo;
};

export default tradutor;
