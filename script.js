const showButton = document.getElementById("addTask");
const favDialog = document.getElementById("favDialog");
const confirmBtn = favDialog.querySelector("#confirmBtn");
const cancelBtn = favDialog.querySelector("#cancelBtn");
const form = document.getElementById("form");
const tasks = [];
const uncompletedTask = document.querySelector(".uncompletedTasks"); // Select the container for displaying tasks
const completedTask = document.querySelector(".completedTasks"); // Select the container for displaying tasks
markAsCompletedBtn = document.querySelector("#markascom");

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

const newButton = document.createElement("button");
newButton.textContent = "Mark as completed";
newButton.classList.add("markascom");
newDiv.appendChild(newButton);

const newButton2 = document.createElement("button");
newButton2.textContent = "Edit"; 
newButton2.classList.add("edit");
newDiv.appendChild(newButton2);

const newButton3 = document.createElement("button");
newButton3.textContent = "Delete"; 
newButton3.classList.add("delete");
newDiv.appendChild(newButton3);

}

function mapTasks(tasks) {
  const tasksNew = tasks.map((task, index) => {
    return {
      id: index + 1,
      name: task,
    };
  });
}

confirmBtn.addEventListener("click", () => {

 form.reset();
  favDialog.close();
});  


form.addEventListener("submit", (event) =>{

  
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
  console.log(task);

  display(task);

  tasks.push(task);
  saveTask(tasks);

  mapTasks(tasks);
  // console.log(tasksNew);

});


 



function deleteTask(taskId) {
  const deleteTasks = tasks.filter(task => task.id !== taskId);
  saveTask(deleteTasks);
}

cancelBtn.addEventListener("click", () => {
  form.reset();
  favDialog.close();
});

// markAsCompletedBtn.addEventListener("click", () => {

// tasks[id].status=true;
// completedTask.appendChild(newDiv[id]);

// });
