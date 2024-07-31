document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('new-task');
    const deadlineInput = document.getElementById('task-deadline');
    const prioritySelect = document.getElementById('task-priority');
    const labelInput = document.getElementById('task-label');
    const taskList = document.getElementById('todo-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value, deadlineInput.value, prioritySelect.value, labelInput.value);
        taskInput.value = '';
        deadlineInput.value = '';
        prioritySelect.value = '';
        labelInput.value = '';
    });

    function addTask(task, deadline, priority, label) {
        if (task.trim() === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="task-content">${task}</span>
            <span class="task-deadline">${deadline}</span>
            <span class="task-priority">${priority}</span>
            <span class="task-label">${label}</span>
            <div>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;

        taskList.appendChild(li);

        li.querySelector('.edit').addEventListener('click', () => editTask(li));
        li.querySelector('.delete').addEventListener('click', () => deleteTask(li));
        li.addEventListener('click', () => toggleComplete(li));
    }

    function toggleComplete(li) {
        li.classList.toggle('completed');
    }

    function editTask(li) {
        const spanContent = li.querySelector('.task-content');
        const newTask = prompt('Edit Task', spanContent.textContent);
        if (newTask !== null && newTask.trim() !== '') {
            spanContent.textContent = newTask;
        }
        // Add similar edit functionality for deadline, priority, and label
        const newDeadline = prompt('Edit Deadline', li.querySelector('.task-deadline').textContent);
        const newPriority = prompt('Edit Priority', li.querySelector('.task-priority').textContent);
        const newLabel = prompt('Edit Label', li.querySelector('.task-label').textContent);
        
        if (newDeadline !== null && newDeadline.trim() !== '') {
            li.querySelector('.task-deadline').textContent = newDeadline;
        }
        if (newPriority !== null && newPriority.trim() !== '') {
            li.querySelector('.task-priority').textContent = newPriority;
        }
        if (newLabel !== null && newLabel.trim() !== '') {
            li.querySelector('.task-label').textContent = newLabel;
        }
    }

    function deleteTask(li) {
        li.remove();
    }
});
