//criar lista com os 3 jogadores
personagem = ["", "", ""]
forcaPersonagem = 0

personagemCompt = ["", "", ""]
forcaCompt = 0

alert("o array personagem contem: " + personagem)
for(let i=0; i<3; i++){
  EscolhaPersonagem = prompt("Digite o nome do seu personagem " + (i + 1))
  personagem[i] = EscolhaPersonagem
//calcular a força de cada jogador e somar a força total
// mesmo codigo de baixo forcaPersonagem = forcaPesonagem + Math.floor(Math.random() * 10) + 1
  forcaPersonagem += Math.floor(Math.random() * 10) + 1
}
alert("Agora o array personagem contem: " + personagem)


let viloes = [];
for (let i = 0; i < 3; i++) {
  let indiceAleatorio = Math.floor(Math.random() * 10);
  let viloesPossiveis = ["Thanos", "Galactos", "Misterio", "Ultron", "Mecurio", "Venon", "Cruel", "Homelander", "Billy", "Vanda"];
  viloes[i] = viloesPossiveis[indiceAleatorio];
//calcular a força do jogador ao time do computador
  forcaCompt += Math.floor(Math.random() * 10) + 1
}
alert("Final dos viloes: " + viloes);


//comparar os dois times para saber quem venceu
if (forcaPersonagem > forcaCompt){
  alert("Seu time ganhou, sua força foi: " + forcaPersonagem)
} else {
    if(forcaPersonagem < forcaCompt){
      alert("Seu time perdeu, a força deles foi de: " + forcaCompt)
  } else{
    ("As forças são iguais")
  }
}

