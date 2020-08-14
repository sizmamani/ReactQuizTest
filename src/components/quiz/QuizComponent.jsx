import React from 'react';
import classNames from 'classnames';

import './quiz.scss';

const QuizComponent = ({
    questions,
    currentQuestionIndex,
    setQuestionIndex,
    setUserAnswer,
    fetchData,
}) => {

    const currentQuestion = questions && questions[currentQuestionIndex] && questions[currentQuestionIndex];

    return (
        <div className="quiz-wrapper" >
            <div className="quiz-component relative">
                {
                    questions && !!questions.length &&
                    <>
                        <ul className="side-column border">
                            {
                                questions.map((q, i) => {
                                    return (
                                        <li
                                            key={q.question} ///TODO: better to have unique id instead of index
                                            onClick={() => setQuestionIndex(i)}
                                            className={
                                                classNames(
                                                    { "bg-gray-dark": i === currentQuestionIndex },
                                                    { "bg-green white": questions[i].user_answer === questions[i].correct_answer },
                                                    { "bg-red white": questions[i].user_answer && questions[i].user_answer !== questions[i].correct_answer }
                                                )}
                                        >
                                            {`Question ${i + 1}`}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <div className="content-wrapper">
                            <div
                                className="fs-26 lh-30 fw-700 padding-right-15"
                                dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
                            />
                            <div className="answer-wrapper">
                                {
                                    currentQuestion &&
                                    currentQuestion.answers &&
                                    currentQuestion.answers.map((answer, index) => {
                                        return (
                                            <div key={answer} className="margin-5">
                                                <div>
                                                    <input
                                                        checked={currentQuestion.user_answer === answer}
                                                        disabled={currentQuestion.user_answer}
                                                        onChange={() => setUserAnswer(currentQuestionIndex, answer)}
                                                        type="checkbox" id={`answer${index}`}
                                                    />
                                                    <label for={`answer${index}`}>{answer}</label>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
                }
                <button
                    type="button"
                    className="restart-button border"
                    onClick={fetchData}
                >
                    Restart
                </button>
            </div>
        </div>
    )
}

export default QuizComponent;