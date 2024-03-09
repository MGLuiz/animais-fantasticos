export default function initAccordion(){
    const accordionTitles = document.querySelectorAll('.accordion');
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionTitles.forEach((title, index) => {
        title.addEventListener('click', () => {
            title.classList.toggle('active');
            accordionItems[index].classList.toggle('active');
        })
    })
}