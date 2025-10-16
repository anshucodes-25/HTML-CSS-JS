const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const taskList = document.getElementById("taskList");

// Add Task

addBtn.addEventListener("click", ()=>{
    const inputTask = taskInput.value.trim();

    if(inputTask === ""){
        alert("Enter the task");
    }

    else{
    let li = document.createElement("li");

    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")
    
    

    const span = document.createElement("span");
    span.textContent = inputTask
    

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete"
    delBtn.classList.add("delete")
    

    
   
    li.append(checkbox,span,delBtn);
    taskList.append(li);

    taskInput.value = ""

    checkbox.addEventListener("click",()=>{
       if(checkbox.checked){
        span.style.textDecoration = "line-through"
        span.style.color = "gray"
       }
       else{
        span.style.textDecoration = "none"
        span.style.color = "black"
       }

  })

 // Delete Task


    delBtn.addEventListener("click",()=>{
        li.remove()
        
    })
}

})


// Clear All

clearBtn.addEventListener("click",()=>[
    taskList.innerText = " "
    
])






