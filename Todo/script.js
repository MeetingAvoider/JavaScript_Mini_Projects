const text = document.getElementById("newItem");
const addBtn = document.getElementById("addBtn");
const tasks = document.querySelector(".tasks");

addBtn.addEventListener("click", () => {
  if (text.value === "") {
    alert("Add any task pleae");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `<div class="task">
              <p>${text.value}</p>
              <button class="deleteBtn">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>`;
  tasks.appendChild(li);
});
const task = document.getElementsByClassName("task");
Array.from(tasks).forEach((task) => {
  task.addEventListener("click", () => {
    console.log(task.innerHTML);
  });
});
