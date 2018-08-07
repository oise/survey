export interface IQuestion {
    question: 'string',
    options?: IOption[] | string,
    optionType: 'plain' | 'checkbox' | 'dropdown'
}

export interface IOption {
    option: string
}

export interface IAnsweredQuestions {
    question: string,
    answer: string
}

