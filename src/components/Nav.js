import React from 'react';

export class NavBar extends React.Component{
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {};
  }
  onClick(event){
    this.props.onClick(event.target.id);
  }
  render(){
    const buttons = [{id:'countDownLink', text:'Countdown Timer'},
                    {id : 'Randomizer', text:'Random'}];
    const navLinks = buttons.map(button => {
      return (
        <div><button id={button.id} onClick={this.onClick} >{button.text}</button>
        </div>
      )
    });
    return <div id="header" className="navigationMenu">{navLinks}</div>
  }
}
