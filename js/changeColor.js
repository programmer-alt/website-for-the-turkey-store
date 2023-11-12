var listItems = document.querySelectorAll(".what_s_in_the_store li");
// Получаем все элементы <li> с классом "what_s_in_the_store" и сохраняем их в переменную listItems
var index = 0;
// Инициализируем переменную index со значением 0
var previousItem = null;
// Инициализируем переменную previousItem как HTMLLIElement или null
function changeColor() {
    if (index < listItems.length) { // Проверяем, что значение index меньше длины массива listItems
        previousItem = listItems[index];
        listItems[index].style.color = 'purple'; // Устанавливаем текущему элементу зеленый цвет
        previousItem.style.textDecoration = 'underline #00FF00';
        previousItem.style.width = 'fit-content';
        index++; // Увеличиваем значение index на 1
        setTimeout(function () {
            if (previousItem) {
                previousItem.style.transition = 'color 2s';
                previousItem.style.textDecoration = 'none';
                previousItem.style.color = ''; // Возвращаем предыдущему элементу исходный цвет
            }
            changeColor(); // Вызываем функцию changeColor для следующего элемента
            if (index === listItems.length) {
                index = 0; // Если index равен длине массива listItems, сбрасываем его значение на 0
            }
        }, 2000);
    }
}
changeColor(); // Вызываем функцию changeColor для запуска изменения цвета элементов
