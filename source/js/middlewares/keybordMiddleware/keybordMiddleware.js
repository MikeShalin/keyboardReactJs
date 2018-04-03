import {keyboard,getTrainingText} from "../../Actions/actions.js";


const keybordMiddleware = store => next => action => {
    if (
        action.type === keyboard.toString()
    ) {
        const {TrainingText} = store.getState();
        if((TrainingText[0].toLowerCase() === action.payload.toLowerCase())){
            console.log('Верная кнопка',action.payload);
            console.log('Символ тестовой строки',TrainingText[0].toLowerCase());
            store.dispatch(getTrainingText(TrainingText.filter((char,i)=>(i!==0))));
        }
        if((action.payload === 'Control') || (action.payload === 'Alt')){

        }
        else{
            console.log('Другой символ',action.payload);

        }
    }
    return next(action);
};

export default keybordMiddleware;