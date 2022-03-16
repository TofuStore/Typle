import React from 'react'
import styled from 'styled-components';

const Square = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  color: black;
  font-size: 2em;
  margin: 5px;
  background-color: ${props => props.color || 'DarkGray'};
  font-family: Georgia, sans-serif;
`;

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: 'F'
    }
  }

  render() {
    return(
      <Square color={this.props.color}>
        {this.props.letter.toUpperCase()}
      </Square>
    )
  }
}

export default Box