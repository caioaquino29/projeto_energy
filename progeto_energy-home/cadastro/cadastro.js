//-------------------- Validação User Name -----------------///
let userNameInput = document.querySelector('#input-nome');
let userNameLabel = document.querySelector('label[for="nome"]');
let userNameHelper = document.querySelector('#username-helper')
let form = document.querySelector('#container-section-cadastrar')
let btnVoltar = document.querySelector('#btn-voltar')

window.onload = function() {
  form.classList.remove('ivisible')
  btnVoltar.classList.remove('iivisible')
};




//  fuções Gerais para evitar repetições.... 

function togglePopup(input, label){
    // Motrar popup de campo obrigatorio.....
    input.addEventListener('focus', ()=> {
      label.classList.add('required-popup')
    
    })
//    ocultar popup de campo obrigatorio......
     input.addEventListener('blur', ()=>{
       label.classList.remove('required-popup');
     
    })
};


togglePopup(userNameInput, userNameLabel);
// Se input for preechido corretamente será adotado seguintes class com as estilização referentes a correto
function etilizarInputCorreto(input, helper){
    helper.classList.remove('visible');
    input.classList.remove('error');
    input.classList.add('correct')

};
// Se input for preechido erronimente será adotado seguintes class com as estilização referentes a erro
function etilizarInputIncoorreto(input,helper){
    helper.classList.add('visible');
    input.classList.add('error');
    input.classList.remove('correct')
};


// Validar valor do input atraves do evento 
userNameInput.addEventListener("change", (e) => {
    let valor = e.target.value
    

    if(valor.length < 10){
        // verifica se no campo input foi preechido com mais que 10 caracteres p
        userNameHelper.innerText = '* Presisar ser o completo';
    etilizarInputIncoorreto(userNameInput,userNameHelper) 
     formularioPrenchido.username = false;   
}else{
    etilizarInputCorreto(userNameInput,userNameHelper)
      formularioPrenchido.username = true;
}

});
// -------------------validação do CPF ---------------//

let userCPFInput = document.querySelector('#input-cpf');
let userCPFLabel = document.querySelector('.label-cpf');
let userCPFHelper = document.querySelector('#userCPF-helper')


togglePopup(userCPFInput, userCPFLabel);




// Validar valor do input atraves do evento 
userCPFInput.addEventListener("change", (e) => {
    let valor = e.target.value

    if(valor.length < 11 || valor.length > 11 ){
        // verifica se no campo input foi preechido com mais que 10 caracteres p
        userCPFHelper.innerText = '* CPF invalido! só os números sem ponto e traço';
    etilizarInputIncoorreto(userCPFInput,userCPFHelper) 
      formularioPrenchido.cpf = false;   
}else{
    etilizarInputCorreto(userCPFInput,userCPFHelper)
     formularioPrenchido.cpf = true;
}

});




// -------------------validação do Data ---------------//

let userDataInput = document.querySelector('#input-data');
let userDataLabel = document.querySelector('label[for="date"');
let userDataHelper = document.querySelector('#userData-helper')

togglePopup(userDataInput, userDataLabel);




// Validar valor do input atraves do evento 
userDataInput.addEventListener("change", (e) => {
    let valor = e.target.value
    var hoje = new Date();
    var nasc  = new Date(valor);
    var idade = hoje.getFullYear() - nasc.getFullYear();
    var m = hoje.getMonth() - nasc.getMonth();
    if (m < 0 || (m === 0 && hoje.getDate() < nasc.getDate())) idade--;
   

    if(idade < 18){
       
        // Data de nascemento abaixo do dezoito ou menor de idade não é permitido 
        userDataHelper.innerText = '* Pessoas menores de 18 não podem se cadastrar.';
        etilizarInputIncoorreto(userDataInput,userDataHelper) 

          formularioPrenchido.idade = false;   
    }   
    if(idade>60){
        // Idade acima do permitido para controle.....
        userDataHelper.innerText = '* Data  de nascemento invalido!';
        etilizarInputIncoorreto(userDataInput,userDataHelper) 
        formularioPrenchido.idade = false
    }
    if(idade >= 18 && idade <= 60){
    // idade detro da data de nascemento valiada para cadastro...
     etilizarInputCorreto(userDataInput,userDataHelper)
      formularioPrenchido.idade = true;
    }

});

let userTelInput = document.querySelector('#input-tel')
let userTelLabel = document.querySelector('label[for="phone"]');
let userTelHelper = document.querySelector('#userTel-helper')



togglePopup(userTelInput, userTelLabel);




// Validar valor do input atraves do evento 
userTelInput.addEventListener("change", (e) => {
    let valor = e.target.value
    

    if(valor.length < 11 || valor.length > 14 ){
        // verifica se no campo input foi preechido com mais que 14 ou menor que 11 caracteres 
        userTelHelper.innerText = '* Telefone invalido! só os números celular é acetavel';
    etilizarInputIncoorreto(userTelInput,userTelHelper) 
    formularioPrenchido.telefone = false;   
}else{
    etilizarInputCorreto(userTelInput,userTelHelper)
      formularioPrenchido.telefone = true;
}

});


let userEnderecoInput = document.querySelector('#input-endereco')
let userEnderecoLabel = document.querySelector('.label-endereco');
let userEnderecoHelper = document.querySelector('#userEndereco-helper')



togglePopup(userEnderecoInput, userEnderecoLabel);




// Validar valor do input atraves do evento 
userEnderecoInput.addEventListener("change", (e) => {
    let valor = e.target.value
    

    if(valor.length < 15 ){
        // verifica se no campo input foi preechido com mais que 15 caracteres p
        userEnderecoHelper.innerText = '* |Endereço invalido.... ';
    etilizarInputIncoorreto(userEnderecoInput,userEnderecoHelper) 
      formularioPrenchido.endereco = false;   
}else{
    etilizarInputCorreto(userEnderecoInput,userEnderecoHelper)
    formularioPrenchido.endereco = true;
}

});


let userNumeroInput = document.querySelector('#input-numero')
let userNumeroLabel = document.querySelector('.en-numero');
let userNumeroHelper = document.querySelector('#userNumero-helper')



togglePopup(userNumeroInput, userNumeroLabel);




// Validar valor do input atraves do evento 
userNumeroInput.addEventListener("change", (e) => {
    let valor = e.target.value
    
 
    if(valor.length < 1 || valor.length >4 ){
        // verifica se no campo input foi preechido com mais que 4 caracteres p
        userNumeroHelper.innerText = '* Número de endereço invalido.... ';
    etilizarInputIncoorreto(userNumeroInput,userNumeroHelper) 
      formularioPrenchido.numero = false;   
}else{
    etilizarInputCorreto(userNumeroInput,userNumeroHelper)
     formularioPrenchido.numero = true

}})


let userEmailInput = document.querySelector('#input-email')
let userEmailLabel = document.querySelector('label[for="email"]');
let userEmailHelper = document.querySelector('#userEmail-helper')



togglePopup(userEmailInput, userEmailLabel);




// Validar valor do input atraves do evento 
userEmailInput.addEventListener("change", (e) => {
    let valor = e.target.value
    
 
    if(valor.includes('@') && valor.includes('.com')){
        // verifica se no campo input foi preechido com '@' e '.com '

        etilizarInputCorreto(userEmailInput,userEmailHelper)
       
     formularioPrenchido.email = true;   
}else{
    userEmailHelper.innerText = '* Endereço de email invalido.... ';
    etilizarInputIncoorreto(userEmailInput,userEmailHelper) 
    
    formularioPrenchido.email = false

}})

let userSenhaInput = document.querySelector('#input-senha')
let userSenhaLabel = document.querySelector('label[for="password"]');
let userSenhaHelper = document.querySelector('#userSenha-helper')


togglePopup(userSenhaInput, userSenhaLabel);




// Validar valor do input atraves do evento 
userSenhaInput.addEventListener("blur", (e) => {
    let valor = e.target.value
    
 
    if(valor.length=='' || valor.length < 6){
        // verifica se no campo input foi preechido está vazio ou possui mais 6 caracteres

        userSenhaHelper.innerText = '*Crie uma senha forte tem que ter pelo menos 6 caracteres';
       etilizarInputIncoorreto(userSenhaInput,userSenhaHelper) 
       
    formularioPrenchido.senha = false;   
}else{

    etilizarInputCorreto(userSenhaInput,userSenhaHelper)
    
    formularioPrenchido.senha = true
}});

let userSenhaConfirmarInput = document.querySelector('#input-senhaConfirmar')
let userSenhaConfirmarLabel = document.querySelector('label[for="confirmar-senha"]');
let userSenhaConfirmarHelper = document.querySelector('#userSenhaConfirmar-helper')


togglePopup(userSenhaConfirmarInput, userSenhaConfirmarLabel);




// Validar valor do input atraves do evento 
userSenhaConfirmarInput.addEventListener("blur", (e) => {
    let valor = e.target.value
    
 
    if(valor!=userSenhaInput.value){
        // verifica se no campo input foi preechido está vazio ou possui mais 6 caracteres

        userSenhaConfirmarHelper.innerText = '*Senha esta diferente da primeira';
       etilizarInputIncoorreto(userSenhaConfirmarInput,userSenhaConfirmarHelper) 
       
    formularioPrenchido.confirmaSenha= false;   
}else{

    etilizarInputCorreto(userSenhaConfirmarInput,userSenhaConfirmarHelper)
    
    formularioPrenchido.confirmaSenha = true
}});


let btnSave = document.querySelector('.btn-save');
console.log(btnSave)
let formularioPrenchido = {
 username: false,
 cpf: false,
 telefone:false,
 endereco:false,
 numero:false,
 email: false,
 idade: false,
 senha: false,
 confirmaSenha: false
}




btnSave.addEventListener('click',(e) =>{

    let main = document.querySelector('#container-cadastrar');

    if(formularioPrenchido.username == false || formularioPrenchido.cpf == false || formularioPrenchido.telefone == false || formularioPrenchido.endereco == false || formularioPrenchido.numero == false || formularioPrenchido.email == false || formularioPrenchido.idade == false || formularioPrenchido.senha == false || formularioPrenchido.confirmaSenha == false ){
        e.preventDefault()
        alert('Não foi possivel enviar\n  Preecha corretamente sem pular nenhum - Campo Obrigatorio')
    }else{
        alert("Formulario enviado com sucesso!!!")
        btnVoltar.classList.add('ivisible')
        form.classList.add('ivisible')
        const divBox = document.createElement('div')
        divBox.classList.add('divBox')
        divBox.innerHTML = ` <p>Parabens seu cadastro foi concluío!! </p> <button class="btn-home" onclick="window.open('../index.html')"><i class="fa fa-home"></i>Inicio </button> <p> <small>Volta para pagina incial para fazer login</small></p>`
        main.appendChild(divBox);
    }
})