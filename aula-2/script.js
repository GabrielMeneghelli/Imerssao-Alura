idade = prompt("Quantos anos você tem?")
if (idade < 18) {
  alert("voce NÃO pode jogar esse jogo!")
}

if (idade >= 18) {
  escolhaJogador = prompt("Escolha 1-Pedra, 2-papel ou 3-tesoura!")
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
   if (escolhaJogador == escolhaComputador){
      alert("Empate")
   }
   if(escolhaJogador == 1) {
      if(escolhaComputador == 2){
        alert("Computador Venceu")
      }
     if(escolhaComputador == 3){
       alert("Jogador Venceu")
     }
   }
  if(escolhaJogador == 2) {
    if(escolhaComputador == 1){
      alert("Jogador Venceu")
    }
    if(escolhaComputador == 3){
      alert("Computador Venceu")
    }
  }
  if (escolhaJogador == 3) {
    if(escolhaComputador == 1){
      alert("Computador venceu")
    }
    if(escolhaComputador == 2){
      alert("Jogador Venceu")
    }
  }
}