import React from 'react';
import BoxRow from './BoxRow.jsx';

class BoxArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return(
      <>
        {this.props.words.map((word) => {
          return (
            <BoxRow word={word} answer={this.props.answer} addPoints={this.props.addPoints}/>
          )
        })}
      </>
    )
  }
}

export default BoxArea