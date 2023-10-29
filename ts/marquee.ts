const marquee = document.getElementById('marquee') as HTMLElement;
function startMarquee (){
    marquee.textContent = 'Нашу продукцию оцени'
}
function beginMarquee (){
    marquee.textContent = 'Оцени нашу продукцию'
}
marquee.addEventListener('mouseenter', startMarquee);
marquee.addEventListener('mouseleave', beginMarquee)