
const allItems = document.querySelector('.allItems');
const loaderItems = document.querySelector('.myLoader');
const submitButton = document.querySelector('#submitButton');
const inputField = document.querySelector('#item-input');
let isLoader = true;
let myList = [];

const ulItems = document.createElement('ul');
ulItems.style.listStyle = "none";

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then((data) => {
        isLoader = false;
        console.log(data);
        myList = [...data];
        render();
    });

//Default Call..... 
render();

function render() {
    if (isLoader) {
        showLoader();
    } else {
        showData();
    }
}

function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}

submitButton.addEventListener('click', handleAddItem);

function handleAddItem() {
    // console.log('button click');
    // console.log(inputField.value);

    // Create a New Todo Item
    const newItem = {
        userId: revisedRandId(),
        id: revisedRandId(),
        title: inputField.value,
        completed: false
    }

    ulItems.appendChild(createListItem(newItem.title , newItem.completed));
    myList.push(newItem);
}

function createLoader() {
    let pItems = document.createElement('p');
    pItems.textContent = "Loading......";

    return pItems;
}

function showLoader() {
    let createOwnLoader = createLoader();

    loaderItems.appendChild(createOwnLoader);
}

function showData() {

    myList.forEach((data) => {
        const newListItems = createListItem(data.title, data.completed);

        ulItems.appendChild(newListItems);
    });

    allItems.appendChild(ulItems);
    removeLoader();
}

function createListItem(title, completed) {
    const liItems = document.createElement('li');
    liItems.style = 'padding:20px; margin:10px 5px; color:white; font-size:30px;';
    liItems.style.backgroundColor = completed ? "green" : "red";
    liItems.textContent = "Title :- " + title;

    return liItems;
}

function removeLoader() {
    loaderItems.innerHTML = ' ';
}




















