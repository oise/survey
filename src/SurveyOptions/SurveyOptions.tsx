import * as React from "react";

interface ISurveyOptions {
    type: 'plain' | 'checkbox' | 'dropdown';
    options?: string[];
}

class SurveyOptions extends React.Component<ISurveyOptions> {
    constructor(props: ISurveyOptions) {
        super(props)
    }

    public render() {
        const {type} = this.props;
        switch (type) {
            case 'plain':
                return <input type="text"/>;
            case 'checkbox':
                return <input type="checkbox"/>;
            case 'dropdown':
                return (
                    <React.Fragment>
                        <select>
                            <option value="">1</option>
                        </select>
                    </React.Fragment>
                )

        }
    }

}

export default SurveyOptions;

