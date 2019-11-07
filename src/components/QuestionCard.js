import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';


class QuestionCard extends React.Component {
  
  constructor() {
    super()
    this.state = {
      cardData: {
        questionId: "Unknown"
      }
    }
  }
  
  componentDidMount() {
    this.setState({
      cardData: this.props.cardData
    });
  }
  
  render() {
    let cardTitle = "Question " + this.state.cardData.questionId
    return (
     <Card onClick={this.questionClicked}>
      <CardHeader title={cardTitle}/>
      <CardMedia image="/static/images/questions/sample_q.jpeg"/>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          What is the solution to this question?
        </Typography>
      </CardContent>
     </Card>
    );
  }
  
  //<div className="question" >
  //      
  //    </div>
  
  questionClicked = () => {
    this.setState({
      cardData: {
        questionId: this.state.cardData.questionId + 1
      }
    });
  }
}

export default QuestionCard;
