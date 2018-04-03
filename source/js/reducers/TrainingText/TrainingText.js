import {getTrainingText} from '../../actions/actions.js';
import {handleAction} from 'redux-actions';

const TrainingText = handleAction(
    getTrainingText,
    (state, action) => action.payload,
    "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ1234567890"
);

export default TrainingText;