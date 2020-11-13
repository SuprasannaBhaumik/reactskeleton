export enum SaveDataActionTypes {
    SAVE_EXAMINATION = 'examination',
    SAVE_CLINICAL_HISTORY ='clinicalHistory',
    SAVE_FINDINGS ='findings',
    SAVE_TECHNIQUE ='technique',
    SAVE_IMPRESSION ='impressions'
}


export type SaveDataAction =
    {type: string, payload: string}

/**
 * Action to save the data inside of textarea
 * @param type the category to save the data
 * @param data actual data to be saved in the redux state
 */
export function saveData(type: string, data: string): SaveDataAction {
    return { type: type, payload: data};
};
