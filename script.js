const classNames = {
  TODO_ITEM: "todo-container",
  TODO_CHECKBOX: "todo-checkbox",
  TODO_TEXT: "todo-text",
  TODO_DELETE: "todo-delete"
};

const list = document.getElementById("todo-list");
const itemCountSpan = document.getElementById("item-count");
const uncheckedCountSpan = document.getElementById("unchecked-count");
const noItems = document.getElementById("no-items");
let count = 0;

function newTodo() {
  count++;
  list.append(prepareToElement(count));
  itemCountSpan.innerText = list.childElementCount - 1;
  noItems.style.display = "none";
}

function prepareToElement(count) {
  /* *************************************
  // return an element with this structure
  <tr class="item_X">
    <td>New item X</td>
    <td>
      <button class="button is-danger" data-item="X">
        Remove item
      </button>
    </td>
  </tr>
  ************************************* */
  let elementItem = document.createElement("tr");
  let elementFirstTdItem = document.createElement("td");
  let elementSecondTdItem = document.createElement("td");
  let buttonItem = document.createElement("button");
  elementItem.className = `item_${count}`;
  elementFirstTdItem.innerText = `New item ${count}`;
  elementSecondTdItem.className = "has-text-centered";
  buttonItem.innerText = "Remove item";
  buttonItem.className = "button is-danger";
  buttonItem.setAttribute("data-item", count);
  buttonItem.onclick = function(elementItem) {
    let itemAttrToRemove = this.getAttribute("data-item");
    let itemToRemove = document.getElementsByClassName(
      `item_${itemAttrToRemove}`
    );
    list.removeChild(itemToRemove[0]);
    itemCountSpan.innerText = list.childElementCount - 1;
    if (list.childElementCount - 1 === 0) {
      noItems.style.display = "contents";
    }
  };
  elementSecondTdItem.appendChild(buttonItem);
  elementItem.appendChild(elementFirstTdItem);
  elementItem.appendChild(elementSecondTdItem);
  return elementItem;
}
