import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import QuestionCard from './QuestionCard';
import SubmitAnswerRequest from '../requests/SubmitAnswer'

class QuestionAnswerView extends React.Component {
  
  constructor() {
    super()
    this.state = {
      cardData: {
        questionId: 15182,
        imageId: 'sample_q.jpeg'
      },
      isRelated: 'Unknown'
    }
    this.QuestionCard = React.createRef();
  }
  
  render() {

    return (
      <div className="RankView">
        <Grid container spacing={2}
            justify="center"
            alignItems="center">
          <Grid item xs={12}>
            <QuestionCard cardData={this.state.cardData} answerable={true} ref={this.QuestionCard}/>
          </Grid>
          <Grid container xs={12} justify='center'>
            <Button variant="contained" color="primary" onClick={this.makeAnswer}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
  
  makeAnswer = () => {
    new SubmitAnswerRequest(
      this.state.cardData.questionId,
      this.QuestionCard.current.getAnswer()
    ).send()
  }
}

export default QuestionAnswerView;