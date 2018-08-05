/**
 * Loads a redux state from local storage if it exists
 * @returns {undefined}
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState);
    }
    catch (err) {
        return undefined;
    }
}


/**
 * Saves Redux store state to local storage
 * @param state
 */
export const saveState = (state: any) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        //
    }
};