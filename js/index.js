let cards = document.querySelector('.cards')


// faz a leitura de alguma informação(requisita)
fetch('jogadores-brasil.json')
// Captura a resposta de uma call function
// a função then sempre irá receber a repsosta
// e irá armazená-la em variável
.then(resposta => resposta.json())
.then(dados => dados.forEach((jogador) => {

    //console.log(jogador.nome)//

    // criar um card padrão
    let card = document.createElement('div')
    //da uma classe css para o elemento especificado
    card.classList.add('card')
    //cria um elemento filho dentro do
    //elemento especificado
    cards.appendChild(card)
    //innterHTML = insere qualquer conteúdo dentro do html da tag
    card.innerHTML = `
    <span class="posicaoP>${jogador.posicao}</span>
    <span class="posicaoG>${jogador.posicao}</span>
    <img class="escudo" src="images/escudos/${jogador.escudo}.png" alt="" />
    <img class="jogador" src="images/jogadores/${jogador.foto}.png" alt="" />
    <h3 class="nomeJogador">${jogador.nome}</h3>
    <h4 class="numero">${jogador.numero}</h4>
    `
}))




/* chaves { } para delimitar os objetos e obrigatórias para iniciar e encerrar o conteúdo;
colchetes [ ] para indicar um array;
dois pontos : para separar a chave e seu valor correspondente;
vírgula , para indicar a separação entre os elementos. */

/* for each - laço de repetição */
