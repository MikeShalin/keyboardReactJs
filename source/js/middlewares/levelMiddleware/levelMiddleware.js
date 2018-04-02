import {appStateUp,trainingStart,getRandomString} from "../../Actions/actions.js";


const levelMiddleware = store => next => action => {
    if (
        action.type === trainingStart.toString()
    ) {
        store.dispatch(appStateUp(2));
        console.log('Мы попали в middleware',store.getState());
    }

    return next(action);
};

export default levelMiddleware;