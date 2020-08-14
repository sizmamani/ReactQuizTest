import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import HomeComponent from '../components/HomeComponent';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './home.scss';

const HomeContainer = ({
  fetchData,
  questions,
  currentQuestionIndex,
  setQuestionIndex,
  setUserAnswer,
  isLoading
}) => {

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div className="home-container">
        <HomeComponent 
          questions={questions}
          currentQuestionIndex={currentQuestionIndex}
          setQuestionIndex={setQuestionIndex}
          setUserAnswer={setUserAnswer}
          fetchData={fetchData}
        />
      </div>
      {
        isLoading &&
        <div className="loader-container">
          <Loader
            type="Puff"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000}
          />
        </div>
      }
    </React.Fragment>
  );
}

export default HomeContainer;
