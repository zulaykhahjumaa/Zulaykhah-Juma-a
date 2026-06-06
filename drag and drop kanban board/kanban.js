const addTaskBtn = document.getElementById("addTaskBtn");

let tasks =
  JSON.parse(localStorage.getItem("kanbanTasks")) || [];

let draggedTaskId = null;

function saveTasks() {
  localStorage.setItem(
    "kanbanTasks",
    JSON.stringify(tasks)
  );
}

function renderTasks() {

  document.getElementById("todo").innerHTML = "";
  document.getElementById("progress").innerHTML = "";
  document.getElementById("done").innerHTML = "";

  tasks.forEach(task => {

    const card = document.createElement("div");

    card.className =
      `task ${task.priority.toLowerCase()}`;

    card.draggable = true;

    card.dataset.id = task.id;

    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <p><strong>Due:</strong> ${task.dueDate}</p>

      <div class="actions">
        <button onclick="editTask(${task.id})">
          Edit
        </button>

        <button onclick="deleteTask(${task.id})">
          Delete
        </button>
      </div>
    `;

    card.addEventListener("dragstart", () => {
      draggedTaskId = task.id;
      card.classList.add("dragging");
    });

    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
    });

    document
      .getElementById(task.status)
      .appendChild(card);

  });
}

addTaskBtn.addEventListener("click", () => {

  const title =
    document.getElementById("title").value;

  const description =
    document.getElementById("description").value;

  const priority =
    document.getElementById("priority").value;

  const dueDate =
    document.getElementById("dueDate").value;

  if (!title) {
    alert("Enter task title");
    return;
  }

  const task = {
    id: Date.now(),
    title,
    description,
    priority,
    dueDate,
    status: "todo"
  };

  tasks.push(task);

  saveTasks();
  renderTasks();

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("dueDate").value = "";
});

function deleteTask(id) {

  tasks =
    tasks.filter(task => task.id !== id);

  saveTasks();
  renderTasks();
}

function editTask(id) {

  const task =
    tasks.find(task => task.id === id);

  const newTitle =
    prompt("Edit title", task.title);

  if (newTitle === null) return;

  const newDescription =
    prompt(
      "Edit description",
      task.description
    );

  task.title = newTitle;
  task.description = newDescription;

  saveTasks();
  renderTasks();
}

document
  .querySelectorAll(".task-list")
  .forEach(column => {

    column.addEventListener("dragover", e => {
      e.preventDefault();
      column.classList.add("drag-over");
    });

    column.addEventListener("dragleave", () => {
      column.classList.remove("drag-over");
    });

    column.addEventListener("drop", () => {

      const task =
        tasks.find(
          task => task.id === draggedTaskId
        );

      task.status = column.id;

      saveTasks();
      renderTasks();

      column.classList.remove("drag-over");
    });

  });

renderTasks();