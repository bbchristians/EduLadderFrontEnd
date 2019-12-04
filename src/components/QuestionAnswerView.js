import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import QuestionCard from './QuestionCard';
import GradeLevelQuestionCard from './GradeLevelQuestionCard'
import SubmitAnswerRequest from '../requests/SubmitAnswer'
import GetQuestionRequest from '../requests/GetQuestion'


const divStyle = {
  marginLeft: '140px',
  marginRight: '140px',
}

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
      },
      answeredQuestions: {
        correctQuestions: [],
        incorrectQuestions: []
      }
    }
    this.QuestionCard = React.createRef();
    this.GradeLevelQuestionCard = React.createRef();
  }

  render() {
    if( this.state.cardData.response === 1 ) {
      console.log("You're all set!");
      // TODO we need to replace this with some sort of pop-up
    }

    if( this.state.cardData.response === 2 ) {
      console.log("You need some work!");
      // TODO we need to replace this with some osrt of pop-up
    }

    return (
      <div className="RankView" style={divStyle}>
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
                    {this.getQuestionCard()}
                  </Grid>
                  {
                    this.state.cardData.response === undefined ?
                    <Grid container justify='center'>
                      <Button variant="contained" color="primary" onClick={this.makeAnswer}>
                        Submit
                      </Button>
                    </Grid>
                    : undefined
                  }
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
    if( response === 0 ) {
      let cardData = new GetQuestionRequest(this.state.sessionId, this.state.gradeLevel, this.state.answeredQuestions).send()
      this.setState({cardData: cardData})
    }
  }

  setGradeLevel = async() => {
    let gradeLevel = this.GradeLevelQuestionCard.current.getGradeLevel();
    let cardData = await new GetQuestionRequest(this.state.sessionId, gradeLevel, this.state.answeredQuestions).send()
    this.setState({
      gradeLevel: gradeLevel,
      cardData: cardData
    })
  }

  getQuestionCard = () => {
    switch(this.state.cardData.response) {
      case 1: return  <QuestionCard cardData={{
                        questionId: 1,
                        questionText: "You're all set! Looks like you're up to snuff with your grade level!",
                        questionUnits: ""
                      }} answerable={false} ref={this.QuestionCard}/>;
      case 2: return  <QuestionCard cardData={{
                        questionId: 1,
                        questionText: "We've found the issue with your knowledge!",
                        questionUnits: ""
                      }} answerable={false} ref={this.QuestionCard}/>;
      default: return <QuestionCard cardData={this.state.cardData} answerable={true} ref={this.QuestionCard}/>;
    }
  }
}

export default QuestionAnswerView;