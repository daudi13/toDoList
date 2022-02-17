import _, {} from 'lodash';
import UpdateUi from './modules/mainSec.js';
import './style.css';

UpdateUi.updateSave();

UpdateUi.enterBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (UpdateUi.input.value === '') {
    alert('Please add a task');
  } else {
    UpdateUi.updateTask();
  }
});