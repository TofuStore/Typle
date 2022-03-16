import React from 'react'
import Box from './Box.jsx';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

class InputRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let wordChar = this.props.word.split('');

    return(
      <Row>
        {
          wordChar.map((letter) => {
            return (
              <Box letter={letter} />
            )
          })
        }
      </Row>
    )
  }
}

export default InputRow