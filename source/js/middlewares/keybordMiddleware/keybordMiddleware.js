import {
    keyboard,
    getTrainingText,
    getCharCount,
    getErrorsCount} from "../../Actions/actions.js";


const keybordMiddleware = store => next => action => {
    if (
        action.type === keyboard.toString()
    ) {
        const {TrainingText,ErrorsCount} = store.getState();
        if((TrainingText[0].toLowerCase() === action.payload.toLowerCase())){
            let newText = TrainingText.filter((char,i)=>(i!==0));
            console.log('Верная кнопка',action.payload);
            console.log('Символ тестовой строки',TrainingText[0].toLowerCase());
            store.dispatch(getTrainingText(newText));
            store.dispatch(getCharCount(newText.length))
        }
        else{
            store.dispatch(getErrorsCount(ErrorsCount+1));
            console.log('Другой символ',action.payload);
        }
    }
    return next(action);
};

export default keybordMiddleware;