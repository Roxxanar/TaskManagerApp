const showButton = document.getElementById("addTask");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const cancelBtn = favDialog.querySelector("#cancelBtn");
const form = document.getElementById("form");
const tasks = [];
const uncompletedTask = document.querySelector(".uncompletedTasks"); // Select the container for displaying tasks

showButton.addEventListener("click", () => {
  favDialog.showModal();
});

function saveTask(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTask() {
  return JSON.parse(localStorage.getItem("tasks"));
}

function display(task) {
  const newDiv = document.createElement("div");
  uncompletedTask.appendChild(newDiv);

  newDiv.innerHTML = ` 
  <p><strong>Title:</strong> ${task.title} </p>
  <p><strong>Description:</strong> ${task.description} </p>
  <p><strong>Assignee:</strong> ${task.assignee} </p>
`;
}

confirmBtn.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.querySelector('input[name="title"]').value;
  const description = document.querySelector(
    'textarea[name="description"]'
  ).value;
  const assignee = document.querySelector('input[name="assignee"]').value;
  const status = false;

  console.log("Title:", title);
  console.log("Description:", description);
  console.log("Assignee:", assignee);

  const task = { title, description, assignee, status };

  display(task);

  tasks.push(task);
  saveTask(tasks);

  form.reset();
});

cancelBtn.addEventListener("click", () => {
  form.reset();
  favDialog.close();
});
