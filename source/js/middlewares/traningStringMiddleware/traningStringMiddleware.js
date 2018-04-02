import {appStateUp,trainingStart,getRandomString} from "../../Actions/actions.js";
import {getTrainingText} from "../../Actions/actions";


const traningStringMiddleware = store => next => action => {
    if (
        action.type === getRandomString.toString()
    ) {
        let num = (min, max) =>{
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            return rand;
        };
        let arr = [],
            lol = [];

        const string = action.payload.split('');

        for (let i=0;i<10;i++){
            arr.push(num(0,42));
        }

        lol = arr.map(num => (string[num]));
        store.dispatch(getTrainingText(lol));
        console.log('Строка в мидлвере ',lol);
    }
    return next(action);
};

export default traningStringMiddleware;