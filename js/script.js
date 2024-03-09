import initSmoothScroll from "./modules/smoothScroll.js";
import initAccordion from "./modules/accordion.js";

function animDesc_tabNav(){
    const aniImages = document.querySelectorAll('.animais-images li');
    const aniDescItens = document.querySelectorAll('.animais-desc-item');
    
    aniImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            aniDescItens.forEach((item) => {
                item.classList.remove('active');
            });
            aniDescItens[index].classList.add('active');
        });
    });
}
animDesc_tabNav();

initSmoothScroll();
initAccordion();

function intiScrollDownAnimation(){
    const btnScrollDown = document.querySelector('.scroll-down-btn');
    btnScrollDown.addEventListener('click', () => {
        smoothScroll.scrollDown();
    });
}
