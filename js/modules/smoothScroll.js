export default function initSmoothScroll(){
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