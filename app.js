//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

//  Função para adicionar amigo

function adicionarAmigo(novoAmigo) {
  // Valida se o novoAmigo é válido ( não é vazio ou uma string que não seja um nome )
  console.log("Adicionando amigo", novoAmigo);
  if (!novoAmigo || novoAmigo.length < 4) {
    alert("Por favor insira um nome válido.");

    return;
  }

  amigos.push(novoAmigo);

  const inputDoNovoAmigo = document.getElementById("amigo");
  inputDoNovoAmigo.value = "";

  listaAmigos();

  console.log("Nova lista de amigos", amigos);
}

function listaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");

    // Limpa a lista de amigos
    listaAmigos.innerHTML = "";

    // Adiciona cada amigo na lista de amigos usando for
    for (let posicao = 0; posicao < amigos.length; posicao++) {
        listaAmigos.innerHTML += `<li>${amigos[posicao]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length < 1) {
      alert(" Adicione amigos antes de sortear.");
  
      return;
    }
  
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  
    document.getElementById("resultado").innerHTML =
        "Seu amigo secreto é : " + amigoSorteado;
}