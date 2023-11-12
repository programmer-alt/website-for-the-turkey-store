var sentence = document.getElementById('sentence');
if (sentence) {
    var text_1 = sentence.innerHTML;
    sentence.innerText = '';
    var delay = 0;
    for (var i = 0; i < text_1.length; i++) {
        var span = document.createElement('span');
        span.innerText = text_1[i];
        span.style.animationDelay = "".concat(delay, "s");
        delay += 0.5;
        sentence.appendChild(span);
    }
}
