const options = {
    rootMargin: '0px',
    threshold: [0,0.5]
}
const result = function (entry) {
    if (entry.isIntersecting) {
        console.log('текст в поле внимания')
        text.classList.add('animate');
    } else { console.log('текст вне поля внимания')
    text.classList.remove('animate');}
}
const callback = function(entries:IntersectionObserverEntry[], ob:IntersectionObserver) {
    entries.forEach(result)
       
}
const observer = new IntersectionObserver( callback, options);
const text = document.querySelector ('.product_advertising');
observer.observe(text)