import * as React from 'react';
import './App.css';
import SurveyButtons from "./SurveyButtons/SurveyButtons";
import SurveyOptions from "./SurveyOptions/SurveyOptions";
import SurveyQuestion from "./SurveyQuestion/SurveyQuestion";
import {connect, Dispatch} from "react-redux";
import {IAnsweredQuestions, IQuestion} from './SurveyQuestion/question';
import {getNextQuestion, getPrevQuestion, saveQuestions} from './SurveyQuestion/SurveyQuestion.actions';
import SurveyProgress from './SurveyProgress/SurveyProgress';
import SurveySummary from './SurveySummary/SurveySummary';


interface IApp {
    currentQuestion: IQuestion,
    questions: IQuestion[],
    answeredQuestions: IAnsweredQuestions[],
    onPrevQuestion: any,
    onNextQuestion: any,
    onSaveQuestion: any
}

class App extends React.Component<IApp, { selectedAnswer: string }> {
    constructor(props: IApp) {
        super(props);

        this.state = {
            selectedAnswer: ''
        }
    }

    public handleSelectedAnswer = (answer: string) => {
        this.setState({
            selectedAnswer: answer
        })
    };

    public saveAnsweredQuestion = () => {
        const {currentQuestion, onSaveQuestion} = this.props;
        const {selectedAnswer} = this.state;
        onSaveQuestion({question: currentQuestion.question, answer: selectedAnswer})
    };

    public render() {
        const {currentQuestion, questions, onPrevQuestion, onNextQuestion, answeredQuestions} = this.props;

        return (
            <div className="App">
                {questions.length !== answeredQuestions.length &&
                <React.Fragment>
                    <h1>Survey</h1>
                    <SurveyProgress totalQuestions={questions.length} numberAnswered={answeredQuestions.length}/>

                    <SurveyQuestion question={currentQuestion.question}/>

                    <SurveyOptions options={currentQuestion.options} type={currentQuestion.optionType}
                                   answerFn={this.handleSelectedAnswer}/>

                    <SurveyButtons totalQuestions={questions.length} nextQuestionFn={onNextQuestion}
                                   isEnabled={this.state.selectedAnswer !== ''}
                                   prevQuestionFn={onPrevQuestion} saveQuestionFn={this.saveAnsweredQuestion}/>
                </React.Fragment>
                }

                {questions.length === answeredQuestions.length &&
                <SurveySummary/>
                }


            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    return {
        onPrevQuestion: (index: number) => dispatch(getPrevQuestion(index)),
        onNextQuestion: (index: number) => dispatch(getNextQuestion(index)),
        onSaveQuestion: (answeredQuestions: IAnsweredQuestions) => dispatch(saveQuestions(answeredQuestions))
    }
}

const mapStateToProps = (state: any) => {
    return {
        currentQuestion: state.surveyReducer.currentQuestion,
        questions: state.surveyReducer.questions,
        answeredQuestions: state.surveyReducer.answeredQuestions
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
