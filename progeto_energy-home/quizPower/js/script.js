
const questao = document.querySelector('.para-quiz');
const containerQuestao = document.querySelector('.box-interativo');
const respostasDiv = document.querySelector('.respostas');
const spnQtd = document.querySelector('.interação');
const textoFinal = document.querySelector('.final span');
const container = document.querySelector('.container-div-quiz2');
const containerFinal = document.querySelector('.final');
const btnReniciar = document.querySelector('.final button');
const popup = document.querySelector('#popup');
const btnInicial = document.querySelector('.inicial');
const btnProximo = document.querySelector('.proximo')

import questoes from "./questoes.js";
import questoes2 from "./questoes2.js";


let contador = 0
let indiceAtual = 0;
let questoesCertas = 0;
containerFinal.style.display = 'none';



btnReniciar.onclick = () => {
    container.style.display = 'flex';
    containerFinal.style.display = 'none';
    indiceAtual = 0;
    questoesCertas = 0;
    carregarQuestoes();
};
btnProximo.onclick = () => {
    container.style.display = 'flex';
    containerFinal.style.display = 'none';
    indiceAtual = 0;
    questoesCertas = 0;
    carregarQuestoesProxima();
};

btnInicial.onclick = () => {
    window.location.href = '../index.html' 
}




function proximaQuestao(e){
    if(e.target.getAttribute('data-corret')==="true"){
        questoesCertas++;
        console.log(questoesCertas)
        respostasDiv.style.display='none'
        popup.style.display = 'block'
        popup.classList.remove('popup-errado')
        popup.classList.add('popup-certo')
        popup.innerHTML= ` <p>'Parabens!! <br> Você acertou +1pt'</p><button class="btn-fechar" >Fechar</button>`
        const btnFechar = document.querySelector('.btn-fechar').addEventListener('click', fecharPopup);
        


        

    }else{
        
        popup.style.display = 'block'
        respostasDiv.style.display='none'
        popup.classList.remove('popup-certo')
        popup.classList.add('popup-errado')
        popup.innerHTML= ` <p>'X Que... pena!! <br> Você errou '</p><button class="btn-fechar" >Fechar</button>`
        const btnFechar = document.querySelector('.btn-fechar').addEventListener('click', fecharPopup);
    }
    
       

    
    }
    function fecharPopup() {
        document.getElementById('popup').style.display = 'none';
        if (indiceAtual < questoes.length - 1 && contador==0) {
            indiceAtual++;
            respostasDiv.style.display='block'

            
            carregarQuestoes();
        }else if(indiceAtual< questoes2.length -1 && contador==1){
            indiceAtual++;
            carregarQuestoesProxima()


            
        }else{
            finalizar();
    
    }
}

function finalizar() {

    if(questoesCertas==6){
        btnProximo.style.display = 'none'
        btnReniciar.style.display ='none'
        textoFinal.innerHTML = `Muito Bem!.. Você acertou ${questoesCertas} de ${questoes2.length} Você tirou total Parabéns!!! <br> Voltar pagina inicial...`;
        container.style.display = 'none';
        containerFinal.style.display = 'flex';

    }else if(questoesCertas==4 && contador==0){
     btnProximo.style.display = 'block'
     btnReniciar.style.display ='none'
     contador++;
     textoFinal.innerHTML = `Muito Bem!.. Você acertou ${questoesCertas} de ${questoes.length} o que dizer que está pronto proximo nivel <br>Quer continuar ou voltar pagina inicial?`;
     container.style.display = 'none';
     containerFinal.style.display = 'flex';
     

   }else if( contador>0){
    textoFinal.innerHTML = `Você acertou ${questoesCertas} de ${questoes2.length} <br>Quer continuar ou voltar pagina inicial?`;
     container.style.display = 'none';
     containerFinal.style.display = 'flex';

   }
   else{
     textoFinal.innerHTML = `Você acertou ${questoesCertas} de ${questoes.length} <br>Quer continuar ou voltar pagina inicial?`;
     container.style.display = 'none';
     containerFinal.style.display = 'flex';
} 
   
   
}

function carregarQuestoes() {
    respostasDiv.style.display='block'; 
    const item = questoes[indiceAtual];

    spnQtd.innerHTML = ` <strong class="str-quiz" >
     Questão  Power-Renew: 
     ${indiceAtual +1}/${questoes.length} </strong><br>`;
     containerQuestao.appendChild(spnQtd);

    questao.innerHTML = `${item.questoes}` 
     containerQuestao.appendChild(questao) 

     
     
     

     
     respostasDiv.innerHTML = ''; 
     container.appendChild(respostasDiv);

     

     item.respostas.forEach((respostas)=> {
       
       
        const div = document.createElement('div');

        div.innerHTML = `
        <button class="btn-resposta" data-corret="${respostas.correct}"> 
          ${respostas.alternativa}
        </button>
        `;
       
        respostasDiv.appendChild(div);
        

     });
     
     const btnResposta = document.querySelectorAll('.btn-resposta')

     
    btnResposta.forEach((item) => {
           item.addEventListener('click',proximaQuestao );
        

     
     
     
})};



function carregarQuestoesProxima() {
    const divMenu = document.querySelector('.menu-quiz-box3')
    const section = document.querySelector('.container-section-quiz2')
    divMenu.style.backgroundColor ='var(--cor2)'
    section.style.backgroundColor ='var(--cor3)'

    respostasDiv.style.display='block'; 
    const item = questoes2[indiceAtual];

    spnQtd.innerHTML = ` <strong class="str-quiz" >
     Questão  Power-Renew: 
     ${indiceAtual +1}/${questoes2.length} </strong><br>`;
     containerQuestao.appendChild(spnQtd);

    questao.innerHTML = `${item.questoes}` 
     containerQuestao.appendChild(questao) 

     
     
     

     
     respostasDiv.innerHTML = ''; 
     container.appendChild(respostasDiv);

     

     item.respostas.forEach((respostas)=> {
       
       
        const div = document.createElement('div');

        div.innerHTML = `
        <button class="btn-resposta" data-corret="${respostas.correct}"> 
          ${respostas.alternativa}
        </button>
        `;
       
        respostasDiv.appendChild(div);
        

     });
     
     const btnResposta = document.querySelectorAll('.btn-resposta')

     
    btnResposta.forEach((item) => {
           item.addEventListener('click',proximaQuestao );
        

     
     
     
})};

     
carregarQuestoes()
btnProximo.style.display = 'none'







// console.log(questao, respostasDiv, spnQtd, textoFinal, container, containerFinal, btnReniciar)