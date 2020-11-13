import {FormData} from "../model/FormData";

export interface State {
    formData: FormData;
}

/**
 * Utility function to get the form data submitted
 * @param state from the portal state
 */
export const getFormData =
    (state: State) => state.formData;
