const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const itemClear = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

// Function to add item
function addItem(e){
    e.preventDefault();

    const newItem = itemInput.value;

    const list = document.createElement('li');
    list.appendChild(document.createTextNode(newItem));

    const button = createButton('remove-item btn-link text-red');
    list.appendChild(button);

    itemList.appendChild(list);

    checkUI();

    itemInput.value = '';
}

// Function to create button
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

// Function to create icon
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

// Function to remove items
function removeItem(e) {
    if(e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

// Function to filter items
function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    console.log(text);

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();
        
        if(itemName.indexOf(text) != -1) {
            item.style.display = "flex";
        }
        else {
            item.style.display = "none";
        }
    })
}

// Function to clear all items
function clearAll() {
    itemList.innerHTML = '';
}

// Function to check UI
function checkUI() {
    const items = itemList.querySelectorAll('li');
    console.log(items);
    if(items.length === 0) {
        itemClear.style.display = 'none';
        itemFilter.style.display = 'none';
    }
    else {
        itemClear.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

// Adding items
itemForm.addEventListener('submit',addItem);

// Removing items
itemList.addEventListener('click',removeItem);

// Clear all items
itemClear.addEventListener('click', clearAll);

// Filter Items
itemFilter.addEventListener('input', filterItems);

// Check UI
checkUI();
