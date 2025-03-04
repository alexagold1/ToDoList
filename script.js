// Init(Create) an empty array element called tasks
let tasks = []

// Add an ON CLICK event listener to the "add task button" that calls a function
document.getElementById('addTaskButton').addEventListener('click', function() { 
    addTask()
})

// Add an event listener for the "Enter" key to add a task
document.getElementById('taskInput').addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // Check if the Enter key is pressed
        addTask()
    }
})

// Function to handle adding tasks (called by both the click and Enter key events)
function addTask() {
    // Get the value of the input box and store it in a variable called taskInput
    let taskInput = document.getElementById('taskInput').value

    // Check if taskInput has value or something in it
    if (taskInput) {
        tasks.push(taskInput)

        // Clear the input field 
        document.getElementById('taskInput').value = ''

        // Call the function to update the task list display
        displayTasks()
    }
}

// Function to display tasks in the list 
function displayTasks() {
    // Select the unordered list (taskList) in the html
    let taskList = document.getElementById('taskList')

    // Clear the existing task list before updating it
    taskList.innerHTML = ''

    // Loop through each task in the array and create a list item
    tasks.forEach((task, index) => {
        // Create a new <li> element for each task
        let li = document.createElement('li')

        // Add css classes for styling
        li.classList.add(
            'list-group-item',
            'd-flex',
            'justify-content-between',
            'align-items-center'
        )

        li.innerHTML = `${task} <button class='btn btn-success btn-sm' onclick='removeTask(${index})'> √ </button>`

        // Append the new tasks to the task list
        taskList.appendChild(li)
    })

    // Update the task counter
    updateTaskCounter()
}

// Function to remove a task from the list when the check button is clicked
function removeTask(index) {
    tasks.splice(index, 1)

    displayTasks()
}

// Event listener for the "Clear all tasks" button
document.getElementById('clearTaskBtn').addEventListener('click', function() {
    // Empty the tasks array to remove all tasks
    tasks = []
    // Call the function to update the task list display
    displayTasks()
})

// Function to update the task counter
function updateTaskCounter() {
    let taskCounter = document.getElementById('taskCounter')
    taskCounter.textContent = `Tasks: ${tasks.length}`
}
