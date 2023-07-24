const todoInput = document.getElementById('todo-input');
const addTaskButton = document.getElementById('add-task-btn');
const todoList = document.getElementById('todo-list');

// add a task 
const addTask = () => {
    const taskText = todoInput.value.trim();

    if(taskText !== ''){
        const taskItem = createTaskItem(taskText)
        todoList.appendChild(taskItem)
        todoInput.value = '';
    }
}

// we need to create new task items 
const createTaskItem = (taskText) => {
    const taskItem = document.createElement('li');
     taskItem.className = " todo-item";

     const checkbox = document.createElement('input');
     checkbox.type = 'checkbox';
     checkbox.classList.add('checkbox');


    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent =taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete'
    deleteBtn.classList.add('delete-btn')
    deleteBtn.addEventListener('click', deleteTask)

    taskItem.appendChild(checkbox)
    taskItem.appendChild(taskTextSpan)
    taskItem.appendChild(deleteBtn)

    return taskItem;
};

// DELETE tasks
const deleteTask = (event) => {
    const taskItem = event.target.parentNode;
    todoList.removeChild(taskItem);
}; 

//Cross out tasks
    const toggleTask = (event) => {
        const taskItem = event.target.parentNode;
        taskItem.classList.toggle('completeted');
    }
// event listeners
addTaskButton.addEventListener('click',addTask)
todoInput.addEventListener('keydown', function(event){
   if(event.key === 'Enter'){
    addTask();
   }
});

todoList.addEventListener('change', toggleTask)

// examples of tasks

const initialTasks = ['Buy Groceries', 'Pay bills', 'Walk The Dog'];

// initialTasks.forEach(task) => {
//     const taskItem =  createTaskitem(task);
//     todoList.appendChild(taskItem);
// });