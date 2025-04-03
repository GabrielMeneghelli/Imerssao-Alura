rodada = 1
while(rodada <= 8){
  console.log("Rodada: " + rodada)
  
  escolhaJogador = prompt("Nível "+rodada+ ", escolha o vidro 1, 2 ou 3")
  pisoQuebrado = Math.floor(Math.random()*3) + 1;
  
  if (escolhaJogador == pisoQuebrado){
    alert("O Vidro quebrou, você perdeu")
    rodada = 9;
  } else {
    alert("Passou, o piso quebrado estava na ponte: " + pisoQuebrado)
  }
  
  rodada = rodada + 1
}

if (rodada == 9) {
  alert("Você Venceu")
}