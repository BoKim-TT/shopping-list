const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');
const form = document.querySelector('.submit__form');
input.focus();

function onAdd() {
  // get input value
  const inputValue = input.value;
  if (inputValue === '') {
    input.focus();
    return;
  }
  // make a new item
  const itemRow = createItem(inputValue);

  // add the new item (item + delete button) into items ul
  items.appendChild(itemRow);
  // scroll into the current item
  itemRow.scrollIntoView({ block: 'center' });
  // empty the input section
  input.value = '';
  input.focus();
 
}

let id = 0;
function createItem(inputValue) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${inputValue}</span>
      <button class="item__delete">
         <i class="fas fa-trash-alt delete" aria-hidden="true" data-id=${id}></i>
      </button>
    </div>
    <div class = "item__divider"> </div>
  `;
  id++;
  return itemRow;
}

//submit a new item on the list
form.addEventListener('submit', (event) => {
  event.preventDefault();
  onAdd();
});


//delete an item from the list
items.addEventListener('click', (event) => {
  const eventId = event.target.dataset.id;

  if (eventId) {
    const toBeDeletedRow = document.querySelector(
      `.item__row[data-id="${eventId}"]`
    );
    toBeDeletedRow.remove();
    input.focus();
  }
});
