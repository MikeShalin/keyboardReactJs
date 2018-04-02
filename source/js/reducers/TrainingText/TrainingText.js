import {getTrainingText} from '../../Actions/actions.js';
import {handleAction, handleActions} from 'redux-actions';

const TrainingText = handleAction(
    getTrainingText,
    (state, action) => action.payload,
    "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
);

export default TrainingText;