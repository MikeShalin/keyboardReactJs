import {appStateUp,trainingStart,getRandomString, getStopwatch, getTimer} from "../../Actions/actions.js";


const levelMiddleware = store => next => action => {
    if (
        action.type === trainingStart.toString()
    ) {
        let {Timer,Stopwatch} = store.getState();
        store.dispatch(appStateUp(2));
    }

    return next(action);
};

export default levelMiddleware;