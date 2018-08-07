import * as React from "react";
import {IOption} from '../SurveyQuestion/question';

interface ISurveyOptions {
    type: 'plain' | 'checkbox' | 'dropdown';
    options: IOption[] | string | undefined;
    answerFn: any;
}

interface ISurveyOptionsState {
    answer: any
}

class SurveyOptions extends React.Component<ISurveyOptions, ISurveyOptionsState> {
    constructor(props: ISurveyOptions) {
        super(props)

    }

    public handleChange = (event: any) => {
        const target = event.target;

        const {answerFn} = this.props;

        answerFn(target.value)

    };


    public render() {
        const {type, options} = this.props;

        switch (type) {
            case 'plain':
                return <input type="text" onChange={this.handleChange} name="answer"/>;
            case 'checkbox':
                return (typeof options === 'object' && options.map((item, index) => (
                    <React.Fragment key={index}>
                        <label>{item.option}</label>
                        <input type="checkbox" value={item.option} name="answer" onChange={this.handleChange}/>
                    </React.Fragment>
                )));
            case 'dropdown':
                return (
                    <React.Fragment>
                        <select onChange={this.handleChange}>
                            <option value="">Select One</option>
                            {typeof options === 'object' && options.map((item, index) => (
                                <option value={item.option} key={index}>{item.option}</option>))
                            }
                        </select>
                    </React.Fragment>)
        }
    }

}

export default SurveyOptions;

