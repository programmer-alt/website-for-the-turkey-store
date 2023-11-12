var marquee = document.getElementById('marquee');
function startMarquee() {
    marquee.textContent = 'Нашу продукцию оцени';
}
function beginMarquee() {
    marquee.textContent = 'Оцени нашу продукцию';
}
marquee.addEventListener('mouseenter', startMarquee);
marquee.addEventListener('mouseleave', beginMarquee);
