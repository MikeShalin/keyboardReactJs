import {appStateUp,trainingStart,getRandomString, getStopwatch, getTimer,startTimer,stopTimer} from "../../Actions/actions.js";


const timerMiddleware = store => next => action => {
    // if (
    //     (action.type === getTimer.toString()) || (action.type === getStopwatch.toString())
    // ) {
    //     console.log('в мидлах',action.payload)
    //     // store.dispatch(getTimer(action.payload));
    //     // store.dispatch(getStopwatch(action.payload));
    // }
    // return next(action);
};

export default timerMiddleware;