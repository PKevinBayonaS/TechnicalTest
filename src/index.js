import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './components/Nav';
import {CountDownTimer} from './components/App';
import {FlipMath} from './components/Rnd';

function ShowComponent (props){
  if(props.comp.randomFlip){
    return(<FlipMath />);
  }
  if(props.comp.CountTimer){
    return(<CountDownTimer />);
  }
  return null;
}

class ProfilePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {countTime: false, randomFlip: false};
    this.showScreen = this.showScreen.bind(this);
  }
  showScreen(buttonID){
    this.setState(prevState => ({
      CountTimer:(buttonID === "countDownLink"),
      randomFlip: (buttonID === "Randomizer")
    }));
  }
  render(){
    return (
      <div id="content" className="content" >
      <NavBar onClick={this.showScreen} />
      <ShowComponent comp={this.state} />
      </div>
    );
  }
}

ReactDOM.render(<ProfilePage />, document.getElementById('root'));
