
let allItems = document.querySelector('.allItems');
let loader = document.querySelector('.myLoader');
let isLoader = true;
let myList = [];

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then((data) => {
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

function showLoader(){
    const loaderItem = document.createElement('p');
    loaderItem.textContent = 'Loading......';

    loader.appendChild(loaderItem);
}

function showData(){
    myList.forEach((data) => {
        const ulItems = document.createElement('ul');
        const liItems = document.createElement('li');
        liItems.textContent = data.title;

        ulItems.appendChild(liItems);
        allItems.appendChild(ulItems);
    });   

    removeLoader();
}

function removeLoader(){
    loader.innerHTML = ' ' ;
}







