ganhou = 0 //1-perdeu 0-ganhou

for(let rodada = 1; rodada <= 8; rodada++){
  console.log("Rodada: " + rodada)
  
  escolhaJogador = prompt("Nível "+rodada+ ", escolha o vidro 1, 2 ou 3")
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
  if (escolhaJogador == pisoQuebrado){
    alert("O Vidro quebrou, você perdeu")
    rodada = 9;
    ganhou = 1
  } else {
    alert("Passou, o piso quebrado estava na ponte: " + pisoQuebrado)
  }
}

if (ganhou == 0) {
  alert("Você Venceu")
}