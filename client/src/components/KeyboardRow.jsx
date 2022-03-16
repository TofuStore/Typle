import React from 'react'
import Key from './Key.jsx';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class KeyboardRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    let keys = this.props.keys.slice();
    let answer = this.props.answer.slice();
    let letters = this.props.letters.slice();

    for (let i = 0; i < keys.length; i++) {
      if (letters.includes(keys[i])) {
        if (answer.includes(keys[i])) {
          keys[i] = [keys[i], 'Green'];
        } else {
          keys[i] = [keys[i], 'Gray'];
        }
      } else {
        keys[i] = [keys[i], 'DarkGray'];
      }
    }



    return(
      <Row>
        {
          keys.map((letter) => {
            return (
              <Key letter={letter[0]} color={letter[1]}/>
            )
          })
        }
      </Row>
    )
  }
}

export default KeyboardRow