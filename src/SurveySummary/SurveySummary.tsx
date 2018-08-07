import * as React from 'react';
import "./SurveySummary.css";
import {IAnsweredQuestions} from '../SurveyQuestion/question';
import {connect} from 'react-redux';

interface ISurveySummary {
    answeredQuestions: IAnsweredQuestions[]
}

class SurveySummary extends React.Component<ISurveySummary> {

    public render() {
        const {answeredQuestions} = this.props;
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
                <button className='btn btn-outline-primary'> Restart Survey</button>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        answeredQuestions: state.surveyReducer.answeredQuestions
    }
}

export default connect(mapStateToProps)(SurveySummary)