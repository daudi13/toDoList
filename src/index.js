import _ from 'lodash';
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
		updateUi.taskArr.forEach((taskItem, pos) => {
			taskItem.index = pos;
		})
		localStorage.setItem('taskItems', JSON.stringify(updateUi.taskArr));
		updateUi.input.value = '';
		updateUi.addTasks(updateUi.taskArr);
	}

	static delTask(taskItem, index) {
		const taskBlock = document.getElementById(index);
		updateUi.taskArr = updateUi.taskArr.filter((item) => item !== taskItem);
		updateUi.taskArr.forEach((taskItem, pos) => {
			taskItem.index = pos;
		})
		localStorage.setItem('taskItems', JSON.stringify(updateUi.taskArr));
		updateUi.listblock.removeChild(taskBlock)
	}

	static addTasks(arrs) {
	  updateUi.listblock.innerHTML = ' ';
	  arrs.forEach((arr, index) => {
	    const htmlTemp = `
			<li class="list-item" id="${index}"><input type="checkbox" name="todo-1"><p contenteditable="true">${arr.task}</p><button class="btn-${index}"><i class="fas fa-ellipsis-v"></i></button></li>
			`;
			updateUi.listblock.insertAdjacentHTML('afterbegin', htmlTemp);
			document.querySelectorAll(`.btn-${index}`).forEach(btn => btn.addEventListener('click', (e) => {
				e.preventDefault()
				updateUi.delTask(arr, index);
			}))
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