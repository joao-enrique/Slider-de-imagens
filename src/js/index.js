const imagens = document.querySelectorAll(".slide");
const botaoVoltar = document.getElementById("seta-voltar");
const botaoavancar = document.getElementById("seta-avancar");

let imagemAtual = 0;

botaoavancar.addEventListener("click", () => {
    if(imagemAtual == imagens.length - 1){
        return
    }

    imagemAtual++;
    esconderImagemAberta();
    mostrarImagens();
    mostrarouescondersetas();
})

botaoVoltar.addEventListener("click", () => {
    if(imagemAtual === 0){
        return
    }

    imagemAtual--;
    esconderImagemAberta();
    mostrarImagens();
    mostrarouescondersetas();
})

function esconderImagemAberta(){
    imagemAberta = document.querySelector(".mostrar");
    imagemAberta.classList.remove("mostrar");
}

function mostrarouescondersetas(){
    const naoeaprimieraimagem = imagemAtual !==0;

    if (naoeaprimieraimagem) {
        botaoVoltar.classList.remove("opacidade");
    } else {
        botaoVoltar.classList.add("opacidade");
    }

    const chegounaultimaimagem = imagemAtual !== 0 && imagemAtual === imagens.length - 1;
    if (chegounaultimaimagem) {
        botaoavancar.classList.add("opacidade");
    } else {
        botaoavancar.classList.remove("opacidade");
    }
}

function mostrarImagens(){
    imagens[imagemAtual].classList.add("mostrar");
}