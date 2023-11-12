// Получаем элемент с классом 'image-container'
var imgContainer = document.querySelector('.image-container');
// Если элемент найден
if (imgContainer) {
    // Получаем все теги 'p' внутри контейнера
    var pTags = imgContainer.getElementsByTagName('p');
    var images = imgContainer.getElementsByTagName('img');
    var pTagsArray = Array.from(pTags);
    var imagesArray = Array.from(images);
    for (var _i = 0, pTagsArray_1 = pTagsArray; _i < pTagsArray_1.length; _i++) {
        var tag = pTagsArray_1[_i];
        tag.classList.add('nameProduct');
    }
    for (var _a = 0, imagesArray_1 = imagesArray; _a < imagesArray_1.length; _a++) {
        var img = imagesArray_1[_a];
        img.classList.add('box');
    }
}
