import React from 'react';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';

const iOSBoxShadow = '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';

const marks = [
  {
    value:  0,
    label: 'Question 1 is far more complex'
  },
  {
    value: 50,
    label: 'Similar'
  },
  {
    value:  100,
    label: 'Question 2 is far more complex'
  },
];

const IOSSlider = withStyles({
  root: {
    color: '#bfbfbf',
    height: 2,
    padding: '15px 0',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#fff',
    boxShadow: iOSBoxShadow,
    marginTop: -14,
    marginLeft: -14,
    '&:focus,&:hover,&$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: iOSBoxShadow,
      },
    },
  },
  active: {},
  track: {
    height: 2,
  },
  rail: {
    height: 2,
    backgroundColor: '#bfbfbf',
  },
  mark: {
    backgroundColor: '#bfbfbf',
    height: 8,
    width: 1,
    marginTop: -3,
  },
  markLabel: {
    color: '#bfbfbf',
    paddingTop: 8
  }
})(Slider);

class RelatednessSlider extends React.Component {
  
  constructor() {
    super();
    this.state = {
      sliderValue: 50.0
    }
  }
  
  render() {
    return(
      <Grid container spacing={3} alignItems='center'>
        <Grid item xs={12}>
          <IOSSlider defaultValue={50} marks={marks} onChange={this.handleSliderChange}/>
        </Grid>
      </Grid>
    );
  }
  
  handleSliderChange = (event, value) => this.setState({ sliderValue: value });
  
  getValue() { return( (this.state.sliderValue - 50.0) / 50.0 ); }
  
}

export default RelatednessSlider;