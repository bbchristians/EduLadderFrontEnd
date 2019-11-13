import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

class GradeLevelQuestionCard extends React.Component {

  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return (
     <Card>
      <CardHeader title="What is your grade level?"/>
      <CardContent>
        <TextField label="Answer" margin="normal" variant="outlined" onChange={this.questionAnswered}/>
      </CardContent>
     </Card>
    );
  }
  
  questionAnswered = (event) => {
    this.setState({
      gradeLevel: event.target.value
    });
  }
  
  getGradeLevel() { return(this.state.gradeLevel); }
}

export default GradeLevelQuestionCard;
