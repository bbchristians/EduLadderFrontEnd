import React from 'react';
import QuestionCard from './QuestionCard';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import RelatednessSlider from './RelatednessSlider'
import SubmitRankingRequest from '../requests/SubmitRanking'

class RankView extends React.Component {
  
  constructor() {
    super()
    this.state = {
      leftCardData: {
        questionId: 1,
        imageId: 'sample_q.jpeg'
      },
      rightCardData: {
        questionId: 2,
        imageId: 'sample_q.jpeg'
      },
      isRelated: false
    }
    this.RelatednessSlider = React.createRef();
  }
  
  render() {
    return (
      <div className="RankView">
        <Grid container spacing={2}
            justify="center"
            alignItems="center">
          <Grid item xs={5}>
            <QuestionCard cardData={this.state.leftCardData}/>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" fullWidth={true} onClick={this.answeredRelated}>
              Related
            </Button>
            <Button variant="contained" color="primary" fullWidth={true} onClick={this.answeredRelated}>
              Similar
            </Button>
            <Button variant="contained" color="primary" fullWidth={true} onClick={this.answeredUnrelated}>
              Different
            </Button>
          </Grid>
          <Grid item xs={5}>
            <QuestionCard cardData={this.state.rightCardData}/>
          </Grid>
          <Grid container xs={12}>
            { this.state.isRelated
              ? <RelatednessSlider ref={this.RelatednessSlider}/>
              : undefined
            }
          </Grid>
          <Grid container xs={12} justify='center'>
            { this.state.isRelated
              ?
                <Button variant="contained" color="primary" onClick={this.submitRanking}>
                  Submit
                </Button>
              : undefined
            }
          </Grid>
        </Grid>
      </div>
    );
  }
  
  answeredRelated = () => {
    this.setState({
      leftCardData: this.state.leftCardData,
      rightCardData: this.state.rightCardData,
      isRelated: true
    });
  }
  
  answeredUnrelated = () => {
    this.setState({
      leftCardData: this.state.leftCardData,
      rightCardData: this.state.rightCardData,
      isRelated: false
    });
  }
  
  submitRanking = () => {
    new SubmitRankingRequest(this.state.isRelated, this.RelatednessSlider.current.getValue()).send();
  }
}

export default RankView;