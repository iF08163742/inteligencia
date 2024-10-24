const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Morreu um familiar seu e você foi ao sepultamento, ao final do enterro você se encaminha em direção ao portão de saída e se depara com uma noiva com vestido branco todo sujo de sangue. O que você faz??"[
            alternativas, [
            {
                texto: "Eu fecho os olhos e passo correndo.",
                afirmacao: "bdgfsdfsd"
                ]
            },
            {
                [
                texto, "Eu caminho um pouco mais rápido e passo sem olhar para os lados junto fazendo uma reza na mente.",
                afirmacao, "afirmação"
                ]
            }
        ],
        }
    {
        enunciado: "Ufa, você conseguiu entrar em seu carro, porém ao dar partida você nota que ele não está ligando e aquela noiva que estava na saída do cemitério está vindo em direção ao su carro. O que você faz??",
        alternativas, [
            {
                texto: "Eu entro em crise e saio correndo sem direção e abandono o carro."
                afirmacao: "afirmação",
               
            }
            {
                texto: "Eu tento o mais rápido possível ligar para alguém que possa me socorrer."
                afirmacao: "afirmação"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual]
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}

function mostraAlternativas(){
for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas = document.createElement("button");
    botaoAlternativas.textContent = alternativa.texto;
    botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
caixaAlternativas.appendChild(botaoAlternativas);
}
}

function respostaSelecionada(opçaoSelecionada){
    const afirmacoes = opçaoSelecionada.afirmacoes;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}
mostraPergunta();
