import React from 'react';
import BoxRow from './BoxRow.jsx';

class BoxArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['theee', 'crate', 'notes']
    }
  }

  render() {
    return(
      <>
        {this.state.words.map((word) => {
          return (
            <BoxRow word={word} answer={this.props.answer}/>
          )
        })}
      </>
    )
  }
}

export default BoxArea