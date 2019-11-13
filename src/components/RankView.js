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
  }
}))(ToggleButtonGroup);

const divStyle = {
  marginLeft: '140px',
  marginRight: '140px',
}

class RankView extends React.Component {
  
  constructor() {
    super()
    this.state = {
      leftCardData: {
        questionId: 13123,
        questionText: "This is a sample question"
      },
      rightCardData: {
        questionId: 5012,
        questionText: "This is a different sample question"
      },
      isRelated: 'Unknown'
    }
    this.RelatednessSlider = React.createRef();
  }
  
  render() {

    return (
      <Grid container style={divStyle} r={50}>
        <Grid container spacing={2}
            justify="center"
            alignItems="center">
          <Grid item xs={5}>
            <QuestionCard cardData={this.state.leftCardData} answerable={false}/>
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
            <QuestionCard cardData={this.state.rightCardData} answerable={false}/>
          </Grid>
          <Grid container xs={12} justify='center'  alignContent='center'>
            { this.state.isRelated !== 'Unrelated' && this.state.isRelated !== 'Unknown'
              ? <RelatednessSlider ref={this.RelatednessSlider}/>
              : undefined
            }
          </Grid>
          <Grid container xs={12} justify='center'  alignContent='center'>
            { this.state.isRelated !== 'Unknown'
              ?
                <Button variant="contained" color="primary" onClick={this.submitRanking}>
                  Submit
                </Button>
              : undefined
            }
          </Grid>
        </Grid>
      </Grid>
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
    let sliderValue = 0;
    if( this.RelatednessSlider.current ) {
      sliderValue = this.RelatednessSlider.current.getValue();
    }
    new SubmitRankingRequest(
      this.state.isRelated, 
      sliderValue, 
      this.state.leftCardData.questionId,
      this.state.rightCardData.questionId
    ).send();
  }
}

export default RankView;