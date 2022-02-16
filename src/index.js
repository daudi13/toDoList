import _, { update } from 'lodash';
import NewItem from './modules/listClass.js';
import * as selectors from './modules/selectors.js';
import './style.css';

class updateUi {

	static taskArr = []

	static enterBtn = selectors.enterBtn;

	static input = selectors.input;

	static listblock = selectors.listblock;

	// populating the ul with task

	static updateTask() {
		const taskItem = new NewItem(updateUi.input.value);
		updateUi.taskArr.push(taskItem);
		updateUi.input.value = '';
		updateUi.addTasks(updateUi.taskArr);
	}

	static addTasks(arrs) {
	  updateUi.listblock.innerHTML = ' ';
	  arrs.forEach((arr) => {
	    const htmlTemp = `
			<li class="list-item" id="${arr.index}"><input type="checkbox" name="todo-1"><p contenteditable="true">${arr.task}</p><button><i class="fas fa-ellipsis-v"></i></button></li>
			`;
	    updateUi.listblock.insertAdjacentHTML('afterbegin', htmlTemp);
	  });
	}
}

updateUi.enterBtn.addEventListener('click', (e) => {
	e.preventDefault()
	if (updateUi.input.value === '') {
		alert(`Please add a task`);
	} else {
		updateUi.updateTask()
	}
})