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

    return(
      <Row>
        {
          this.props.keys.map((letter) => {
            return (
              <Key letter={letter}/>
            )
          })
        }
      </Row>
    )
  }
}

export default KeyboardRow