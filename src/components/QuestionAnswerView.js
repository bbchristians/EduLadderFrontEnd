import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import QuestionCard from './QuestionCard';
import GradeLevelQuestionCard from './GradeLevelQuestionCard'
import SubmitAnswerRequest from '../requests/SubmitAnswer'
import GetQuestionRequest from '../requests/GetQuestion'

class QuestionAnswerView extends React.Component {
  
  constructor() {
    super()
    this.state = {
      sessionId: Math.random().toString(36).replace(/[^a-z]+/g, 'a').substr(2, 10),
      gradeLevel: undefined,
      cardData: {
        questionId: -1,
        questionText: "Unknown",
        questionUnits: ""
      }
    }
    this.QuestionCard = React.createRef();
    this.GradeLevelQuestionCard = React.createRef();
  }

  render() {

    return (
      <div className="RankView">
          {
            this.state.gradeLevel === undefined ? 
              <Grid container spacing={2}
                  justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                  <GradeLevelQuestionCard ref={this.GradeLevelQuestionCard}/>
                </Grid>
                <Grid container justify='center'>
                  <Button variant="contained" color="primary" onClick={this.setGradeLevel}>
                    Begin
                  </Button>
                </Grid>
              </Grid>
            :
              <Grid container spacing={2}
                  justify="center"
                  alignItems="center">
                <Grid item xs={12}>
                  <QuestionCard cardData={this.state.cardData} answerable={true} ref={this.QuestionCard}/>
                </Grid>
                <Grid container justify='center'>
                  <Button variant="contained" color="primary" onClick={this.makeAnswer}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
          }
      </div>
    );
  }
  
  makeAnswer = () => {
    let response = new SubmitAnswerRequest(
      this.state.sessionId,
      this.state.cardData.questionId,
      this.QuestionCard.current.getAnswer()
    ).send()
    if( response === 0 ) 
      this.setState({cardData: new GetQuestionRequest(this.state.sessionId, this.state.gradeLevel).send()})
  }

  setGradeLevel = () => {
    let gradeLevel = this.GradeLevelQuestionCard.current.getGradeLevel();
    let questionData = new GetQuestionRequest(this.state.sessionId, gradeLevel).send();
    this.setState({
      gradeLevel: gradeLevel,
      cardData: questionData
    })
  }
}

export default QuestionAnswerView;