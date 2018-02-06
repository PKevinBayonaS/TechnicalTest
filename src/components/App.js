import React from 'react';

export class CountDownTimer extends React.Component {
  constructor(props){
    super(props);
    this.state = {time:{day:0, hrs:0, min:0, sec:0}, initialized:false};
    this.input =  {day:0, hrs:0, min:0, sec:0};
    this.timerStates = [{ id: 'day', text:'Days'},
                      { id: 'hrs', text:'Hours'},
                      { id: 'min', text:'Minutes'},
                      { id: 'sec', text:'Seconds'}];
    this.timer = 0;
    this.regresiveCount = this.regresiveCount.bind(this);
    this.getInputVlue = this.getInputVlue.bind(this);
    this.startCountDown = this.startCountDown.bind(this);
    this.endDate = new Date((new Date()).getFullYear(), 11, 31, 23, 59, 59).getTime();
  }
  getTime(){
    var today = new Date().getTime();
    var diference = this.endDate - today;
    let obj = {
      day: Math.floor(diference / (1000 * 60 * 60 * 24)),
      hrs: Math.floor((diference % (1000 * 60 * 60 * 24)) / (1000 * 60 *60)),
      min: Math.floor((diference % (1000 * 60 * 60)) / (1000 * 60)),
      sec: Math.floor((diference % (1000 * 60)) / 1000)
    };
    return obj;
  }
  componentDidMount(){
    if(this.timer === 0){
      this.timer = setInterval(this.regresiveCount, 1000);
    }
  }
  componentWillUnmount(){
    clearInterval(this.timer);
  }
  getInputVlue(event){
    const objectVal = event.target.value;
    if((/^[0-9]+$/).test(objectVal)){
      this.input[(event.target.id).substring(6)] = parseInt(objectVal);
    }
  }
  startCountDown(event){
    this.timerStates.map(timerState => {
      document.getElementById("input-" + timerState.id).value = '';
    });
    if(this.input.day !== 0 || this.input.hrs !== 0 || this.input.min !== 0 || this.input.sec !== 0){
      this.setState({
        time: this.input,
        initialized: true
      });
      this.input = {day:0, hrs:0, min:0, sec:0};
      if(this.timer === 0){
        this.timer = setInterval(this.regresiveCount, 1000);
      }else {
        this.regresiveCount;
      }
    }
    event.preventDefault();
  }
  regresiveCount(){
    if (this.state.initialized){
      var temp = new Date();
      this.endDate = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + this.state.time.day, temp.getHours() + this.state.time.hrs, temp.getMinutes() + this.state.time.min, temp.getSeconds() + this.state.time.sec).getTime();      
    }
    this.setState({
      time: this.getTime()
    });
    if(this.state.time.day === 0 && this.state.time.hrs === 0 && this.state.time.min === 0 && this.state.time.sec === 0){
      clearInterval(this.timer);
      this.timer=0;
    }
  }
  render() {
    const timeBox = this.timerStates.map(timerState =>{
      return (
        <div id={"segment-" + timerState.id}>
          <div id={timerState.id} className ="dynamicbox background" >
            <div id={"num-" + timerState.id}>
              {this.state.time[timerState.id]}
            </div>
            <br/>
            <div id={"mess-" + timerState.id}>
              {timerState.text}
            </div>
          </div>
          <br/>
          <div>
            <input type = "text" id={"input-" + timerState.id} onChange={this.getInputVlue} />
          </div>
        </div>
      )});
      return <div id="body" className="dinamycContent" >
                {timeBox}
                <div id="startCountDown">
                  <button id="startCountDownButton" onClick={this.startCountDown}>Start</button>
                </div>
              </div>
  }
}
