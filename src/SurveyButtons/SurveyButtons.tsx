import * as React from "react";
import "./SurveyButtons.css";

class SurveyButtons extends React.Component {

    public buttonClick = () => {
        history.pushState('', '', '22')
    }

    public render() {
        return (
            <div className="SurveyButtons-grp">
                <button onClick={this.buttonClick} className="btn btn-primary">Back</button>
                <button onClick={this.buttonClick} className="btn btn-primary">Next</button>
            </div>
        )
    }
}

export default SurveyButtons
