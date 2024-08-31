let listaDeNumerossorteados = [];
let numeroLimte = 15;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    
exibirTextoNaTela('h1', ' Parabéns Thor! Palmas para você!👏👏👏');
exibirTextoNaTela('h2', ' Jogo de Adivinhação do Thor');
exibirTextoNaTela('p', 'Escolha um numero entre 1 e 15!');

}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1' ,'Você acertou!');
        let palavraTentativas = tentativas > 1 ? `tentativas` : `tentativa` ; let mensgaemTentativas = `Voce descobrio o numero secreto com ${tentativas} ${palavraTentativas}!`; 
        exibirTextoNaTela ('p' , mensgaemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
         exibirTextoNaTela('p' , 'O  numero secreto é menor');
        } else {
            exibirTextoNaTela('p', ' o numero secreto é maior');
                     }
                    tentativas++;
                    limparCampo();
                    }    
             }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt (Math.random() * numeroLimte + 1);
    let quantidadeDeElementosNaLista = listaDeNumerossorteados.length;

    if (quantidadeDeElementosNaLista == 3) {
        listaDeNumerossorteados = [];
    }

   if (listaDeNumerossorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
        } else {
            listaDeNumerossorteados.push(numeroEscolhido);
            console.log(listaDeNumerossorteados);
            return numeroEscolhido;
            }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
