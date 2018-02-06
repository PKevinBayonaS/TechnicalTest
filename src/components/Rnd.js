import React from 'react';

export class FlipMath extends React.Component{
  constructor(){
    super();
    this.generateRandom = this.generateRandom.bind(this);
    this.getNValue = this.getNValue.bind(this);
    this.flip = this.flip.bind(this);
    this.inputn;
    this.state = {random:""};
  }
  generateRandom(){
    this.randomNumber(this.inputn);
  }
  getNValue(event){
    const rgx = /^[0-9}\b]+$/;
    const n = event.target.value;
    if(rgx.test(n)){
      this.inputn = parseInt(n);
    }
  }
  randomNumber(n){
    if(n>0 && n<1000000){
      var i= 0;
      var random;
      var  x= (new Date()).getMilliseconds();
      while(i<n){
        i++;
        random = (i * x + 1) % Math.abs(n);
        if(!(i<n)) i = 0;
        if(this.flip())break;
      };
      this.setState({random: random});
    }else {
      this.setState({random:""});
    }
  }
  flip(){
    return Math.random() >= 0.5;
  }
  render(){
    return <div id="body" className="dinamycContent">
      <div id="segmentRandom">
        <div id="randombox" className ="dynamicbox background" >
          <div id='numRandom' className ="font36" >
            {this.state.random}
          </div>
        </div>
        <br/>
        <div>
          <input type = "text" id="inputn" onChange={this.getNValue} />
        </div>
        <br/>
        <div id="randomButton" className="randomButton" >
          <button id="generateRan" onClick={this.generateRandom}>generate</button>
        </div>
      </div>
    </div>;
  }
}
