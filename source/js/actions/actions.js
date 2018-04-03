import {createActions} from 'redux-actions';

export const {
    appStateUp: appStateUp,
    trainingStart:trainingStart,
    getTrainingText:getTrainingText,
    getRandomString:getRandomString,
    getTimer:getTimer,
    getStopwatch:getStopwatch,
    getErrorsCount:getErrorsCount,
    getCharCount:getCharCount,
    keyboard:keyboard,
    errorChar:errorChar
} = createActions({

    ERROR_CHAR: char => char,

    APP_STATE_UP: level=>level,

    TRAINING_START: level=>level,

    GET_TRAINING_TEXT: undefined,

    GET_RANDOM_STRING: TrainingText => TrainingText,

    GET_TIMER: sec => sec,

    GET_STOPWATCH: sec => sec,

    GET_ERRORS_COUNT: undefined,

    GET_CHAR_COUNT: undefined,

    KEYBOARD: key=>key
});
