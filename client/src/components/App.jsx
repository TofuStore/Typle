import React from 'react'
import BoxArea from './BoxArea.jsx';
import Keyboard from './Keyboard.jsx';
import InputRow from './InputRow.jsx';
import styled from 'styled-components';
import axios from 'axios';

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  top:0px;
  right:0px;
  bottom:0px;
  left:0px;
`;

const Header = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  margin: 0px;
  padding: 20px 20px;
  font-family: Georgia, sans-serif;
`;

const Timer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  margin: 0px;
  padding: 20px 20px;
  font-family: Georgia, sans-serif;
  font-size: 2.5em;
`;

const KeyboardPosition = styled.div`
  position: fixed;
  bottom: 50px;
  width: 100%;
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      answer: 'placeholder',
      input: '',
      newWord: '',
      time: {},
      seconds: 30,
      points: 0
    }

    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.addPoints = this.addPoints.bind(this);
  }

  componentDidMount() {
    axios.get('/api/word').then((results) => {
      console.log(results);
      this.setState({
        answer: results.data.word.toLowerCase(),
      })
    })
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  addPoints(points) {
    let newPoints = this.state.points + points;
    this.setState({
      points: newPoints,
    })
  }

  startTimer() {
    if (this.timer == 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);
    }
  }

  secondsToTime(secs){
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      "h": hours,
      "m": minutes,
      "s": seconds
    };
    return obj;
  }

  updateInput(event) {
    this.startTimer();
    if (event.key === 'Enter') {
      if (this.state.input.length === 5) {
        axios.get('/api/check', {
          params: {
            word: this.state.input
          }
        }).then((results) => {
          if (results.data.word === this.state.input) {
            let newWords = this.state.words.slice();
            if (!newWords.includes(this.state.input)) {
              newWords.push(this.state.input);
            }
            this.setState({
              words: newWords,
              input: '',
            })
          } else {
            this.setState({
              input: ''
            })
          }
        })
      } else {
        this.setState({
          input: ''
        })
      }

    } else if (event.key === 'Backspace') {
      this.setState({
        input: this.state.input.slice(0, this.state.input.length - 1),
      })
    } else if (this.state.input.length < 5) {
      this.setState({
        input: this.state.input + event.key,
      })
    }
  }

  render() {
    let word = this.state.input.slice();
    while (word.length < 5) {
      word = word + ' ';
    }

    let start = this.state.words.length - 5 >= 0 ? this.state.words.length - 5 : 0;

    return(
      <div tabIndex='0' onKeyDown={this.updateInput}>
        <Header>
          Typele
        </Header>
        <Timer>
          {/* <button onClick={this.startTimer}>Start</button> */}
          {this.state.time.s}s
        </Timer>
        <Background>
          <BoxArea key={this.state.words} words={this.state.words.slice(start, this.state.words.length)} answer={this.state.answer} addPoints={this.addPoints}/>
          <InputRow word={word}/>
          <KeyboardPosition>
            <Keyboard />
          </KeyboardPosition>
        </Background>
      </div>
    )
  }
}

export default App