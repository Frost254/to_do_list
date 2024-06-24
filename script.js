function toDO() {
    let toDoListArray = [];
    const form = document.querySelector(".form");
    const input = document.querySelector(".form_input");
    const ul = document.querySelector(".toDoList");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let itemId = String(Date.now());
        let toDoItem = input.value;

        addItemToDOM(itemId, toDoItem)
        addItemToArray(itemId, toDoItem)

        input.value = "";
    })

    ul.addEventListener("click", (e) => {
        let id = e.target.getAttribute("data-id");
        if(!id) return;

        removeItemFromDOM(id);
        removeItemFromArray(id);
    })


    function addItemToDOM(itemId, toDoItem) {
        let li = document.createElement("li");
        li.setAttribute("data-id", itemId);
        li.innerText = toDoItem;
        ul.appendChild(li);
    }

    function addItemToArray(itemId, toDoItem) {
        toDoListArray.push({
            id: itemId,
            toDoItem: toDoItem
        });
        console.log(toDoListArray);
    }

    function removeItemFromDOM(id) {
        let li = document.querySelector(`[data-id="${id}"]`);
        ul.removeChild(li);
    }
    function removeItemFromArray(id) {
        toDoListArray = toDoListArray.filter(item => item.id!== id);
        console.log(toDoListArray);
    }
}


toDO()
