import React from 'react'
import BoxArea from './BoxArea.jsx';
import styled from 'styled-components';

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
      answer: 'green',
      input: ''
    }
  }

  render() {
    return(
      <>
        <Header>
          Typele
        </Header>
        <Background>
          <BoxArea answer={this.state.answer}/>
        </Background>
      </>
    )
  }
}

export default App