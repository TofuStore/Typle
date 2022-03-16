import React from 'react'
import BoxArea from './BoxArea.jsx';
import InputRow from './InputRow.jsx';
import Timer from './Timer.jsx';
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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      answer: 'placeholder',
      input: '',
      newWord: '',
    }

    this.updateInput = this.updateInput.bind(this);
  }

  componentDidMount() {
    axios.get('/api/word').then((results) => {
      console.log(results);
      this.setState({
        answer: results.data.word.toLowerCase(),
      })
    })
  }

  updateInput(event) {
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
        <Timer />
        <Background>
          <BoxArea key={this.state.words} words={this.state.words.slice(start, this.state.words.length)} answer={this.state.answer} />
          <InputRow word={word}/>
        </Background>
      </div>
    )
  }
}

export default App