
const allItems = document.querySelector('.allItems');
const Loader = document.querySelector('.myLoader');
const submitButton = document.querySelector('#submitButton');
const inputItem = document.querySelector('#item-input');
const ulItems = document.createElement('ul');
ulItems.style.listStyle = "none";

let isLoading = true;
let myList = [];

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then((data) => {
        // console.log(data);
        isLoading = false;
        myList = [...data];
        removeLoader();
        render();
    });

render();

function render() {
    // Remove Existing Content
    ulItems.innerHTML = ' ' ;
    
    if (isLoading) {
        showLoader();
    } else {
        showData();
    }
}

function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(2, 10);
}

submitButton.addEventListener('click', handleAddItem);

function handleAddItem() {
    const newItem = {
        userId: revisedRandId(),
        id: revisedRandId(),
        title: inputItem.value,
        completed: false
    }

    ulItems.appendChild(createLiItems(newItem.id , newItem.title , newItem.completed));
    myList.push(newItem);
}

function removeLoader() {
    Loader.innerHTML = " ";
}

function showLoader() {
    const loaderItems = document.createElement('p');
    loaderItems.textContent = "Loading....";

    Loader.appendChild(loaderItems);
}

function showData() {

    myList.forEach((data) => {
        // console.log(data.title)
        const liItems = createLiItems(data.id , data.title, data.completed);

        ulItems.appendChild(liItems);
    });

    allItems.appendChild(ulItems);
}

function createLiItems(id , title , completed) {
    const liItems = document.createElement('li');
    liItems.setAttribute("id" , id);
    liItems.style = 'padding: 20px; margin: 20px 10px; color:white; font-size:30px;';
    liItems.style.backgroundColor = (completed) ? "green" : "red";
    const pItems = document.createElement('p');
    pItems.textContent = 'Title :- ' + title;
    const itemsButton = crateButtonElement(id , completed);
    const deleteButtons = createDeleteButton();

    liItems.appendChild(pItems);
    liItems.appendChild(itemsButton);
    liItems.appendChild(deleteButtons);
    return liItems;
}

function crateButtonElement(id , completed){
    const itemsButton = document.createElement('button');
    itemsButton.textContent = (completed) ? "Mark as Uncomplete" : "Mark as Completed" ;
    itemsButton.addEventListener('click' , onMarkClick);

    return itemsButton; 
}

function createDeleteButton(){
    const itemsButton = document.createElement('button');
    itemsButton.style = "margin-left: 10px;";
    itemsButton.textContent = "Delete" ;
    itemsButton.addEventListener('click' , onClickDelete);

    return itemsButton; 
}

function onClickDelete(event){
    // console.log(event.srcElement.parentNode.id);
    const listId = event.srcElement.parentNode.id;
    myList = myList.filter((list) => {
       return list.id != listId ;
    });

    render();

}

function onMarkClick(event){
    // console.log("Button Clicked");
    // console.log(event);
    // console.log(event.srcElement.parentNode.parentNode);
    // console.log(event.srcElement.parentNode.id);

    const listId = event.srcElement.parentNode.id;
    toggleBeahvior(listId);
}

function toggleBeahvior(listId){

    const existingItem = document.getElementById(listId);

    myList.forEach((list) => {
        if(list.id == listId){
            list.completed = !list.completed;
            const newItem = createLiItems(list.id , list.title , list.completed );
            ulItems.replaceChild(newItem , existingItem);
        }
    });

    // render();
}







 