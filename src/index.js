import _, {} from 'lodash';
import { updateSave } from './modules/interactive.js';
import UpdateUi from './modules/mainSec.js';
import './style.css';

updateSave();

UpdateUi.enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (UpdateUi.input.value === '') {
    alert('Please add a task');
  } else {
    UpdateUi.updateTask();
  }
});