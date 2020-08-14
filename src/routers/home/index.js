import { connect } from 'react-redux'
import { fetchData, setQuestionIndex, setUserAnswer } from './module/home'
import HomeContainer from './container/HomeContainer'


function mapStateToProps(state) {
  return {
    questions: state && state.home && state.home.questions || [],
    currentQuestionIndex: state && state.home && state.home.currentQuestionIndex,
    isLoading: state && state.home && state.home.isLoading,
  }
}

const mapDispatchToProps = {
    fetchData,
    setQuestionIndex,
    setUserAnswer,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)

