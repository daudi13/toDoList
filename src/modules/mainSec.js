import NewItem from './listClass.js';
import * as selectors from './selectors.js';

export default class UpdateUi {
static taskArr = []

static enterBtn = selectors.enterBtn;

static input = selectors.input;

static listblock = selectors.listblock;

// populating the ul with task

static updateTask = () => {
  const taskItem = new NewItem(UpdateUi.input.value);
  UpdateUi.taskArr.push(taskItem);
  UpdateUi.taskArr.forEach((taskItem, pos) => {
    taskItem.index = pos + 1;
  });
  localStorage.setItem('taskItems', JSON.stringify(UpdateUi.taskArr));
  UpdateUi.input.value = '';
  UpdateUi.addTasks(UpdateUi.taskArr);
}

static delTask = (taskItem, index) => {
  const taskBlock = document.getElementById(index);
  UpdateUi.taskArr = UpdateUi.taskArr.filter((item) => item !== taskItem);
  UpdateUi.taskArr.forEach((taskItem, pos) => {
    taskItem.index = pos;
  });
  localStorage.setItem('taskItems', JSON.stringify(UpdateUi.taskArr));
  UpdateUi.listblock.removeChild(taskBlock);
}

  static addTasks = (arrs) => {
    UpdateUi.listblock.innerHTML = ' ';
    arrs.forEach((arr, index) => {
      const htmlTemp = `
<li class="item-${index}" id="${index}"><input type="checkbox" class="task-${index}" name="task-${index} value="job-${index}"><p class="txt" contenteditable="true">${arr.task}</p><button class="btn-${index}"><i class="fa fa-trash-o"></i></button></li>
`;
      UpdateUi.listblock.insertAdjacentHTML('beforeend', htmlTemp);
      document.querySelectorAll(`.btn-${index}`).forEach((btn) => btn.addEventListener('click', (e) => {
        e.preventDefault();
        UpdateUi.delTask(arr, index);
      }));
      document.querySelectorAll('.txt').forEach((par, index) => {
        par.addEventListener('input', () => {
          if (par.textContent) {
            UpdateUi.taskArr = JSON.parse(localStorage.getItem('taskItems'));
            UpdateUi.taskArr.forEach((taskblock, i) => {
              if (index === i) {
                taskblock.task = par.textContent;
                localStorage.setItem('taskItems', JSON.stringify(UpdateUi.taskArr));
              }
            });
          }
        });
			});

			document.querySelectorAll(`.task-${index}`).forEach((checkbox) => {
				checkbox.addEventListener('change', () => {
					document.querySelectorAll(`.item-${index}`).forEach(item => {
						if (+checkbox.className.split('-')[1] === +item.className.split('-')[1]) {
							item.classList.add('completed');
							checkComplete()
						} else if (item.classList.contains('completed')) {
							item.classList.remove('completed')
						}
					})
				})
			})

			

			function checkComplete() {
				if (document.getElementById(`${index}`).classList.contains('completed')) {
				const itemId = +(document.getElementById(`${index}`).id);
					UpdateUi.taskArr[itemId].complete = true
					localStorage.setItem('taskItems', JSON.stringify(UpdateUi.taskArr));
				}
			}

			
    });
  }

  static updateSave() {
    if (localStorage.getItem('taskItems')) {
      UpdateUi.taskArr = JSON.parse(localStorage.getItem('taskItems'));
      UpdateUi.addTasks(UpdateUi.taskArr);
    } else {
      localStorage.setItem('taskItems', '');
      UpdateUi.taskArr = [];
    }
  }
}