var options = {
    rootMargin: '0px',
    threshold: [0, 0.5]
};
var result = function (entry) {
    if (entry.isIntersecting) {
        console.log('текст в поле внимания');
        text.classList.add('animate');
    }
    else {
        console.log('текст вне поля внимания');
        text.classList.remove('animate');
    }
};
var callback = function (entries, ob) {
    entries.forEach(result);
};
var observer = new IntersectionObserver(callback, options);
var text = document.querySelector('.product_advertising');
observer.observe(text);
