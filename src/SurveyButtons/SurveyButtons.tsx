import * as React from "react";
import "./SurveyButtons.css";

interface ISurveyButton {
    totalQuestions: number,
    prevQuestionFn: any,
    nextQuestionFn: any,
    saveQuestionFn: any,
    isEnabled: boolean
}

class SurveyButtons extends React.Component<ISurveyButton> {

    public currentPage: number = 1;

    public incrementQuestion = () => {
        const {totalQuestions, nextQuestionFn, saveQuestionFn} = this.props;
        if (this.currentPage >= 1 && this.currentPage <= totalQuestions) {
            saveQuestionFn();
            // Pass array index here
            nextQuestionFn(this.currentPage++);
        }


    };

    public decrementQuestion = () => {
        const {prevQuestionFn} = this.props;
        if (this.currentPage !== 1) {
            this.currentPage--;
            // Pass array index here
            prevQuestionFn(this.currentPage);
        }
    };


    public render() {
        const {isEnabled} = this.props;
        return (
            <div className="SurveyButtons-grp">
                <button onClick={this.decrementQuestion}
                        className='btn btn-primary'>Back
                </button>
                <button onClick={this.incrementQuestion}
                        className={!isEnabled ? 'disabled btn btn-primary' : 'btn btn-primary'}>Next
                </button>
            </div>
        )
    }
}

export default SurveyButtons
