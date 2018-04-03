import {
    keyboard,
    getTrainingText,
    getCharCount,
    getErrorsCount,
    getTimer,
    errorChar
} from "../../actions/actions.js";


const keybordMiddleware = store => next => action => {
    if (
        action.type === keyboard.toString()
    ) {
        const {TrainingText,ErrorsCount} = store.getState();
        if((TrainingText[0].toLowerCase() === action.payload.toLowerCase())){
            let newText = TrainingText.filter((char,i)=>(i!==0));
            store.dispatch(getTrainingText(newText));
            store.dispatch(getCharCount(newText.length));
            store.dispatch(getTimer(60));
            store.dispatch(errorChar(null));
        }
        else{
            store.dispatch(errorChar(true));
            store.dispatch(getErrorsCount(ErrorsCount+1));
        }
    }
    return next(action);
};

export default keybordMiddleware;