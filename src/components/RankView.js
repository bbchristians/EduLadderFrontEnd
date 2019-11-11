import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import QuestionCard from './QuestionCard';
import RelatednessSlider from './RelatednessSlider'
import SubmitRankingRequest from '../requests/SubmitRanking'

const StyledToggleButtonGroup = withStyles(theme => ({
  root: {
    flexDirection: 'column',
  },
  grouped: {
    border: 'none',
  },
}))(ToggleButtonGroup);

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
      isRelated: 'Unknown'
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
          <Grid item xs={2} align='center'>
            <StyledToggleButtonGroup size="medium" exclusive onChange={this.handleToggle}>
              <ToggleButton value='Related' selected={this.state.isRelated === 'Related'}>
                Related
              </ToggleButton>
              <ToggleButton value='Similar' selected={this.state.isRelated === 'Similar'}>
                Similar
              </ToggleButton>
              <ToggleButton value='Unrelated' selected={this.state.isRelated === 'Unrelated'}>
                Different
              </ToggleButton>
            </StyledToggleButtonGroup>
          </Grid>
          <Grid item xs={5}>
            <QuestionCard cardData={this.state.rightCardData}/>
          </Grid>
          <Grid container xs={12}>
            { this.state.isRelated !== 'Unrelated' && this.state.isRelated !== 'Unknown'
              ? <RelatednessSlider ref={this.RelatednessSlider}/>
              : undefined
            }
          </Grid>
          <Grid container xs={12} justify='center'>
            { this.state.isRelated !== 'Unrelated' && this.state.isRelated !== 'Unknown'
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
  
  handleToggle = (event, newValue) => {
    this.setState({
      leftCardData: this.state.leftCardData,
      rightCardData: this.state.rightCardData,
      isRelated: newValue
    });
  }
  
  submitRanking = () => {
    new SubmitRankingRequest(
      this.state.isRelated, 
      this.RelatednessSlider.current.getValue(), 
      this.state.leftCardData.questionId,
      this.state.rightCardData.questionId
    ).send();
  }
}

export default RankView;