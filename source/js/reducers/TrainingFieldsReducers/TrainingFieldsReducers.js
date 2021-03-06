import {
    getTimer,
    getStopwatch,
    getErrorsCount,
    getCharCount
} from '../../actions/actions.js';
import {handleAction} from 'redux-actions';

export const Timer = handleAction(
    getTimer,
    (state, action) => action.payload,
    60
);

export const Stopwatch = handleAction(
    getStopwatch,
    (state, action) => action.payload,
    0
);

export const ErrorsCount = handleAction(
    getErrorsCount,
    (state, action) => action.payload,
    0
);

export const CharCount = handleAction(
    getCharCount,
    (state, action) => action.payload,
    10
);

