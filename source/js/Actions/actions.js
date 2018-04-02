import {createActions} from 'redux-actions';

export const {
    appStateUp: appStateUp,
    trainingStart:trainingStart,
    trainingFinish:trainingFinish,
    getTrainingText:getTrainingText,
    getRandomString:getRandomString
} = createActions({
    APP_STATE_UP: level=>level,

    TRAINING_FINISH: undefined,

    TRAINING_START: undefined,

    GET_TRAINING_TEXT: undefined,

    GET_RANDOM_STRING: TrainingText => TrainingText,

});
