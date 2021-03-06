let inputField = document.querySelector('#inputField');
let addToDoButton = document.querySelector('#addToDo');
let toDoContainer = document.querySelector('#toDoContainer');

addToDoButton.addEventListener('click', function () {
    const paragraph = document.createElement('li');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function () {
        paragraph.style.textDecoration = 'line-through';
    })
    paragraph.addEventListener('dblclick', function () {
        toDoContainer.removeChild(paragraph);
    })
})