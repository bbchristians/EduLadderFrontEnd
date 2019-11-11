import React from 'react';
import RankView from './components/RankView'
import Container from '@material-ui/core/Container';
import './App.css';


class App extends React.Component {
  
  render() {
    return(
      <Container className='App-header' >
        <RankView />
      </Container>
    );
  }
}

export default App;
