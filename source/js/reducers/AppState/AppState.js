import {appStateUp} from '../../Actions/actions.js';
import {handleAction, handleActions} from 'redux-actions';

const AppState = handleAction(
    appStateUp,
    (state, action) => action.payload,
    1
);

export default AppState;