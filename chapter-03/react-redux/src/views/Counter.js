import React, { PropTypes } from 'react';
import {increment, decrement} from '../Actions.js';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const buttonStyle = {
  margin: '10px'
};

function Counter({caption, onIncrement, onDecrement, value}) {
  const increment = () => {
    onIncrement(caption)
  }

  return (
    <div>
      <button style={buttonStyle} onClick={increment}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
      <span>{caption} count: {value}</span>
    </div>
  );
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

// function mapDispatchToProps(dispatch, ownProps) {
//   console.log('ownProps', ownProps)
//   return bindActionCreators({
//     onIncrement: increment,
//     onDecrement: decrement,
//   }, dispatch)
//   // return {
//   //   onIncrement: () => {
//   //     dispatch(Actions.increment(ownProps.caption));
//   //   },
//   //   onDecrement: () => {
//   //     dispatch(Actions.decrement(ownProps.caption));
//   //   }
//   // }
// }

const mapDispatchToProps = {
  onIncrement: increment,
  onDecrement: decrement,
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
