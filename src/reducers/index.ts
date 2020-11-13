import {combineReducers} from 'redux';
import {State} from "../state";
import {reduceFormData} from "./reduceFormData";

/**
 * creates the entire portal state
 */
export function createRootReducer() {
    return combineReducers<State>({
        formData: reduceFormData
    });
}

const rootReducer = createRootReducer();
export default rootReducer;
