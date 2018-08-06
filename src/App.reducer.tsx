import {combineReducers} from "redux";
import surveyReducer from './SurveyQuestion/SurveyQuestion.reducer';


const appReducer = combineReducers({surveyReducer});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
};

export default rootReducer;
