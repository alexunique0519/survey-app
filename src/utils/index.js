const sortQuestionByQuestionSequence = questions => {
    return questions.sort((first, Second) => { return Number(first.QuestionSequence) - Number(Second.QuestionSequence) }) 
}

const calcProgress = questions => {
    const answered = questions.filter( question => question.HasAnswered !== 'N');
    return Math.ceil(answered.length * 100 / questions.length)
}

export { sortQuestionByQuestionSequence, calcProgress };