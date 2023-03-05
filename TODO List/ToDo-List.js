let getButton = document.getElementById("button-addon2");
getButton.addEventListener("click", addTodo);
let parentList = document.getElementById("parentList");
function addTodo(e) {
  if (parentList.children[0].className == "emptyMsg") {
    parentList.children[0].remove();
  }
  let currentBtn = e.currentTarget;
  let getInput = currentBtn.previousElementSibling.value;

  let newLi = document.createElement("li");
  newLi.classList.add("list-group-item", "d-flex", "justify-content-between");
  newLi.innerHTML = `<h4  class="flex-grow-1">${getInput}</h4>
                    <button type="button" class="btn btn-info mx-2" onclick="edit(this)">Edit</button>
                    <button type="button" class="btn btn-danger" onclick="remove(this)">Remove</button>`;
  parentList.appendChild(newLi);
}
function remove(currElement) {
  currElement.parentElement.remove();
  if (parentList.children.length == 0) {
    let emptyMsg = document.createElement("h3");
    emptyMsg.classList.add("emptyMsg");
    emptyMsg.style.textAlign = "center";
    emptyMsg.style.color = "white";
    emptyMsg.innerText = "No Work Available";
    parentList.appendChild(emptyMsg);
  }
}
function edit(currElement) {
  if (currElement.textContent == "Save") {
    currElement.textContent = "Edit";
    let currWork = currElement.previousElementSibling.value;
    let currHeading = document.createElement("h4");
    currHeading.className = "flex-grow-1";
    currHeading.textContent = currWork;
    currElement.parentElement.replaceChild(
      currHeading,
      currElement.previousElementSibling
    );
  } else {
    currElement.textContent = "Save";
    let currWork = currElement.previousElementSibling.textContent;
    let currInput = document.createElement("input");
    currInput.type = "text";
    currInput.className = "form-control";
    currInput.placeholder = "Enter Your Work";
    currInput.value = currWork;
    currElement.parentElement.replaceChild(
      currInput,
      currElement.previousElementSibling
    );
  }
}
