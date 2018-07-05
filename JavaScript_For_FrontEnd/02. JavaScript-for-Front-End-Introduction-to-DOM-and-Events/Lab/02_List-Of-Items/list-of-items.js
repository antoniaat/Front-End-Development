function addItem() {
    let newElement = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    if (newElement.length === 0)
        return;

    let listItem = document.createElement('li');
    listItem.textContent = newElement;
    list.appendChild(listItem);
}