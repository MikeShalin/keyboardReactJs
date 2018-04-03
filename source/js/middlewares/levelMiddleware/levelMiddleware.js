import {
    appStateUp,
    trainingStart,
    getStopwatch,
    getTimer,
    getTrainingText,
    getErrorsCount,
    getCharCount
} from "../../actions/actions.js";


const levelMiddleware = store => next => action => {
    if (
        action.type === trainingStart.toString()
    ) {
        let {AppState} = store.getState();
        if (AppState < 3 || action.payload===1){
            let level = store.dispatch(appStateUp(action.payload));
            if (level.payload === 1 && action.payload===1){
                store.dispatch(getTrainingText("АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ1234567890"));
                store.dispatch(getTimer(60));
                store.dispatch(getStopwatch(0));
                store.dispatch(getErrorsCount(0));
                store.dispatch(getCharCount(10));
            }
        }
    }

    return next(action);
};

export default levelMiddleware;