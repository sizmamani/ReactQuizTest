import React from 'react';
import QuizComponent from '../../../components/quiz/QuizComponent';

const HomeComponent = ({
    questions,
    currentQuestionIndex,
    setQuestionIndex,
    setUserAnswer,
    fetchData,
}) => {
    return (
        <div className="home-container">
            <QuizComponent 
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                setQuestionIndex={setQuestionIndex}
                setUserAnswer={setUserAnswer}
                fetchData={fetchData}
            />
        </div>
    )
}

export default HomeComponent;