// Получаем элемент с классом 'image-container'
let imgContainer = document.querySelector('.image-container');

// Если элемент найден
if (imgContainer) {
  // Получаем все теги 'p' внутри контейнера
  let pTags = imgContainer.getElementsByTagName('p');
  let images = imgContainer.getElementsByTagName('img')
let pTagsArray = Array.from(pTags)
let imagesArray = Array.from(images)
   
  for (let tag of pTagsArray ) {
    tag.classList.add('nameProduct');
  }
 for( let img of imagesArray) {
    img.classList.add('box')
  }
}
