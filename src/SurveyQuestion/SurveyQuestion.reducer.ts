import {GET_NEXT_QUESTION, GET_PREV_QUESTION, RESET_SURVEY, SAVE_ANSWERED_QUESTIONS} from "./SurveyQuestion.actions";
import {data} from "../sampleData/data";
import {IAnsweredQuestions, IQuestion} from './question';
import {xorBy} from "lodash";


interface IState {
    questions: IQuestion[],
    currentQuestion: IQuestion,
    answeredQuestions: IAnsweredQuestions[]
}

const initialState: IState = {
    questions: data as IQuestion[],
    currentQuestion: data[0] as IQuestion,
    answeredQuestions: []
};

export default function surveyReducer(state = initialState, action: any) {

    switch (action.type) {

        case GET_NEXT_QUESTION: {
            return {
                ...state,
                currentQuestion: [...state.questions][action.payload]
            };
        }

        case GET_PREV_QUESTION: {
            return {
                ...state,
                currentQuestion: [...state.questions][action.payload - 1]
            };
        }
        case SAVE_ANSWERED_QUESTIONS: {
            return {
                ...state,
                answeredQuestions: xorBy(state.answeredQuestions, [action.payload], 'question')
            };
        }
        case RESET_SURVEY: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

