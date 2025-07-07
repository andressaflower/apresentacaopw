let slideAtual = 0;
const slides = document.querySelectorAll('.slide');
const pontos = document.querySelectorAll('.ponto');

function mostrarSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.remove('ativo');
        pontos[i].classList.remove('ativo');
        if (i === n) {
            slide.classList.add('ativo');
            pontos[i].classList.add('ativo');
        }
    });
    slideAtual = n;
}

function mudarSlide(direcao) {
    let novoSlide = slideAtual + direcao;
    if (novoSlide < 0) novoSlide = slides.length - 1;
    if (novoSlide >= slides.length) novoSlide = 0;
    mostrarSlide(novoSlide);
}

function irParaSlide(n) {
    mostrarSlide(n);
}
