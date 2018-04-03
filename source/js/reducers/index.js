import {combineReducers} from 'redux';
import AppState from './AppState/';
import TrainingText from './TrainingText/';
import ErrorChar from './ErrorChar/';
import {Timer,Stopwatch,ErrorsCount,CharCount} from './TrainingFieldsReducers/TrainingFieldsReducers.js';

export default combineReducers({
    AppState,
    TrainingText,
    Timer,
    Stopwatch,
    ErrorsCount,
    CharCount,
    ErrorChar
});
