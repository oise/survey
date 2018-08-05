import * as React from 'react';
import './App.css';
import SurveyButtons from "./SurveyButtons/SurveyButtons";
import SurveyOptions from "./SurveyOptions/SurveyOptions";
import SurveyQuestion from "./SurveyQuestion/SurveyQuestion";


class App extends React.Component {
    public render() {
        return (
            <div className="App container">
                <SurveyQuestion question="What is the qq"/>
                <SurveyOptions type={'plain'}/>
                <SurveyButtons/>
            </div>
        );
    }
}

export default App;

// Load all question into redux store as question
// onclick next ---- move to next in array... save index in array.... index at 0;
// onclick previous go to index - 1 set index
//