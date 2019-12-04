import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class QuestionCard extends React.Component {
  
  constructor() {
    super()
    this.state = {
      answer: '',
    }
    this.AnswerTextField = React.createRef();
  }
  
  render() {
    let cardTitle = this.props.cardTitle || "Question " + this.props.cardData.questionId;
    let cardStyle = {} 
    console.log(this.props.correct);

    if( this.props.correct !== undefined ) {
      cardStyle = {
        background: this.props.correct ? '#0A0' : '#A00',
        color: '#DDD'
      }
      console.log(cardStyle);
    }
    return (
     <Card style={cardStyle}>
      <CardHeader title={cardTitle}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.props.cardData.questionText}
        </Typography>
        { this.props.answerable ? 
          <TextField label="Answer" margin="normal" variant="outlined" onChange={this.questionAnswered}/>
          : undefined
        }
      </CardContent>
     </Card>
    );
  }
  
  questionAnswered = (event) => {
    this.setState({
      answer: event.target.value
    });
  }
  
  getAnswer() { return(this.state.answer); }
}

export default QuestionCard;
