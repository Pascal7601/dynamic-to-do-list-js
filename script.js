document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        // obtain the value from input and remove extra spaces
        let taskText = taskInput.value.trim();
        if(taskText === "") {
            alert("enter a task")
        }
        // create an li element to be displayed under the button
        let li = document.createElement("li");
        li.append(taskText);
        // crteate a btn to remove tasks
        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");
        li.append(btn);
        // remove a task when the remove btn is clicked
        btn.addEventListener("click", () => {
            li.remove();
        })

        taskList.appendChild(li);
        taskInput.value = "";
        
    }
    taskInput.addEventListener("keypress", (e) => {
        // check when user clicks enter key to add tasts
        if(e.key == "Enter") {
            addTask();
        }
    })
    addButton.addEventListener("click", addTask);
})