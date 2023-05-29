import { updateDragging, state, createOrderData, } from "./data.js";
import { html, updateDraggingHtml, moveToColumn, createOrderHtml, } from "./views.js";

const handleDragStart = (event) => {
  const { id } = event.target.dataset;
  const { column } = state.orders[id];
  updateDragging({ source: id, over: column });
};

const handleDragEnd = () => {

  state.orders[state.dragging.source].column = state.dragging.over;
  moveToColumn(state.dragging.source, state.dragging.over);
  updateDragging({ source: null, over: null });
  updateDraggingHtml({ source: null, over: null });
};

const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};

const handleAddToggle = () => {
  const current = html.add.overlay.open;
  if (current) {
    html.add.overlay.open = false;
    html.add.form.reset();
   } else {
    html.add.overlay.open = true;
    }
};

const handleHelpToggle = () => {
  html.help.overlay.style.display = 'block'
}

const handleHelpCancelToggle = () => {
  html.help.overlay.style.display = 'none'
}
const handleAddSubmit = (event) => {
  event.preventDefault(); // method is used to prevent the browser from executing the default action
  const formData = new FormData(event.target);
  const {title, table} = Object.fromEntries(formData);
  const newOrder = createOrderData({title, table, column:"ordered"});
  state.orders[newOrder.id] = newOrder;
  const htmlOrder = createOrderHtml(newOrder);
  html.columns[newOrder.column].appendChild(htmlOrder);
  html.add.form.reset();
  html.add.overlay.open = false;
  html.other.add.focus();
};
 
const handleEditToggle = (event) => {
    const current = html.edit.overlay.open;
    if(current) {html.edit.overlay.open = false;
      html.edit.form.reset();
    
    } else {
      const {id} = event.target.dataset;
      if(!id) return;
      const {title, table, column} = state.orders[id];
      html.edit.id.value = id;
      html.edit.title.value = title;
      html.edit.table.value = table;
      html.edit.column.value = column;
      html.edit.overlay.open = true;
      html.other.add.focus();
    }
}; 

const handleEditSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedOrder = Object.fromEntries(formData);
    
    const prevColumn = state.orders[updatedOrder.id].column;
    state.orders[updatedOrder.id] = updatedOrder;

    const htmlOrder = document.querySelector(`[data-id="${updatedOrder.id}"]`);
    const titleHtml = htmlOrder.querySelector('[data-title]');
    const tableHtml = htmlOrder.querySelector('[data-table]');

    titleHtml.innerText = updatedOrder.title;
    tableHtml.innerText = updatedOrder.table;
    if (prevColumn !== updatedOrder.column) {
        moveToColumn(updatedOrder.id, updatedOrder.column);
    }

    html.edit.form.reset();
    html.edit.overlay.open = false;
    html.other.add.focus();
}

const handleDelete = () => {
    const id = html.edit.id.value;
    const htmlOrder = document.querySelector(`[data-id="${id}"]`);
    htmlOrder.remove();

    delete state.orders[id];

    html.edit.form.reset();
    html.edit.overlay.open = false;
    html.other.add.focus();
};

html.add.cancel.addEventListener('click', handleAddToggle);
html.other.add.addEventListener('click', handleAddToggle);
html.add.form.addEventListener('submit', handleAddSubmit);

//cannot update order. When I click order button

html.other.grid.addEventListener('click', handleEditToggle);
html.edit.cancel.addEventListener('click', handleEditToggle);
//html.edit.form.addEventListener('click', handleEditSubmit);
html.edit.form.addEventListener('submit', handleEditSubmit);
html.edit.delete.addEventListener('click', handleDelete);

html.help.cancel.addEventListener('click', handleHelpCancelToggle);
html.other.help.addEventListener('click', handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
    htmlColumn.addEventListener('dragstart', handleDragStart);
    htmlColumn.addEventListener('dragend', handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
    htmlArea.addEventListener('dragover', handleDragOver);
}
