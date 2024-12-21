document.addEventListener("DOMContentLoaded", function(){
    const taskInput = document.getElementById("task")
    const addTaskButton = document.getElementById("addTask")
    const taskList = document.getElementById("taskList")

addTaskButton.addEventListener("click", function(){
    
    const taskText = taskInput.value;
    const taskItem = document.createElement("li")

    if(taskText === ""){
        alert("You Must Write Something!");
    }
    else{
        //giving the iner htl value inside the html li

    taskItem.innerHTML = `${taskText} <button id="delete-btn">Delete</button>`

    //appending or adding child inside the ul or parent
    taskList.appendChild(taskItem)

    }

    taskInput.value = "";
    //delete functionality

    const deleteButton = taskItem.querySelector("#delete-btn")
            deleteButton.addEventListener("click", function(){
              taskList.removeChild(taskItem)
    })
})
})