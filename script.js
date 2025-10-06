document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Global array to store tasks
    let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    // Load saved tasks when page loads
    loadTasks();

    function loadTasks() {
        tasks.forEach(taskText => addTask(taskText, false));
    }

    function addTask(taskText, save = true) {
        // If no taskText is passed (user typed one in)
        if (!taskText) {
            taskText = taskInput.value.trim();
            if (taskText === "") {
                alert("Please enter a task");
                return;
            }
        }

        // Create list item
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create remove button
        const btn = document.createElement("button");
        btn.textContent = "Remove";
        btn.classList.add("remove-btn");

        // Remove task from DOM and storage
        btn.addEventListener("click", () => {
            li.remove();
            tasks = tasks.filter(t => t !== taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });

        // Append button and list item
        li.appendChild(btn);
        taskList.appendChild(li);

        // Save to local storage if new
        if (save) {
            tasks.push(taskText);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }

        // Clear input field
        taskInput.value = "";
    }

    // Add task on Enter key press
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    // Add task on button click
    addButton.addEventListener("click", addTask);
});
