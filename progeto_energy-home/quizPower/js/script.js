
const questao = document.querySelector('.para-quiz');
const containerQuestao = document.querySelector('.box-interativo')
const respostasDiv = document.querySelector('.respostas');
const spnQtd = document.querySelector('.interação');
const textoFinal = document.querySelector('.final span');
const container = document.querySelector('.container-div-quiz2')
const containerFinal = document.querySelector('.final');
const btnReniciar = document.querySelector('.final button');
const popup = document.querySelector('#popup')


import questoes from "./questoes.js";

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




function proximaQuestao(e){
    if(e.target.getAttribute('data-corret')==="true"){
        questoesCertas++;
        popup.style.display = 'block'
        popup.classList.remove('popup-errado')
        popup.classList.add('popup-certo')
        popup.innerHTML= ` <p>'Parabens!! <br> Você acertou +1pt'</p><button class="btn-fechar" >Fechar</button>`
        const btnFechar = document.querySelector('.btn-fechar').addEventListener('click', fecharPopup);
        


        

    }else{
        popup.style.display = 'block'
        popup.classList.remove('popup-certo')
        popup.classList.add('popup-errado')
        popup.innerHTML= ` <p>'X Que... pena!! <br> Você errou '</p><button class="btn-fechar" >Fechar</button>`
        const btnFechar = document.querySelector('.btn-fechar').addEventListener('click', fecharPopup);
    }
    
       

    
    }
    function fecharPopup() {
        document.getElementById('popup').style.display = 'none';
        if (indiceAtual < questoes.length - 1) {
            indiceAtual++;

            
            carregarQuestoes();
            
        }else{
            finalizar();
    
    }
}

function finalizar() {
   textoFinal.innerHTML = `Você acertou ${questoesCertas} de ${questoes.length}`;
   container.style.display = 'none';
   containerFinal.style.display = 'flex'
}

function carregarQuestoes() {
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
     document.querySelectorAll('.btn-resposta').forEach((item) => {
        item.addEventListener('click', proximaQuestao );
        

     })

     


}
carregarQuestoes()



// console.log(questao, respostasDiv, spnQtd, textoFinal, container, containerFinal, btnReniciar)