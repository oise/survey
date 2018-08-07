import * as React from 'react';
import "./SurveySummary.css";
import {IAnsweredQuestions} from '../SurveyQuestion/question';
import {connect, Dispatch} from 'react-redux';
import {resetSurvey} from '../SurveyQuestion/SurveyQuestion.actions';

interface ISurveySummary {
    answeredQuestions: IAnsweredQuestions[],
    onResetSurvey:any
}

class SurveySummary extends React.Component<ISurveySummary> {

    public render() {
        const {answeredQuestions, onResetSurvey} = this.props;
        const answersAsList = answeredQuestions.map((item, index) => (
            <div key={index}>
                <div className="SurveySummary-question">{item.question}</div>
                <div className="SurveySummary-answer">{item.answer}</div>
            </div>
        ));

        return (
            <div className="SurveySummary">
                <h2>Survey Summary</h2>
                {answersAsList}
                <button className='btn btn-outline-primary' onClick={onResetSurvey}> Restart Survey</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onResetSurvey: () => dispatch(resetSurvey())
    }
}

const mapStateToProps = (state: any) => {
    return {
        answeredQuestions: state.surveyReducer.answeredQuestions
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SurveySummary)