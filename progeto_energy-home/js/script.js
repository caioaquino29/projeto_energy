// menu tamanho pc..........
const menuLista = document.getElementById("menu-lista");
const cadastroLista = document.querySelector("#cadastro-lista");
const quizLista = document.querySelector("#quiz-lista");
const mapaLista = document.querySelector("mapa-lista");
const btnLogin = document.querySelector('.menu-navegar-lista-btn')
const containerUl = document.querySelector('.menu-navegar-lista')
const containerLogin = document.querySelector('#container-logar')
const menuDiv =document.querySelector('.menu-navegar-div')
const spanSec =document.querySelector('#li-btn')

menuLista.addEventListener('click',()=>{
    menuLista.classList.toggle('change')
    document.getElementById("nav").classList.toggle("change");
 
})
containerUl.addEventListener('click', (e)=>{
    let chave = e.target.id
    openLink(chave)
}
)
menuDiv.addEventListener('click',(e)=>{
    let chave_1 = e.target.id
    console.log(chave_1)
    
    if(chave_1 =='porta_1'|| chave_1=='porta_2'){
      const janelaFlutuante = document.createElement('div');
            janelaFlutuante.id = 'popup'
            janelaFlutuante.innerHTML = ` 
            <div class="container-login">
            <span class="fechar"><button class="btn-fechar">X</button></span>
        <h2>Login</h2> 
        <form action="">
            <label for="Email">Seu Email</label>
            <input type="text">
            <label for="senha">Sua senha</label>
            <input type="text">
            <button class="btn-logar">Logar</button>

        </form>
        <div class="final-login">
            <span>Ainda não tem sua conta?</span>
            <button class="btn-cadastrar-login">Cadastre-se</button>

        </div>
    </div>
            `
            containerLogin.appendChild(janelaFlutuante)


            botaoLogin();

            function botaoLogin(){
            const btnLogar = document.querySelector('.btn-logar')
            const btnFechar = document.querySelector('.btn-fechar')
            const btnCadastrar =document.querySelector('.btn-cadastrar-login')
            
            
               btnCadastrar.onclick = () => {
                window.location.href = './cadastro/index.html' 

                }
               btnFechar.onclick = () =>{
                janelaFlutuante.style.display = 'none'
                reaver()
                

                }
               btnLogar.onclick =()=>{
                alert('Login não castrado!!! ')
                reaver()
                
                }     
               function reaver(){
                 window.location.reload()
                }
              
    }

          
    
    
    
    
    
    
    
    
    // let chave = e.target.className
    // console.log(chave)
    // openLink(chave)





}})
function menuOnClick() {

    spanSec.style.display='none'
    document.getElementById("menu-bar-sec").classList.toggle("change");
    document.getElementById("nav-sec").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

function openLink(chave){
    ;
    
    if(chave==='cadastro-lista'){
        window.open('cadastro/index.html')

        
    }
    if(chave==='quiz-lista'){
        window.open('quizPower/index.html')
        
    }
    if( chave==='mapa-lista'){
        window.open('mapa.html')
       
       
    }
    




    
}




