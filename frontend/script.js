
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

const API = "http://localhost:3000/api/tasks";

taskForm.onsubmit = async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const priority = document.getElementById("priority").value;

  await fetch(API, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ title, priority })
  });

  loadTasks();
};

async function loadTasks() {
  const res = await fetch(API);
  const tasks = await res.json();
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerText = `${task.title} (${task.priority})`;
    taskList.appendChild(li);
  });
}

loadTasks();
