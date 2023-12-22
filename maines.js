document.addEventListener('DOMContentLoaded', () => {
  const takesService = new TaskService();

  // Add tasks
  taskService.addTask(new Task(1, 'Finish coding task', false));
  taskService.addTask(new Task(2, 'Prepare presentation', false));

  // Display tasks
  const appContainer = document.getElementById('app');
  const tasks = taskService.getTasks();

  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <span>${task.title}</span>
      <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="completeTask(${task.id})">
    `;
    appContainer.appendChild(taskElement);
  });

  // Function to complete a task
  window.completeTask = (taskId) => {
    taskService.completeTask(taskId);
    appContainer.innerHTML = ''; // Clear existing tasks
    // Re-render updated tasks
    tasks.forEach(task => {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span>${task.title}</span>
        <input type="checkbox" ${task.completed ? 'checked' : ''} onchange="completeTask(${task.id})">
      `;
      appContainer.appendChild(taskElement);
    });
  };
});
