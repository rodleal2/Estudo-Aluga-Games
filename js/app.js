function alterarStatus(id){
    let GameClicado = document.getElementById (`game-${id}`) ;
    //gameclicado Procura um elemento Com Classe (".dashboard__item__img") 
    let Imagem = GameClicado.querySelector(".dashboard__item__img") ;
    let Botao = GameClicado.querySelector(".dashboard__item__button") ; 
   
    //let NomeDoJogo = GameClicado.querySelector(".dashboard__item__name") ; 
    // textContent = o que está escrito na classe
    //alert (NomeDoJogo.textContent);
    
    // imagem> me de sua lista de classes>contem essa classe> ("") se tiver vai dar verdadeiro
    if (Imagem.classList.contains('dashboard__item__img--rented')) {
        Imagem.classList.remove('dashboard__item__img--rented');
        Botao.classList.remove('dashboard__item__button--return');
        Botao.textContent = 'Alugar';
    } else {
        Imagem.classList.add('dashboard__item__img--rented');
        Botao.classList.add('dashboard__item__button--return');
        Botao.textContent = 'Devolver';
    }


} 