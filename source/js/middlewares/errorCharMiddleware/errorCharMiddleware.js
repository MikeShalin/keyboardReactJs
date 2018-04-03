import {errorChar} from "../../actions/actions.js";


const errorCharMiddleware = store => next => action => {
    if (
        action.type === errorChar.toString()
    ) {
        console.log('в errorChar',action.payload)
    //     // store.dispatch(getStopwatch(action.payload));
    }
     return next(action);
};

export default errorCharMiddleware;