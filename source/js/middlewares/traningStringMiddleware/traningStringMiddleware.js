import {appStateUp,trainingStart,getRandomString} from "../../Actions/actions.js";


const traningStringMiddleware = store => next => action => {
    if (
        action.type === getRandomString.toString()
    ) {
        let string = action.payload;
        string = string.split();
        console.log('Строка в мидлвере ',action.type);
    }
    return next(action);
};

export default traningStringMiddleware;