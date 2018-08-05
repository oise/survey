
import {GET_NEXT_QUESTION, GET_PREV_QUESTION} from "./SurveyQuestion.actions";


interface IState {
    questions: string[]
}

const initialState: IState = {
    questions: []
};

export default function surveyReducer(state = initialState, action: any) {

    switch (action.type) {

        case GET_NEXT_QUESTION: {
            return {
                ...state,

            };
        }

        case GET_PREV_QUESTION: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
}

