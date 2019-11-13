import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RankView from './components/RankView'
import QuestionAnswerView from './components/QuestionAnswerView'
import HomeView from './components/HomeView'
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import './App.css';
import logo from './images/giraffe.png'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      page: 'home'
    }
  }
  
  render() {
    return(
      <div className='App-header' >
        <Drawer variant="permanent" anchor="left">
          <div/>
          <img src={logo} width='100px' height='auto'/>
          <Divider />
          <List>
            <ListItem button key='home' onClick={this.showHome}>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button key='answer'onClick={this.showQuestionAnswer}>
              <ListItemText primary='Answer' />
            </ListItem>
            <ListItem button key='classify'onClick={this.showClassify}>
              <ListItemText primary='Classify' />
            </ListItem>
          </List>
        </Drawer>
        {
          this.renderContent()
        }
      </div>
    );
  }

  renderContent = () => {
    switch(this.state.page) {
      case 'home': return <HomeView />; break;
      case 'answer': return <QuestionAnswerView />; break;
      case 'classify': return <RankView />; break;
    }
  }

  showHome = () => {
    this.setState({...this.state, ['page']:'home'});
  }

  showQuestionAnswer = () => {
    this.setState({...this.state, ['page']:'answer'});
  }

  showClassify = () => {
    this.setState({...this.state, ['page']:'classify'});
  }

}

export default App;
