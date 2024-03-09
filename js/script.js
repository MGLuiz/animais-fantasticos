function animDesc_tabNav(){
    const aniImages = document.querySelectorAll('.animais-images li');
    const aniDescItens = document.querySelectorAll('.animais-desc-item');
    console.log(aniImages);
    console.log(aniDescItens);
    
    aniImages.forEach((img, index) => {
        aniImages[index].addEventListener('click', () => {
            aniDescItens.forEach((item) => {
                item.classList.remove('active');
            });
            aniDescItens[index].classList.add('active');
        });
    });
}
animDesc_tabNav();


function smoothScroll(scroll){
    function getDistanceFromTheTop(element) {
        const id = element.getAttribute('href');
        return document.querySelector(id).offsetTop;
    }
    function nativeScroll(distanceFromTheTop){
        window.scroll({
            top: distanceFromTheTop,
            behavior:'smooth'
        })
    }

    function scrollToSection(evt){
        evt.preventDefault();
        const distanceFromTheTop = getDistanceFromTheTop(evt.target);
        nativeScroll(distanceFromTheTop);
    }

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}

smoothScroll();