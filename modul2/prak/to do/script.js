const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

let oldInputValue;

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;
  if (inputValue) saveTodo(inputValue); //Save Function
});

const saveTodo = (text) => {
  const todo = document.createElement("div");
  todo.classList.add("todo");

  const todoTitle = document.createElement("h3");
  todoTitle.innerText = text;
  todo.appendChild(todoTitle);

  const doneBtn = document.createElement("button");
  doneBtn.classList.add("finish-todo");
  doneBtn.innerHTML = '<i class="bx bx-check"></i>';
  todo.appendChild(doneBtn);

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-todo");
  editBtn.innerHTML = '<i class="bx bx-pencil"></i>';
  todo.appendChild(editBtn);

  const removeBtn = document.createElement("button");
  removeBtn.classList.add("remove-todo");
  removeBtn.innerHTML = '<i class="bx bxs-trash"></i>';
  todo.appendChild(removeBtn);

  todoList.appendChild(todo);
  todoInput.value = "";
  todoInput.focus();
};

document.addEventListener("click", (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest("div");
  let todoTitle;

  if (parentEl?.querySelector("h3"))
    todoTitle = parentEl.querySelector("h3").innerText;

  if (targetEl.classList.contains("finish-todo"))
    parentEl.classList.toggle("done");

  if (targetEl.classList.contains("remove-todo")) parentEl.remove();

  if (targetEl.classList.contains("edit-todo")) {
    toggleForms();
    editInput.value = todoTitle;
    // memanggil data lama
    oldInputValue = todoTitle;
  }
});
// hide elemen
const toggleForms = () => {
  editForm.classList.toggle("hide");
  todoForm.classList.toggle("hide");
  todoList.classList.toggle("hide");
};

cancelEditBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleForms();
});

// take and update
editForm.addEventListener("submit", (e) => {
  // mencegah reload halaman
  e.preventDefault();
  const editInputValue = editInput.value;
  if (editInputValue) updateTodo(editInputValue); //Update value function
  toggleForms();
});

const updateTodo = (text) => {
  const todos = document.querySelectorAll(".todo");
  // perulangan
  todos.forEach((todo) => {
    let todoTitle = todo.querySelector("h3");
    if (todoTitle.innerText === oldInputValue) todoTitle.innerText = text;
  });
};
