import UpdateUi from "../modules/mainSec.js";




export function clear() {
	const newArr = UpdateUi.taskArr.filter(tasker => tasker.complete !== true);
	localStorage.setItem('taskItems', JSON.stringify(newArr));
	UpdateUi.addTasks(newArr);
	location.reload();
}


	export const updateSave = () => {
		if (localStorage.getItem('taskItems')) {
			UpdateUi.taskArr = JSON.parse(localStorage.getItem('taskItems'));
			UpdateUi.addTasks(UpdateUi.taskArr);
		} else {
			localStorage.setItem('taskItems', '');
			UpdateUi.taskArr = [];
		}
	}