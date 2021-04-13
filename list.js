let inputField = document.querySelector('#inputField');
let addToDoButton = document.querySelector('#addToDo');
let toDoContainer = document.querySelector('#toDoContainer');

addToDoButton.addEventListener('click', function(){
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
})