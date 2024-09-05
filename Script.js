const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
    enunciado: "Como a inteligência artificial (IA) pode impactar o mercado de trabalho no futuro?",
    alternativas: [
            {
                texto: "A) A IA substituirá muitos empregos, especialmente nas funções repetitivas.",
                afirmacao: "Com a automação crescente, tarefas repetitivas e processos de rotina serão mais eficientes quando realizados por máquinas, possivelmente substituindo trabalhos que atualmente são realizados por humanos."
            },
            {
                texto: "B) A IA criará novos empregos e oportunidades em setores emergentes.",
                afirmacao: "Enquanto alguns empregos serão substituídos, a IA também gerará novas funções e especializações, principalmente em áreas como desenvolvimento de IA, manutenção e análise de dados."
            }
        ]
    },
    {
        enunciado: "O que se espera sobre a capacidade das IAs para entender e gerar linguagem natural no futuro?",
        alternativas: [
        {
                texto: "A) As IAs irão alcançar uma compreensão e geração de linguagem natural quase indistinguível da humana.",
                afirmacao: "Os avanços em IA estão se aproximando de capacidades de compreensão e geração de linguagem que podem ser muito similares às humanas."
        },
        {
                texto: "B) As IAs continuarão a lutar com nuances e contextos complexos da linguagem, mesmo com futuros avanços.",
                afirmacao: "Apesar dos avanços, desafios persistem em capturar completamente as sutilezas e o contexto da linguagem humana."
            }
        ]
    },
    {
        enunciado: "Qual é uma preocupação importante sobre a ética da IA que deve ser abordada no futuro?",
        alternativas: [
        {
            texto: "A) Garantir que os algoritmos de IA sejam justos e não perpetuem preconceitos ou discriminação.",
            "afirmacao": "Uma grande preocupação ética é assegurar que as IAs não amplifiquem preconceitos existentes e que sejam desenvolvidas de forma justa e inclusiva."
        },
        {
            texto: "B) Aumentar a capacidade das IAs de realizar tarefas complexas de forma autônoma, sem considerar implicações éticas.",
            afirmacao: "Embora o aumento da autonomia seja uma meta, a ética deve ser considerada para evitar consequências prejudiciais e assegurar uma implementação responsável."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
