import {appStateUp} from '../../actions/actions.js';
import {handleAction} from 'redux-actions';

const AppState = handleAction(
    appStateUp,
    (state, action) => action.payload,
    1
);

export default AppState;