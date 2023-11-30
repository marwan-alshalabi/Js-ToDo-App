
const todoInput = document.querySelector('.todo-input')
const todoBtn = document.querySelector('.todo-btn')
const todoResult = document.querySelector('.todo-result')

function addTodo(e){
    e.preventDefault();
   
   
    // create li
    const todoLi = document.createElement('li')
    todoLi.classList.add('my-2','p-3','border','rounded','list-unstyled')

    // create h4
    const todoTitle = document.createElement('h4')
    todoTitle.innerText = todoInput.value
    todoInput.value = ''
    todoTitle.classList.add('d-inline-block')
    todoLi.appendChild(todoTitle)

    // creat div 
    const todoAction = document.createElement('div')
    todoAction.classList.add('d-inline-block','float-end')

    // add buttons
    const btnComplete = document.createElement('button')
    btnComplete.classList.add('btn','btn-primary')
    btnComplete.innerHTML = '<i class="fa-solid fa-check"></i>'
    todoAction.appendChild(btnComplete)

    const btnDelete = document.createElement('button')
    btnDelete.classList.add('btn','btn-danger')
    btnDelete.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
    todoAction.appendChild(btnDelete)

    todoLi.appendChild(todoAction)

    todoResult.appendChild(todoLi)

  
}


function todoToggle(e){
    	const item = e.target

        if (item.classList[1] == 'fa-check'){
            const todo_Li = item.parentElement.parentElement.parentElement
            todo_Li.childNodes[0].classList.toggle('completed')
        }    

        else if (item.classList[1] == 'fa-trash-can') {
            item.parentElement.parentElement.parentElement.classList.add('deleted')
        }
}


todoBtn.addEventListener('click',addTodo)
todoResult.addEventListener('click',todoToggle)