import React from 'react'
import styled from 'styled-components';

const Rectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 40px;
  border-radius: 3px;
  color: black;
  font-size: 1em;
  margin: 2px;
  background-color: ${props => props.color || 'DarkGray'};
  font-family: Georgia, sans-serif;
`;

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      letter: 'F'
    }
  }

  render() {
    return(
      <Rectangle color={this.props.color}>
        {this.props.letter.toUpperCase()}
      </Rectangle>
    )
  }
}

export default Key