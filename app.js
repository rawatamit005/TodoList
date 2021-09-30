//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//Functions
function addTodo(event){
    //Prevent from form submitting
    event.preventDefault();
    

    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");    

    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText= todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    //CHECK MARK BUTTON
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    //CHECK trash BUTTON
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    //APPEND TO LIST
    todoList.appendChild(todoDiv);

    //Clear Todo INPUT Value    

    todoInput.value = "";
    

}

function deleteCheck(event){
    const item = event.target;
    //Delete TODO
    console.log(item.classList[0]);
    if(item.classList[0] === "trash-btn"){
        const todo =  item.parentElement;
        //add animation before delete todo
        todo.classList.add("fall");
        todo.addEventListener('transitionend',function(){
            todo.remove();
        });
        
    }


    // Check Mark
    if(item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
    
}

// filter the todo
function filterTodo(e){
    const todos = todoList.childNodes;
    console.log(todos);
}

