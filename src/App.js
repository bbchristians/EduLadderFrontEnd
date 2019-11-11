import React from 'react';
import RankView from './components/RankView'
import QuestionAnswerView from './components/QuestionAnswerView'
import Container from '@material-ui/core/Container';
import './App.css';


class App extends React.Component {
  
  render() {
    return(
      <Container className='App-header' >
        <QuestionAnswerView />
      </Container>
    );
  }
}

export default App;
