import {combineReducers} from "redux";
import surveyReducer from './SurveyQuestion/SurveyQuestion.reducer';
import {RESET_SURVEY} from './SurveyQuestion/SurveyQuestion.actions';


const appReducer = combineReducers({surveyReducer});

const rootReducer = (state: any, action: any) => {
    if (action.type === RESET_SURVEY) {
        localStorage.clear();
    }
    return appReducer(state, action);
};

export default rootReducer;
