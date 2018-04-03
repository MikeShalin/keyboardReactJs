import {errorChar} from '../../actions/actions.js';
import {handleAction, handleActions} from 'redux-actions';

const ErrorChar = handleAction(
    errorChar,
    (state, action) => action.payload,
    null
);

export default ErrorChar;