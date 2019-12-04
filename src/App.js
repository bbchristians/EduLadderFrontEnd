import React from 'react';
import RankView from './components/RankView'
import QuestionAnswerView from './components/QuestionAnswerView'
import HomeView from './components/HomeView'
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
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
          <img src={logo} width='100px' height='auto' alt="Logo"/>
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
        <div>
        {
          this.renderContent()
        }
        </div>
      </div>
    );
  }

  renderContent = () => {
    switch(this.state.page) {
      case 'home': return <HomeView />;
      case 'answer': return <QuestionAnswerView />;
      case 'classify': return <RankView />;
      default: return <HomeView />;
    }
  }

  showHome = () => {
    this.setState({...this.state, 'page':'home'});
  }

  showQuestionAnswer = () => {
    this.setState({...this.state, 'page':'answer'});
  }

  showClassify = () => {
    this.setState({...this.state, 'page':'classify'});
  }

}

export default App;
