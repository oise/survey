import * as React from "react";

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
            <div>{question}</div>
        )
    }
}

export default SurveyQuestion;