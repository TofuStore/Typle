import React from 'react'
import Box from './Box.jsx';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class BoxRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.spliceSlice = this.spliceSlice.bind(this);
  }

  spliceSlice(str, index, count, add) {
    if (index < 0) {
      index = str.length + index;
      if (index < 0) {
        index = 0;
      }
    }

    return str.slice(0, index) + (add || "") + str.slice(index + count);
  }

  render() {
    let wordChar = this.props.word.split('');
    let answer = this.props.answer.slice();
    let count = 0;

    for(let i = 0; i < wordChar.length; i++) {
      if (wordChar[i] === answer.charAt(i)) {
        wordChar[i] = [wordChar[i], 'green'];
        answer = this.spliceSlice(answer, i, 1, ' ');
        //this.props.addPoints(500);
        count++;
      }
    }

    for(let i = 0; i < wordChar.length; i++) {
      if(!Array.isArray(wordChar[i])) {
        if (answer.includes(wordChar[i])) {
          wordChar[i] = [wordChar[i], 'yellow'];
          answer = this.spliceSlice(answer, i, 1, ' ');
          //this.props.addPoints(200);
        } else {
          wordChar[i] = [wordChar[i], 'DarkGray'];
        }
      }
    }

    // if (count === 5) {
    //   this.props.addPoints(2000);
    // }

    return(
      <Row>
        {
          wordChar.map((letter) => {
            return (
              <Box letter={letter[0]} color={letter[1]} />
            )
          })
        }
      </Row>
    )
  }
}

export default BoxRow