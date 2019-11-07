import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';



class App extends React.Component {
  
  constructor() {
    super()
    this.state = {
      leftCardData: {
        questionId: 1
      },
      rightCardData: {
        questionId: 2
      }
    }
  }
  
  render() {
    return (
      <div className="App">
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <QuestionCard cardData={this.state.leftCardData}/>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary">
              Related
            </Button>
            <Button variant="contained" color="primary">
              Similar
            </Button>
            <Button variant="contained" color="primary">
              Different
            </Button>
          </Grid>
          <Grid item xs={5}>
            <QuestionCard cardData={this.state.rightCardData}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
