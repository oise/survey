import * as React from "react";
import "./SurveyQuestion.css";

interface ISurveyQuestion {
    question: string;
}

class SurveyQuestion extends React.Component<ISurveyQuestion> {
    constructor(props: ISurveyQuestion) {
        super(props)
    }

    public render() {
        const {question} = this.props;

        return (
            <div className="SurveyQuestion-wrapper">{question}</div>
        )
    }
}

export default SurveyQuestion;