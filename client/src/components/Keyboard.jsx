import React from 'react';
import KeyboardRow from './KeyboardRow.jsx';

class Keyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: ['q','w','e','r','t','y','u','i','o','p'],
      middle: ['a','s','d','f','g','h','j','k','l'],
      bottom: ['z','x','c','v','b','n','m'],
    }
  }

  render() {
    return(
      <>
        <KeyboardRow keys={this.state.top} />
        <KeyboardRow keys={this.state.middle} />
        <KeyboardRow keys={this.state.bottom} />
      </>
    )
  }
}

export default Keyboard