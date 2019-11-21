import React from 'react';


const divStyle = {
  marginLeft: '140px',
  marginRight: '140px',
}

class HomeView extends React.Component {
  
  render() {

    return (
      <div className="HomeView" style={divStyle}>
        <p> Welcome to EduLadder. Here, you can answer math questions to discover areas of your misunderstanding.</p>
        <p> You can also spend some time classifying questions to help the system learn what its data means. </p>

      </div>
    );
  }
  
}

export default HomeView;