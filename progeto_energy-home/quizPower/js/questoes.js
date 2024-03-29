// É um objeto/jason para mudar as questõe  de sustentabilidade 

export default [  
  // é uma funcionalidade do JavaScript que permite exportar 
    {
      // questoes são as peguntas do quiz 
      questoes: " As fontes de energia podem ser classificadas, conforme a sua origem, em renováveis e não renováveis. As fontes renováveis de energia têm como principal característica a: ",
      respostas: [
        // respostas são as alternativa e estão em um array 
        { alternativa: "A) - Utilização de recursos naturais que possuem capacidade de regeneração",
        // as aternativas são alternativas 
        correct: true },
        // o Correct são especie de variavel com valor boolean true e false para saber se altenativa escolhida está certa ou não
        { alternativa: "B) -  Dependência da utilização de combustíveis fósseis para a sua produção.", correct: false },
        { alternativa: "C) -  Necessidade de baixos investimentos financeiros para produção elétrica.", correct: false },
      ],
    },
    {
      questoes: "Qual é uma fonte de energia renovável amplamente utilizada para aquecimento de água e geração de eletricidade?",
      respostas: [
        { alternativa: "A) -  Energia geotérmica", correct: false },
        { alternativa: "B) -   Energia solar", correct: true },
        { alternativa: "C) -  Energia dos oceanos", correct: false },
      ],
    },
    {
      questoes: "Qual recurso natural é considerado não renovável e não faz parte das fontes de energia limpa?",
      respostas: [
        { alternativa: "A) -  Vento e Sol", correct: false },
        { alternativa: "B) -  Água", correct: false },
        { alternativa: "C) -  Carvão", correct: true },
      ],
    },
    {
      questoes: "Qual é a principal fonte de energia renovável obtida a partir do movimento dos ventos?",
      respostas: [
        { alternativa: "A) -  Energia hidráulica", correct: false },
        { alternativa: "B) -  Energia da biomassa6", correct: false },
        { alternativa: "C) -  Energia eólica", correct: true },
      ],
    },
  ];  