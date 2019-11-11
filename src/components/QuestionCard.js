import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
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
        questionId: "Unknown",
        imageId: "sample_q.jpeg"
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
     <Card onClick={this.questionClicked}>
      <CardHeader title={cardTitle}/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          What is the solution to this question?
        </Typography>
        { this.state.answerable ? 
          <TextField label="Answer" margin="normal" variant="outlined" onChange={this.questionAnswered}/>
          : undefined
        }
      </CardContent>
     </Card>
    );
  }
  
  questionClicked = () => {
    this.setState({
      cardData: {
        questionId: this.state.cardData.questionId + 1,
        imageId: this.state.cardData.imageId
      }
    });
  }
  
  questionAnswered = (event) => {
    this.setState({
      cardData: this.state.cardData,
      answerable: this.state.answerable,
      answer: event.target.value
    });
  }
  
  getAnswer() { return(this.state.answer); }
}

export default QuestionCard;
