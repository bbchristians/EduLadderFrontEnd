import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

class QuestionCard extends React.Component {
  
  constructor() {
    super()
    this.state = {
      cardData: {
        questionId: -1,
        questionText: 'Unknown'
      },
      answerable: false,
      answer: '',
    }
    this.AnswerTextField = React.createRef();
  }
  
  componentDidMount() {
    this.setState({
      cardData: this.props.cardData,
      answerable: this.props.answerable
    });
  }
  
  render() {
    let cardTitle = "Question " + this.state.cardData.questionId;
    return (
     <Card>
      <CardHeader title={cardTitle}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.state.cardData.questionText}
        </Typography>
        { this.state.answerable ? 
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
