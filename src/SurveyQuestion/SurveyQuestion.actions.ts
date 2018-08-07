/**
 * Survey Question actions
 */

export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION';
export const GET_PREV_QUESTION = 'GET_PREV_QUESTION';
export const SAVE_ANSWERED_QUESTIONS = 'SAVE_ANSWERED_QUESTIONS';


export const getNextQuestion = (payload: any) => ({
    type: GET_NEXT_QUESTION,
    payload
});


export const getPrevQuestion = (payload: any) => ({
    type: GET_PREV_QUESTION,
    payload
});

export const saveQuestions = (payload: any) => ({
    type: SAVE_ANSWERED_QUESTIONS,
    payload
});



