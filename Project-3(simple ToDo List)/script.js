const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#add");
const delBtn = document.querySelector("#delete");
const showBtn = document.querySelector("#show");
const clearBtn = document.querySelector("#clear");
const result = document.querySelector("#result");

let tasks = [];

addBtn.addEventListener("click", ()=>{
    const task = taskInput.value.trim();

    if(task){
        tasks.push(task)
        result.textContent = `${task} added to list`;
        taskInput.value = " "
    }else{
        result.textContent = `Please enter the Task:`
    }

})

delBtn.addEventListener("click",()=>{
    if(tasks.length === 0){
        result.textContent = `Please enter the valid task:`
    }else{
    const remove = tasks.pop();
    result.textContent = `${remove}  delete from the list`
    }

})

showBtn.addEventListener("click", ()=>{
    if(tasks.length === 0){
        result.textContent = `No task added in the list:`
    }
    else{
       let list = " "

       for(let i = 0; i<tasks.length; i++){
         list += `${i + 1}.${tasks[i]}<br>`
       }
      result.innerHTML = list
    }
})

clearBtn.addEventListener("click",()=>{
    tasks = [];
    result.textContent = `All task are Cleared:`
})
