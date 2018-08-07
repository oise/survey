import * as React from 'react';
import "./SurveyProgress.css"


interface ISurveyProgress {
    totalQuestions: number,
    numberAnswered: number
}

interface ISurveyProgressState {
    progress: number
}

class SurveyProgress extends React.Component<ISurveyProgress, ISurveyProgressState> {

    constructor(props: ISurveyProgress) {
        super(props);

        this.state = {
            progress: 0
        };
    }

    public componentDidMount() {
        this.getProgressForBar()
    }

    public componentDidUpdate(prevProps: Readonly<ISurveyProgress>) {
        if (prevProps.numberAnswered !== this.props.numberAnswered) {
            this.getProgressForBar()
        }
    }

    public getProgressForBar() {
        const {totalQuestions, numberAnswered} = this.props;
        this.setState({
            progress: Math.ceil((numberAnswered / totalQuestions) * 100)
        });
    }

    public render() {
        const {progress} = this.state;
        return (
            <div className="SurveyProgress">
                <div className="SurveyProgress-bar" style={{"width": progress+'%'}}/>
            </div>
        )
    }


}

export default SurveyProgress