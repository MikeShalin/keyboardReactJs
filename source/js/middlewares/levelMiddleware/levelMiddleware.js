import {appStateUp,trainingStart,getRandomString, getStopwatch, getTimer} from "../../Actions/actions.js";
import AppState from "../../reducers/AppState/AppState";


const levelMiddleware = store => next => action => {
    if (
        action.type === trainingStart.toString()
    ) {
        let {AppState} = store.getState();
        console.log('уровень игры',action.payload);
        store.dispatch(appStateUp(action.payload));
    }

    return next(action);
};

export default levelMiddleware;