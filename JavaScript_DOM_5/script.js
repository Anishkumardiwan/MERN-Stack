
const allItems = document.querySelector('.allItems');
const Loader = document.querySelector('.loaderItem');
const inputItems = document.querySelector('.input-bar');
const submitButton = document.querySelector('.myButton');
let isLoading = true;
let allList = [];

const ulItems = document.createElement('ul');
ulItems.style.listStyle = "none";

fetch('https://jsonplaceholder.typicode.com/todos/')
.then(response => response.json())
.then((data) => {
    // console.log(data);
    isLoading = false ;
    allList = [...data];
    render();
    deleteLoader();
});

render()

function render(){
    // Remove Existing Content
    ulItems.innerHTML = ' ' ;

    if(isLoading){
        showLoader();
    } else{
        showData();
    }
}

function revisedRandId() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substring(2, 10);
}

submitButton.addEventListener('click' , handleAddItem);

function handleAddItem(event){
    // console.log("hello Anish");
    const newData = {
        userId : revisedRandId() ,
        id: revisedRandId(),
        title: inputItems.value,
        completed: false
    }

    ulItems.appendChild(createListItems(newData.id , newData.title , newData.completed));
    allList.push(newData);
    // console.log(allList);
}

function showLoader(){
    Loader.innerHTML = `<p> Loading....... </p>`
}

function deleteLoader(){
    Loader.innerHTML = ' ' ;
}

function showData() {

    allList.forEach((data) => {
        // console.log(data.title)
        const liItems = createListItems(data.id , data.title, data.completed);

        ulItems.appendChild(liItems);
    });

    allItems.appendChild(ulItems);
}

function createListItems(id , title , completed){
    const liItems = document.createElement('li');
    liItems.setAttribute("id" , id);
    const paraItems = document.createElement('p');
    liItems.style = 'padding: 20px; margin: 20px 10px; color:white; font-size:30px;';
    liItems.style.backgroundColor = (completed) ? "green" : "red";
    paraItems.textContent = "Title:- " + title ;
    const completedButtons = createCompletedButtons(completed);
    const deleteButtons = createDeletedButtons();

    liItems.appendChild(paraItems);
    liItems.appendChild(completedButtons);
    liItems.appendChild(deleteButtons);
    return liItems ;
}

function createCompletedButtons(completed){
    const buttonItems = document.createElement('button');
    buttonItems.textContent = (completed) ? "Mark as Uncomplete" : "Mark as Completed" ;
    buttonItems.addEventListener('click' , onClickCompleted);

    return buttonItems ;
}

function onClickCompleted(event){
    // console.log('Completed Button Clicked');
    // console.log(event.srcElement.parentNode.id);
    const listId = event.srcElement.parentNode.id;
    toggleBehavior(listId);
}

function toggleBehavior(listId){

    const existingItem = document.getElementById(listId);

    allList.forEach(list => {
        if(list.id == listId){
            list.completed = !list.completed;
            const newItem = createListItems(list.id , list.title , list.completed);
            ulItems.replaceChild(newItem , existingItem);
        }
    });

    // render();
}

function createDeletedButtons(){
    const buttonItems = document.createElement('button');
    buttonItems.textContent = "Delete";
    buttonItems.style = "margin-left: 20px;";
    buttonItems.addEventListener('click' , onClickDelete);

    return buttonItems ;
}

function onClickDelete(event){
    // console.log("Delete Button Click");
    const listId = event.srcElement.parentNode.id;
    allList = allList.filter(list => {
        return list.id != listId ;
    });

    render();
}




