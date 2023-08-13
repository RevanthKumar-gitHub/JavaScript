const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery-input");
const submitBtn = document.querySelector(".submit-btn");
const clearBtn = document.querySelector(".clear-btn");
const list = document.querySelector(".items");
const container = document.querySelector(".grocery-container");

let editElement;
let editFlag = false;
let editID = "";

form.onsubmit = addItem;
clearBtn.onclick = clearItems;
window.addEventListener("DOMContentLoaded", setUpItems);

function addItem(e) {
  e.preventDefault();
  const id = new Date().getTime().toString();
  const value = grocery.value;
  if (value && !editFlag) {
    createItem(id,value);
    displayAlert("Item Added!", "alert-green");

    addtoLocalStorage(id, value);
    setToDefault();
  } else if (value && editFlag) {
    editElement.innerHTML = grocery.value;
    displayAlert("Item Edited!", "alert-green");
    editLocalStorage(editID, value);
    setToDefault();
  } else {
    displayAlert("Item name cannot be empty!", "alert-err");
  }
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(action);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(action);
  }, 1000);
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  console.log(id);
  list.removeChild(element);
  if (list.children.length == 0) {
    container.classList.remove("show-container");
  }
  displayAlert("Items removed!", "alert-err");
  setToDefault();
  removeItemLocalStorage(id);
}

function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  submitBtn.textContent = "Edit";
  editFlag = true;
  editID = element.dataset.id;
}

function clearItems() {
  const items = document.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("Items Deleted!", "alert-err");

  setToDefault();
  localStorage.removeItem("list");
}

function setToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "Submit";
}

function editLocalStorage(id, value) {
  let items = getLocalStorage();

  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });

  localStorage.setItem("list", JSON.stringify(items));
}

function addtoLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}

function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}

function removeItemLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => {
    if (item.id !== id) return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}

function setUpItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach((item) => {
      createItem(item.id, item.value);
    });
  }
}

function createItem(id, value) {
  const element = document.createElement("article");
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.classList.add("item");
  element.innerHTML = `<p class="name">${value}</p>
    <div class="btn-container">
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
        <button class="delete-btn"><i class="fas fa-trash"></i></button>
    </div>`;

  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.onclick = deleteItem;

  const editBtn = element.querySelector(".edit-btn");
  editBtn.onclick = editItem;

  list.appendChild(element);
  container.classList.add("show-container");
}

