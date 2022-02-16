import _ from 'lodash';
import * as selectors from './modules/selectors.js';
import './style.css';

class updateUi {
	static block = [];

	static enterBtn = selectors.enterBtn;

	static input = selectors.input;

	static listblock = selectors.listblock;

	static taskArr = selectors.taskArr;

	// populating the ul with task

	static addTasks(arrs) {
	  updateUi.listblock.innerHTML = ' ';
	  arrs.forEach((arr) => {
	    const htmlTemp = `
			<li class="list-item" id="${arr.index}"><input type="checkbox" name="todo-1"><p contenteditable="true">${arr.desc}</p><button><i class="fas fa-ellipsis-v"></i></button></li>
			`;
	    updateUi.listblock.insertAdjacentHTML('afterbegin', htmlTemp);
	  });
	}
}

window.onload = updateUi.addTasks(selectors.taskArr);