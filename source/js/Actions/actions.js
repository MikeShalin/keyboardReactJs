import {createActions} from 'redux-actions';

export const {
    appStateUp: appStateUp,
    trainingStart:trainingStart,
    trainingFinish:trainingFinish,
    getTrainingText:getTrainingText,
    getRandomString:getRandomString,
    getTimer:getTimer,
    getStopwatch:getStopwatch,
    getErrorsCount:getErrorsCount,
    getCharCount:getCharCount,
    keyboard:keyboard
} = createActions({

    APP_STATE_UP: level=>level,

    TRAINING_FINISH: undefined,

    TRAINING_START: undefined,

    GET_TRAINING_TEXT: undefined,

    GET_RANDOM_STRING: TrainingText => TrainingText,

    GET_TIMER: sec => sec,

    GET_STOPWATCH: sec => sec,

    GET_ERRORS_COUNT: undefined,

    GET_CHAR_COUNT: undefined,

    KEYBOARD: key=>key
});
