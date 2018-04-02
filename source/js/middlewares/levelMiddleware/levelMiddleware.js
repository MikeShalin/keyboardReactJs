import {appStateUp,trainingStart,getRandomString, getStopwatch, getTimer} from "../../Actions/actions.js";


const levelMiddleware = store => next => action => {
    if (
        action.type === trainingStart.toString()
    ) {
        let {Timer,Stopwatch} = store.getState();
        store.dispatch(appStateUp(2));
        const intervalTimer = setInterval(()=>{
            if(intervalTimer === 0)
                clearInterval(intervalTimer);
            store.dispatch(getTimer(Timer--));
        },1000);
        const intervalStopwatch = setInterval(()=>{
            if(intervalStopwatch === 0)
                clearInterval(intervalStopwatch);
            store.dispatch(getStopwatch(Stopwatch++));
        },1000);
    }

    return next(action);
};

export default levelMiddleware;