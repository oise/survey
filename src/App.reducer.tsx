import {combineReducers} from "redux";
import surveyReducer from "../src/SurveyQuestion/SurveyQuestion.reducer";


const appStore = combineReducers({surveyReducer});

export default appStore;