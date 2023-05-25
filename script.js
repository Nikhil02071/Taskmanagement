// DOM elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add a new task
function addTask() {
  const description = taskInput.value;

  if (description.trim() === '') {
    alert('Please enter a task description.');
    return;
  }

  // Create task element
  const taskElement = document.createElement('li');
  taskElement.className = 'task';
  taskElement.innerHTML = `
    <span class="description">${description}</span>
    <div class="actions">
      <button class="delete-btn">Delete</button>
    </div>
  `;

  // Add task to the list
  taskList.appendChild(taskElement);

  // Clear input
  taskInput.value = '';
}

// Delete a task
function deleteTask(event) {
  const task = event.target.closest('.task');
  task.remove();
}

// Event listeners
addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    deleteTask(event);
  }
});