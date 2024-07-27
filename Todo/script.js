const text = document.getElementById("newItem");
const addBtn = document.getElementById("addBtn");
const tasks = document.querySelector(".tasks");

const todo = [];

addBtn.addEventListener("click", () => {
  console.log(text.value);
  todo.push(text.value);

  const taskHTML = todo
    .map((item) => {
      return `<div class="task">
              <p>${item}</p>
              <button class="deleteBtn">
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </div>`;
    })
    .join("");

  tasks.innerHTML = taskHTML;
  text.value = "";
});

tasks.addEventListener("click", () => {
  console.log(tasks.textContent);
});
