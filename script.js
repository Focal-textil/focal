
function Searchstart(){
    let valor_busca = document.querySelector(".search").value;
    console.log(valor_busca);
    valor_busca.value = ""
}

const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;
const imageWidth = images[0].clientWidth;

// Mover o carrossel para a imagem seguinte
function showNextImage() {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0; // Reiniciar no começo
    }
    carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

// Mover o carrossel para a imagem anterior
function showPrevImage() {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1; // Voltar para a última imagem
    }
    carousel.style.transform = `translateX(${-index * imageWidth}px)`;
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);
