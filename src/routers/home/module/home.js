import request from "../../../services/request"
import constants from "./actionConstants";
import { shuffleArray } from '../../../utils/utils';

const {
    FETCH_DATA,
    LOADING,
    ERROR,
    SET_QUESTION_INDEX,
    SET_USER_ANSWER,
} = constants


export function fetchData() {
    return (dispatch) => {
        dispatch({
            type: LOADING,
            payload: true
        })
        request.get('?amount=10', (data) => {

            if (data && data.results) {
                data.results.forEach(result => {
                    result.answers = shuffleArray([...result.incorrect_answers, result.correct_answer]);
                })
            }
            dispatch({
                type: FETCH_DATA,
                payload: data && data.results || []
            });
        }, (error) => {
            dispatch({
                type: ERROR,
                payload: error
            })
        })
    };
}

export function setQuestionIndex(questionIndex) {
    return (dispatch) => {
        dispatch({
            type: SET_QUESTION_INDEX,
            payload: questionIndex
        });
    }
}

export function setUserAnswer(questionIndex, answer) {
    return (dispatch) => {
        dispatch({
            type: SET_USER_ANSWER,
            payload: {
                questionIndex,
                answer
            }
        });
    }
}

const ACTION_HANDLERS = {
    FETCH_DATA: handleFetchData,
    LOADING: handleLoading,
    ERROR: handleError,
    SET_QUESTION_INDEX: handleSetQuestionIndex,
    SET_USER_ANSWER: handleUserAnswer
}

function handleUserAnswer(state, action) {
    let newQuestionDataSet = [...state.questions];
    newQuestionDataSet[action.payload.questionIndex].user_answer = action.payload.answer;
    return {
        ...state,
        questions: newQuestionDataSet,
        currentQuestionIndex: (state.questions.length - 1 > state.currentQuestionIndex) ? state.currentQuestionIndex + 1 : state.currentQuestionIndex
    }
}

function handleSetQuestionIndex(state, action) {
    return {
        ...state, currentQuestionIndex: action.payload
    }
}

function handleError(state, action) {
    return {
        ...state, error: action.payload
    }
}

function handleLoading(state, action) {
    return {
        ...state,
        isLoading: action.payload
    }
}

function handleFetchData(state, action) {
    return {
        ...state,
        questions: action.payload,
        isLoading: false,
        currentQuestionIndex: 0
    }
}


const initialState = {
    questions: [],
    isLoading: false,
    currentQuestionIndex: 0,
    error: {}
};

export default function homeReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
