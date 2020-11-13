import {SaveDataAction, SaveDataActionTypes} from "../actions/saveData";
import {FormData} from '../model/FormData';

/**
 * The default form data
 */
const formData: FormData = {
    clinicalHistory: '',
    examination: '',
    findings: '',
    impressions: '',
    technique: ''
}

/**
 * Reducer function to set the portal state based on the action fired
 * @param state the portal global state
 * @param action for which the state has to be updated
 */
export function reduceFormData(state: FormData = formData, action: SaveDataAction) {
    switch(action.type){

        case SaveDataActionTypes.SAVE_CLINICAL_HISTORY:
            return {...state, clinicalHistory: action.payload};

        case SaveDataActionTypes.SAVE_EXAMINATION:
            return {...state, examination: action.payload};

        case SaveDataActionTypes.SAVE_FINDINGS:
            return {...state, findings: action.payload};

        case SaveDataActionTypes.SAVE_IMPRESSION:
            return {...state, impressions: action.payload};

        case SaveDataActionTypes.SAVE_TECHNIQUE:
            return {...state, technique: action.payload};

        default:
            return state;
    }
}
